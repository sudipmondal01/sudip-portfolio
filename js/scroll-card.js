/**
 * scroll-card.js
 * Drives the "Love in Motion" 3D container-scroll animation.
 *
 * Effect: as .lim-scroll-card enters the viewport, rotateX eases
 * from 16° → 0° and scale from 0.96 → 1, matching the feel of
 * the Aceternity ContainerScroll React component.
 *
 * Architecture note:
 *   - CSS sets the INITIAL tilted state (rotateX(16deg) scale(0.96))
 *   - JS overrides transform on every scroll tick via RAF
 *   - No CSS transition on the card — JS is the animation driver,
 *     a CSS transition would lag behind and fight the RAF updates
 *   - perspective lives on .lim-perspective-wrap (the parent), not
 *     on the card itself — CSS perspective only works on the parent
 */
(function () {
  'use strict';

  /* Skip if OS prefers reduced motion */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var card = document.querySelector('.lim-scroll-card');
  if (!card) return;

  var ticking  = false;
  var isMobile = window.innerWidth <= 768;

  /* ── helpers ── */
  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }

  /* Ease-out-cubic: fast start, gentle finish */
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  /* ── main update ── */
  function update() {
    var rect = card.getBoundingClientRect();
    var wh   = window.innerHeight;

    /*
     * progress = 0  when card top is at the bottom of viewport (just entering)
     * progress = 1  when card top reaches the top of viewport (fully unveiled)
     * We cap progress at 1 so the card stays flat once fully in view.
     */
    var raw      = (wh - rect.top) / wh;
    var progress = easeOutCubic(clamp(raw, 0, 1));

    var maxRotate = isMobile ? 10   : 16;
    var minScale  = isMobile ? 0.97 : 0.96;

    var rotateX = maxRotate * (1 - progress);          /* 16 → 0 */
    var scale   = minScale  + (1 - minScale) * progress; /* 0.96 → 1 */

    card.style.transform =
      'rotateX(' + rotateX.toFixed(3) + 'deg) scale(' + scale.toFixed(4) + ')';

    ticking = false;
  }

  /* ── event listeners ── */
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', function () {
    isMobile = window.innerWidth <= 768;
    requestAnimationFrame(update);
  }, { passive: true });

  /* Run once at load so the initial tilt is correct if the section
     is already partially in view (e.g. after a hash-link navigation) */
  requestAnimationFrame(update);
}());
