/**
 * TWENTY-FIRST.JS
 * 21st.dev component patterns — translated to vanilla JS
 * Requires Motion v12 (window.Motion) to be loaded first.
 *
 * Components implemented:
 *  1. Word-by-word text reveal
 *  2. Glare card (3D tilt + soft-light radial glare)
 *  3. Infinite marquee (CSS-driven, JS duplicates content)
 *  4. Scroll progress bar
 *  5. Border draw animation on section entry
 *  6. Ambient blob parallax
 *  7. Image wrap upgrade (adds tf-img-wrap class)
 */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouchDevice  = !window.matchMedia('(pointer: fine)').matches;

  /* ── Utilities ──────────────────────────────────────────────── */
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var clamp = function (v, min, max) { return Math.min(Math.max(v, min), max); };

  /* ================================================================
     1. WORD-BY-WORD TEXT REVEAL
     Splits .tf-reveal-text into <span class="tf-word"> wrappers,
     then triggers staggered CSS transitions when element enters view.
  ================================================================ */
  function initWordReveal() {
    var targets = document.querySelectorAll('.tf-reveal-text');
    if (!targets.length) return;

    var inView = (window.Motion && window.Motion.inView) ? window.Motion.inView : null;

    targets.forEach(function (el) {
      /* Already processed */
      if (el.dataset.tfRevealDone) return;
      el.dataset.tfRevealDone = '1';

      /* Preserve child nodes that aren't text (e.g. spans with colour) */
      var nodes = Array.from(el.childNodes);
      el.innerHTML = '';

      nodes.forEach(function (node) {
        if (node.nodeType === Node.TEXT_NODE) {
          /* Split text node into words */
          var words = node.textContent.split(/(\s+)/);
          words.forEach(function (w) {
            if (!w.trim()) {
              el.appendChild(document.createTextNode(w));
              return;
            }
            var wordWrap  = document.createElement('span');
            wordWrap.className = 'tf-word';
            var wordInner = document.createElement('span');
            wordInner.className = 'tf-word-inner';
            wordInner.textContent = w;
            wordWrap.appendChild(wordInner);
            el.appendChild(wordWrap);
          });
        } else {
          /* Preserve non-text nodes (coloured spans, etc.) */
          el.appendChild(node);
        }
      });

      /* Stagger delays on each word */
      var innerSpans = el.querySelectorAll('.tf-word-inner');
      innerSpans.forEach(function (span, i) {
        span.style.transitionDelay = (i * 0.055) + 's';
      });

      /* Trigger on scroll entry */
      if (reducedMotion) {
        el.classList.add('revealed');
        return;
      }

      if (inView) {
        inView(el, function () {
          requestAnimationFrame(function () {
            el.classList.add('revealed');
          });
        }, { margin: '-5%' });
      } else {
        /* Fallback: IntersectionObserver */
        var obs = new IntersectionObserver(function (entries, o) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              o.unobserve(entry.target);
            }
          });
        }, { rootMargin: '-5% 0px' });
        obs.observe(el);
      }
    });
  }

  /* ================================================================
     2. GLARE CARD — 3D tilt + soft-light glare
     Based on 21st.dev aceternity/glare-card.
     Applies to elements with class .tf-glare-card.
  ================================================================ */
  function initGlareCards() {
    if (isTouchDevice || reducedMotion) return;

    document.querySelectorAll('.tf-glare-card').forEach(function (card) {
      var rect, isInside = false;
      var rX = 0, rY = 0, mX = 50, mY = 50, opacity = 0;
      var rXt = 0, rYt = 0;
      var rafId = null;
      var TILT_MAX = 8; /* max degrees */
      var EASE    = 0.12;

      function applyCSS() {
        card.style.setProperty('--r-x', rX.toFixed(2) + 'deg');
        card.style.setProperty('--r-y', rY.toFixed(2) + 'deg');
        card.style.setProperty('--m-x', mX.toFixed(1) + '%');
        card.style.setProperty('--m-y', mY.toFixed(1) + '%');
        card.style.setProperty('--opacity', opacity.toFixed(3));
      }

      function tick() {
        if (!isInside) {
          rX = lerp(rX, 0, 0.08);
          rY = lerp(rY, 0, 0.08);
          opacity = lerp(opacity, 0, 0.1);
        } else {
          rX = lerp(rX, rXt, EASE);
          rY = lerp(rY, rYt, EASE);
          opacity = lerp(opacity, 0.55, 0.1);
        }
        applyCSS();

        var stillMoving = Math.abs(rX) > 0.01 || Math.abs(rY) > 0.01 || Math.abs(opacity) > 0.005;
        if (isInside || stillMoving) {
          rafId = requestAnimationFrame(tick);
        } else {
          rafId = null;
        }
      }

      function startRaf() {
        if (!rafId) rafId = requestAnimationFrame(tick);
      }

      card.addEventListener('mouseenter', function () {
        isInside = true;
        card.classList.remove('tf-leaving');
        startRaf();
      }, { passive: true });

      card.addEventListener('mousemove', function (e) {
        rect = card.getBoundingClientRect();
        var nx = (e.clientX - rect.left) / rect.width;   /* 0-1 */
        var ny = (e.clientY - rect.top)  / rect.height;  /* 0-1 */
        rXt = clamp((nx - 0.5) * TILT_MAX * 2,  -TILT_MAX, TILT_MAX);
        rYt = clamp((ny - 0.5) * TILT_MAX * -2, -TILT_MAX, TILT_MAX);
        mX  = nx * 100;
        mY  = ny * 100;
      }, { passive: true });

      card.addEventListener('mouseleave', function () {
        isInside = false;
        card.classList.add('tf-leaving');
        rXt = 0; rYt = 0;
        startRaf();
        setTimeout(function () { card.classList.remove('tf-leaving'); }, 600);
      }, { passive: true });
    });
  }

  /* ================================================================
     3. INFINITE MARQUEE — duplicate content for seamless loop
     Based on 21st.dev aceternity/infinite-moving-cards.
  ================================================================ */
  function initMarquee() {
    document.querySelectorAll('.tf-marquee-track').forEach(function (track) {
      if (track.dataset.tfDuped) return;
      track.dataset.tfDuped = '1';
      /* Clone all children and append — creates seamless loop */
      var children = Array.from(track.children);
      children.forEach(function (child) {
        var clone = child.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
      });
    });
  }

  /* ================================================================
     4. SCROLL PROGRESS BAR
     Replaces existing progress bar with a thinner gold one.
  ================================================================ */
  function initScrollProgress() {
    /* Remove any existing progress bars created by script.js */
    document.querySelectorAll('div[style*="background:var(--yellow)"]').forEach(function (el) {
      if (el.style.position === 'fixed' && el.style.top === '0') el.remove();
    });

    var bar = document.getElementById('tf-scroll-progress');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'tf-scroll-progress';
      document.body.insertBefore(bar, document.body.firstChild);
    }

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var scrollY  = window.scrollY;
        var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (maxScroll > 0 ? (scrollY / maxScroll * 100) : 0) + '%';
        ticking = false;
      });
    }, { passive: true });
  }

  /* ================================================================
     5. BORDER DRAW on section entry
     Adds .tf-border-animated class when .tf-border-draw scrolls in.
  ================================================================ */
  function initBorderDraw() {
    if (reducedMotion) return;
    var inView = (window.Motion && window.Motion.inView) ? window.Motion.inView : null;

    document.querySelectorAll('.tf-border-draw').forEach(function (el) {
      if (inView) {
        inView(el, function () {
          el.classList.add('tf-border-animated');
        }, { margin: '-8%' });
      } else {
        var obs = new IntersectionObserver(function (entries, o) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('tf-border-animated');
              o.unobserve(entry.target);
            }
          });
        }, { rootMargin: '-8% 0px' });
        obs.observe(el);
      }
    });
  }

  /* ================================================================
     6. AMBIENT BLOB PARALLAX — blobs drift slightly on scroll
  ================================================================ */
  function initBlobParallax() {
    if (reducedMotion || isTouchDevice) return;
    var blobs = document.querySelectorAll('.tf-blob');
    if (!blobs.length) return;

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var sy = window.scrollY;
        blobs.forEach(function (blob, i) {
          var speed  = 0.04 + i * 0.015;
          var offset = (sy * speed).toFixed(1);
          blob.style.transform = 'translateY(' + offset + 'px) translateZ(0)';
        });
        ticking = false;
      });
    }, { passive: true });
  }

  /* ================================================================
     7. UPGRADE IMAGES — add tf-img-wrap on gallery images
     Wraps square-img inside tf-img-wrap for premium hover effect.
     Only wraps images not already inside a known wrapper.
  ================================================================ */
  function upgradeImages() {
    /* Images we want to upgrade (not already wrapped) */
    var selectors = [
      '.grid-3x2 .square-img',
      '.row-3-images .square-img',
      '.corporate-photo-grid img',
      '.diag-img img'
    ];

    selectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (img) {
        /* Skip if already wrapped */
        if (img.parentElement.classList.contains('tf-img-wrap')) return;

        var wrap = document.createElement('div');
        wrap.className = 'tf-img-wrap';
        /* Transfer display context */
        var computed = window.getComputedStyle(img);
        wrap.style.cssText = [
          'display:block',
          'width:' + (img.style.width || '100%'),
          'aspect-ratio:' + (img.style.aspectRatio || computed.aspectRatio || '4/5'),
          'border-radius:' + (img.style.borderRadius || '0')
        ].join(';');

        /* Clean redundant inline styles from img since wrap owns them */
        img.style.width  = '100%';
        img.style.height = '100%';
        img.style.aspectRatio = '';

        img.parentNode.insertBefore(wrap, img);
        wrap.appendChild(img);
      });
    });
  }

  /* ================================================================
     8. HERO TITLE — apply tf-display class + trigger word reveal
  ================================================================ */
  function initHeroTitle() {
    var title = document.querySelector('.hero-title');
    if (title) {
      title.classList.add('tf-display');
      /* The word reveal is triggered by initWordReveal above */
    }
  }

  /* ================================================================
     9. PILL LABEL — apply gradient badge treatment
  ================================================================ */
  function initGradientBadge() {
    var pill = document.querySelector('.pill-label');
    if (pill && !pill.classList.contains('tf-gradient-badge')) {
      pill.classList.add('tf-gradient-badge');
    }
  }

  /* ================================================================
     10. APPLY GLARE to service + testimonial cards
  ================================================================ */
  function applyGlareToCards() {
    var cards = document.querySelectorAll(
      '.service-card, .testimonial-card'
    );
    cards.forEach(function (card) {
      if (!card.classList.contains('tf-glare-card')) {
        card.classList.add('tf-glare-card');
      }
    });
  }

  /* ================================================================
     11. SECTION HEADER BORDER DRAW
  ================================================================ */
  function applyBorderDraw() {
    /* Apply to photography section header, about contact card */
    var targets = document.querySelectorAll(
      '.ref-about-header, .ref-contact-card'
    );
    targets.forEach(function (el) {
      el.classList.add('tf-border-draw');
    });
  }

  /* ================================================================
     12. UPGRADE HERO CTA — add shimmer class
  ================================================================ */
  function upgradeHeroCTA() {
    var bookBtn = document.querySelector('a[href="#contact"].hero-cv-btn');
    if (bookBtn) {
      bookBtn.classList.add('tf-shimmer-btn', 'gold');
    }
    var wowBtn = document.querySelector('.wow-cta-btn');
    if (wowBtn) {
      wowBtn.classList.add('tf-shimmer-btn', 'gold');
    }
  }

  /* ================================================================
     BOOT — DOMContentLoaded
  ================================================================ */
  function init() {
    initHeroTitle();
    initGradientBadge();
    initWordReveal();
    applyGlareToCards();
    initGlareCards();
    initMarquee();
    initScrollProgress();
    initBorderDraw();
    applyBorderDraw();
    initBlobParallax();
    /* upgradeImages() removed — DOM wrapping breaks CSS grid layout
       and conflicts with clip-path reveal animations */
    upgradeHeroCTA();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
