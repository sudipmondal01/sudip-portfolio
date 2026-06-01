/* ============================================================
   SM-2026 — Clean enhancement layer (JS)
   - Accessible YouTube lightbox (iframe injected on click only)
   - IntersectionObserver scroll reveals (replaces AOS)
   No external dependencies.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     1. VIDEO LIGHTBOX
     Triggers: any element with [data-yt="<youtube-id>"].
     If the id is missing/placeholder, the trigger no-ops
     (so an un-filled reel never opens a broken player).
  --------------------------------------------------------- */
  var lightbox, frame, closeBtn, lastFocused;
  var PLACEHOLDER = 'REPLACE_WITH_';

  function buildLightbox() {
    lightbox = document.createElement('div');
    lightbox.className = 'sm-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Video player');
    lightbox.innerHTML =
      '<div class="sm-lightbox__frame">' +
        '<button class="sm-lightbox__close" type="button" aria-label="Close video">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>' +
        '</button>' +
      '</div>';
    document.body.appendChild(lightbox);
    frame = lightbox.querySelector('.sm-lightbox__frame');
    closeBtn = lightbox.querySelector('.sm-lightbox__close');

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'Tab') {
        // single focusable element → trap on close button
        e.preventDefault();
        closeBtn.focus();
      }
    });
  }

  function openLightbox(id) {
    if (!lightbox) buildLightbox();
    lastFocused = document.activeElement;

    var iframe = document.createElement('iframe');
    iframe.setAttribute('src',
      'https://www.youtube.com/embed/' + id +
      '?autoplay=1&rel=0&modestbranding=1&playsinline=1');
    iframe.setAttribute('title', 'Sudip Mondal — Reel');
    iframe.setAttribute('allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    frame.appendChild(iframe);

    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    var iframe = frame.querySelector('iframe');
    if (iframe) iframe.remove(); // stops playback
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function initReelTriggers() {
    document.querySelectorAll('[data-yt]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var id = el.getAttribute('data-yt');
        if (!id || id.indexOf(PLACEHOLDER) === 0) {
          // No real ID yet — don't open a broken player.
          console.warn('[sm-2026] Reel has no YouTube ID yet:', el);
          return;
        }
        openLightbox(id);
      });
    });
  }

  /* ---------------------------------------------------------
     2. SCROLL REVEALS (IntersectionObserver, replaces AOS)
  --------------------------------------------------------- */
  function initReveals() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = el.getAttribute('data-reveal-delay');
          if (delay) el.style.transitionDelay = delay + 'ms';
          el.classList.add('is-visible');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------
     3. COLOR GRADING — BEFORE/AFTER SLIDER
     Dragging anywhere on the slider (or the handle) updates:
       • .cg-graded clip-path → inset(0 0 0 pct%)  (reveals right portion)
       • #cgHandle left       → pct%
  --------------------------------------------------------- */
  function initCGSlider() {
    var slider = document.getElementById('cgSlider');
    if (!slider) return;

    var graded = document.getElementById('cgGraded');
    var handle = document.getElementById('cgHandle');
    var active  = false;

    function move(clientX) {
      var rect = slider.getBoundingClientRect();
      var pct  = Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100));
      graded.style.clipPath = 'inset(0 0 0 ' + pct + '%)';
      handle.style.left     = pct + '%';
    }

    /* Mouse */
    slider.addEventListener('mousedown', function (e) {
      active = true;
      move(e.clientX);
      e.preventDefault();
    });
    window.addEventListener('mousemove', function (e) { if (active) move(e.clientX); });
    window.addEventListener('mouseup',   function ()  { active = false; });

    /* Touch */
    slider.addEventListener('touchstart', function (e) {
      active = true;
      move(e.touches[0].clientX);
    }, { passive: true });
    slider.addEventListener('touchmove', function (e) {
      if (!active) return;
      move(e.touches[0].clientX);
      e.preventDefault();
    }, { passive: false });
    window.addEventListener('touchend', function () { active = false; });
  }

  /* ---------------------------------------------------------
     4. MOMENTS THAT MATTER — CORPORATE FAN CAROUSEL
     Same position-formula logic as initHospFan but uses
     #corpFan / #corpPrev / #corpNext + auto-loop.
  --------------------------------------------------------- */
  function initCorpFan() {
    var fan = document.getElementById('corpFan');
    if (!fan) return;

    var cards  = Array.from(fan.querySelectorAll('.corp-card'));
    var total  = cards.length;
    var center = 2;
    var loopTimer = null;

    function applyPositions() {
      cards.forEach(function (card, i) {
        var pos = ((i - center + 2) % total + total) % total;
        card.setAttribute('data-pos', String(pos));
      });
    }

    applyPositions();

    function tick()       { center = (center + 1) % total; applyPositions(); }
    function startLoop()  { if (!loopTimer) loopTimer = setInterval(tick, 3200); }
    function pauseLoop()  { clearInterval(loopTimer); loopTimer = null; }
    function resumeLoop() {
      pauseLoop();
      loopTimer = setTimeout(function () { loopTimer = null; startLoop(); }, 1200);
    }

    var btnPrev = document.getElementById('corpPrev');
    var btnNext = document.getElementById('corpNext');
    if (btnPrev) btnPrev.addEventListener('click', function () {
      center = (center - 1 + total) % total; applyPositions(); pauseLoop(); resumeLoop();
    });
    if (btnNext) btnNext.addEventListener('click', function () {
      center = (center + 1) % total; applyPositions(); pauseLoop(); resumeLoop();
    });

    cards.forEach(function (card, i) {
      card.addEventListener('click', function () {
        if (parseInt(card.getAttribute('data-pos')) !== 2) {
          center = i; applyPositions();
        }
      });
    });

    var wrap = fan.closest('.corp-fan-wrap');
    if (wrap) {
      wrap.addEventListener('mouseenter', pauseLoop);
      wrap.addEventListener('mouseleave', startLoop);
    }

    // Swipe support
    var dragX = null;
    fan.addEventListener('touchstart',  function (e) { pauseLoop(); dragX = e.touches[0].clientX; }, { passive: true });
    fan.addEventListener('touchend',    function (e) {
      if (dragX === null) return;
      var d = e.changedTouches[0].clientX - dragX; dragX = null;
      if (d >  50) { center = (center - 1 + total) % total; applyPositions(); }
      if (d < -50) { center = (center + 1) % total;          applyPositions(); }
      resumeLoop();
    });

    startLoop();
  }

  /* ---------------------------------------------------------
     5. ART OF HOSPITALITY — FAN CAROUSEL
     5 cards, 5 visual positions (data-pos 0..4, centre = 2).
     Formula: pos = ((cardIndex - centerIndex + 2) % total + total) % total
     Clicking prev/next shifts centerIndex; clicking a side card
     centres it immediately.
  --------------------------------------------------------- */
  function initHospFan() {
    var fan = document.getElementById('hospFan');
    if (!fan) return;

    var cards  = Array.from(fan.querySelectorAll('.hosp-card'));
    var total  = cards.length;
    var center = 2; // index of the card currently at visual position 2

    function applyPositions() {
      cards.forEach(function (card, i) {
        var pos = ((i - center + 2) % total + total) % total;
        card.setAttribute('data-pos', String(pos));
      });
    }

    applyPositions(); // set initial state

    var btnPrev = document.getElementById('hospPrev');
    var btnNext = document.getElementById('hospNext');

    if (btnPrev) {
      btnPrev.addEventListener('click', function () {
        center = (center - 1 + total) % total;
        applyPositions();
      });
    }
    if (btnNext) {
      btnNext.addEventListener('click', function () {
        center = (center + 1) % total;
        applyPositions();
      });
    }

    // Click a side card to bring it to centre
    cards.forEach(function (card, i) {
      card.addEventListener('click', function () {
        if (parseInt(card.getAttribute('data-pos')) !== 2) {
          center = i;
          applyPositions();
        }
      });
    });

    // Swipe / drag support (touch + mouse)
    var dragStartX = null;
    var THRESHOLD  = 50; // px

    function onDragStart(x) { pauseLoop(); dragStartX = x; }
    function onDragEnd(x) {
      if (dragStartX === null) return;
      var delta = x - dragStartX;
      dragStartX = null;
      if (delta > THRESHOLD)  { center = (center - 1 + total) % total; applyPositions(); }
      if (delta < -THRESHOLD) { center = (center + 1) % total;          applyPositions(); }
      resumeLoop();
    }

    fan.addEventListener('touchstart',  function (e) { onDragStart(e.touches[0].clientX); }, { passive: true });
    fan.addEventListener('touchend',    function (e) { onDragEnd(e.changedTouches[0].clientX); });
    fan.addEventListener('mousedown',   function (e) { onDragStart(e.clientX); });
    fan.addEventListener('mouseup',     function (e) { onDragEnd(e.clientX); });
    fan.addEventListener('mouseleave',  function ()  { dragStartX = null; resumeLoop(); });

    // Pause auto-loop on button click too, then resume after a beat
    if (btnPrev) btnPrev.addEventListener('click', function () { pauseLoop(); resumeLoop(); });
    if (btnNext) btnNext.addEventListener('click', function () { pauseLoop(); resumeLoop(); });

    // Auto-loop: advance one card every 3 s, pause on hover
    var loopTimer = null;
    var LOOP_MS   = 3000;

    function tick() {
      center = (center + 1) % total;
      applyPositions();
    }

    function startLoop() {
      if (loopTimer) return;
      loopTimer = setInterval(tick, LOOP_MS);
    }

    function pauseLoop() {
      clearInterval(loopTimer);
      loopTimer = null;
    }

    function resumeLoop() {
      // Debounce: restart after a short idle gap so manual clicks feel snappy
      pauseLoop();
      loopTimer = setTimeout(function () {
        loopTimer = null;
        startLoop();
      }, 1200);
    }

    var wrap = fan.closest('.hosp-fan-wrap');
    if (wrap) {
      wrap.addEventListener('mouseenter', pauseLoop);
      wrap.addEventListener('mouseleave', startLoop);
    }

    startLoop(); // begin auto-advance
  }

  /* ---------------------------------------------------------
     INIT
  --------------------------------------------------------- */
  function init() {
    initReelTriggers();
    initReveals();
    initCGSlider();
    initCorpFan();
    initHospFan();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
