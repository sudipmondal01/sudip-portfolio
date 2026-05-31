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
     INIT
  --------------------------------------------------------- */
  function init() {
    initReelTriggers();
    initReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
