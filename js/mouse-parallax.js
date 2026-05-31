/**
 * Premium Mouse Parallax System
 * Apple / Tesla / Awwwards-grade site-wide depth effect.
 *
 * Architecture:
 *  - Single rAF loop, three lerp tiers (slow/mid/fast) for layered depth
 *  - CSS custom properties propagate values; transforms stay GPU-composited
 *  - Card 3D perspective tilt on hover
 *  - Cursor spotlight (radial gradient glow)
 *  - Fully disabled under prefers-reduced-motion or touch/stylus input
 */
(function () {
  'use strict';

  /* ── Guard: reduced-motion + non-pointer devices ────────────── */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  /* ── Configuration ──────────────────────────────────────────── */

  var EASE_SLOW  = 0.042;   // bg numbers  — deepest, heaviest lag
  var EASE_MID   = 0.072;   // hero icons  — mid depth
  var EASE_FAST  = 0.115;   // hero dots   — closest layer
  var EASE_SPOT  = 0.095;   // spotlight   — tracks cursor slightly behind

  // Max pixel offset when cursor is at viewport edge (max = strength × 1).
  // With ease lag the perceived movement is ~40–60% of these values.
  var STR_BG_X   = 7;    // bg-number horizontal  → max 7 px
  var STR_BG_Y   = 5;    // bg-number vertical    → max 5 px
  var STR_DIV_X  = 4;    // cinematic-divider     → max 4 px
  var STR_ICON   = 2.5;  // hero__icon ×index     → max 2.5/5/7.5 px
  var STR_DOT    = 2.5;  // hero__dot  ×index     → max 2.5/5/7.5 px

  var CARD_TILT_DEG = 3.8;   // max degrees of perspective tilt
  var CARD_LIFT_PX  = 6;     // z-axis lift on hover

  var SPOT_RADIUS = 320;     // spotlight radius in px
  var SPOT_ALPHA  = 0.052;   // spotlight peak opacity (very subtle)
  var SPOT_MID    = 0.014;   // spotlight mid-stop opacity

  /* ── Mutable state ──────────────────────────────────────────── */

  var rawX = 0, rawY = 0;   // normalised: 0 = centre, range −0.5…0.5

  // Slow tier
  var slX = 0, slY = 0;
  // Mid tier
  var mdX = 0, mdY = 0;
  // Fast tier
  var ftX = 0, ftY = 0;

  // Spotlight
  var spRawX = 0, spRawY = 0;
  var spCurX = 0, spCurY = 0;

  var hasMoved    = false;
  var loopRunning = false;

  /* ── DOM references (populated after DOMContentLoaded) ─────── */

  var bgEls      = [];   // .bg-number
  var divEls     = [];   // .cinematic-divider
  var heroIcons  = [];   // .hero__icon  [{ el, factor }]
  var heroDots   = [];   // .hero__dot   [{ el, factor }]
  var spotlight  = null;

  /* ── Spotlight ──────────────────────────────────────────────── */

  function buildSpotlight() {
    spotlight = document.createElement('div');
    spotlight.id = 'plx-spotlight';
    spotlight.setAttribute('aria-hidden', 'true');
    Object.assign(spotlight.style, {
      position:      'fixed',
      inset:         '0',
      pointerEvents: 'none',
      zIndex:        '2147483640',
      opacity:       '0',
      transition:    'opacity 1.4s ease',
      mixBlendMode:  'screen',
      willChange:    'background',
    });
    document.body.appendChild(spotlight);
    // Initialise to viewport centre so first tick has a valid position
    spRawX = spCurX = window.innerWidth  / 2;
    spRawY = spCurY = window.innerHeight / 2;
  }

  function paintSpotlight() {
    var x = spCurX.toFixed(1);
    var y = spCurY.toFixed(1);
    spotlight.style.background =
      'radial-gradient(circle ' + SPOT_RADIUS + 'px at ' + x + 'px ' + y + 'px, ' +
      'rgba(245,171,0,' + SPOT_ALPHA + ') 0%, ' +
      'rgba(245,171,0,' + SPOT_MID   + ') 38%, ' +
      'transparent 70%)';
  }

  /* ── Card 3D tilt ───────────────────────────────────────────── */

  var CARD_SEL = [
    '.service-card',
    '.gallery-item',
    '.ref-detail-block',
    '.ref-contact-card',
  ].join(', ');

  function bindCardTilt() {
    document.querySelectorAll(CARD_SEL).forEach(function (card) {
      card.style.willChange = 'transform';

      card.addEventListener('mousemove', function (e) {
        var r  = card.getBoundingClientRect();
        var nx = (e.clientX - r.left) / r.width  - 0.5;  // −0.5…0.5
        var ny = (e.clientY - r.top)  / r.height - 0.5;

        var rX  = -ny * CARD_TILT_DEG * 2;
        var rY  =  nx * CARD_TILT_DEG * 2;
        var shX = (-nx * 14).toFixed(1);
        var shY = (-ny *  9).toFixed(1);

        card.style.transition = 'transform 0.1s ease-out';
        card.style.transform  =
          'perspective(900px) rotateX(' + rX + 'deg) rotateY(' + rY + 'deg) ' +
          'translateZ(' + CARD_LIFT_PX + 'px)';
        card.style.boxShadow  =
          shX + 'px ' + shY + 'px 34px rgba(0,0,0,0.36), ' +
          '0 0 0 1px rgba(245,171,0,0.07)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transition =
          'transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease';
        card.style.transform  =
          'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        card.style.boxShadow  = '';
      });
    });
  }

  /* ── Collect parallax targets ───────────────────────────────── */

  function collectTargets() {
    bgEls = Array.from(document.querySelectorAll('.bg-number'));
    bgEls.forEach(function (el) { el.style.willChange = 'transform'; });

    divEls = Array.from(document.querySelectorAll('.cinematic-divider'));
    divEls.forEach(function (el) { el.style.willChange = 'transform'; });

    // Hero icons — each gets a depth factor based on its index
    document.querySelectorAll('.hero__icon').forEach(function (el, i) {
      el.style.willChange = 'transform';
      heroIcons.push({ el: el, fx: (i + 1) * STR_ICON, fy: (i + 1) * STR_ICON * 0.7 });
    });

    // Hero dots — lighter, faster layer
    document.querySelectorAll('.hero__dot').forEach(function (el, i) {
      el.style.willChange = 'transform';
      heroDots.push({ el: el, fx: (i + 1) * STR_DOT, fy: (i + 1) * STR_DOT * 0.8 });
    });
  }

  /* ── Mouse input ────────────────────────────────────────────── */

  function bindMouse() {
    document.addEventListener('mousemove', function (e) {
      rawX   = e.clientX / window.innerWidth  - 0.5;
      rawY   = e.clientY / window.innerHeight - 0.5;
      spRawX = e.clientX;
      spRawY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        spotlight.style.opacity = '1';
        startLoop();
      }
    }, { passive: true });
  }

  /* ── rAF loop ───────────────────────────────────────────────── */

  function startLoop() {
    if (loopRunning) return;
    loopRunning = true;
    tick();
  }

  function lerp(a, b, t) { return a + (b - a) * t; }
  function f(v)           { return v.toFixed(3); }

  function tick() {
    /* Interpolate depth tiers */
    slX = lerp(slX, rawX, EASE_SLOW);
    slY = lerp(slY, rawY, EASE_SLOW);
    mdX = lerp(mdX, rawX, EASE_MID);
    mdY = lerp(mdY, rawY, EASE_MID);
    ftX = lerp(ftX, rawX, EASE_FAST);
    ftY = lerp(ftY, rawY, EASE_FAST);

    /* Spotlight */
    spCurX = lerp(spCurX, spRawX, EASE_SPOT);
    spCurY = lerp(spCurY, spRawY, EASE_SPOT);
    paintSpotlight();

    /* Layer 0 — bg-number (deepest, slowest drift) */
    var bgTx = f(slX * STR_BG_X * 2);
    var bgTy = f(slY * STR_BG_Y * 2);
    for (var i = 0; i < bgEls.length; i++) {
      bgEls[i].style.transform = 'translate3d(' + bgTx + 'px,' + bgTy + 'px,0)';
    }

    /* Layer 1 — cinematic-divider (slow, x-axis drift only) */
    var dvTx = f(slX * STR_DIV_X * 2);
    for (var j = 0; j < divEls.length; j++) {
      divEls[j].style.transform = 'translate3d(' + dvTx + 'px,0,0)';
    }

    /* Layer 2 — hero icons (mid depth) */
    for (var k = 0; k < heroIcons.length; k++) {
      var ic = heroIcons[k];
      ic.el.style.transform =
        'translate3d(' + f(mdX * ic.fx * 2) + 'px,' + f(mdY * ic.fy * 2) + 'px,0)';
    }

    /* Layer 3 — hero dots (fast, closest) */
    for (var l = 0; l < heroDots.length; l++) {
      var dt = heroDots[l];
      dt.el.style.transform =
        'translate3d(' + f(ftX * dt.fx * 2) + 'px,' + f(ftY * dt.fy * 2) + 'px,0)';
    }

    requestAnimationFrame(tick);
  }

  /* ── Boot ───────────────────────────────────────────────────── */

  function init() {
    buildSpotlight();
    collectTargets();
    bindCardTilt();
    bindMouse();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
