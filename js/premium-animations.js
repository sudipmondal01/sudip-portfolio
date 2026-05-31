/**
 * Premium Scroll Animations — Motion v12 engine
 * Cinematic image reveals, multi-depth parallax, section transitions.
 *
 * Architecture:
 *  - clip-path wipe reveals for all portfolio images (no DOM wrapping needed)
 *  - scroll()-linked parallax at 4 depth speeds for layered depth
 *  - inView() section entrances for text + layout elements
 *  - Hero entrance sequence runs once on load
 *  - Skips any element already handled by AOS (data-aos attribute)
 *  - Fully disabled under prefers-reduced-motion
 */
(function () {
  'use strict';

  /* ── Guard ───────────────────────────────────────────────────── */
  if (!window.Motion) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var animate  = window.Motion.animate;
  var inView   = window.Motion.inView;
  var scroll   = window.Motion.scroll;
  var stagger  = window.Motion.stagger;

  /* ── Easing constants ────────────────────────────────────────── */
  var EASE_CIN  = [0.76, 0, 0.24, 1];       // editorial, decisive
  var EASE_SOFT = [0.25, 0.46, 0.45, 0.94]; // natural landing
  var EASE_OUT  = [0.33, 1, 0.68, 1];       // quick out, slow settle

  /* ── Utility: skip AOS elements ─────────────────────────────── */
  function noAos(el) {
    return !el.hasAttribute('data-aos') && !el.closest('[data-aos]');
  }

  /* ================================================================
     1. CINEMATIC IMAGE REVEALS
     clip-path wipe + simultaneous de-scale for each photo group
  ================================================================ */
  function initImageReveals() {
    /* Safe opacity + scale reveals — no clip-path hiding.
       Images start visible at opacity 0 / scale 1.04 and
       animate to full opacity / scale 1 on scroll entry.
       This guarantees images are always recoverable even if
       the inView callback is delayed or never fires. */

    var SAFE_MARGIN = '10px'; /* fire as soon as 1px enters viewport */

    function revealFade(img, delay, scaleFrom) {
      img.style.opacity  = '0';
      img.style.transform = 'scale(' + (scaleFrom || 1.04) + ')';
      img.style.willChange = 'opacity, transform';

      inView(img, function () {
        animate(img,
          { opacity: [0, 1], transform: ['scale(' + (scaleFrom || 1.04) + ')', 'scale(1)'] },
          { duration: 0.85, easing: EASE_SOFT, delay: delay || 0 });
      }, { margin: SAFE_MARGIN });
    }

    /* (a) Tall featured portrait */
    var tallImg = document.querySelector('.tall-featured-img');
    if (tallImg) revealFade(tallImg, 0, 1.05);

    /* (b) Grid 3×2 images — staggered */
    document.querySelectorAll('.grid-3x2 .square-img').forEach(function (img, i) {
      revealFade(img, (i % 3) * 0.10, 1.04);
    });

    /* (c) Reel items — 2×2 column stagger */
    document.querySelectorAll('.reels-grid .reel-item').forEach(function (img, i) {
      revealFade(img, (i % 2) * 0.12 + Math.floor(i / 2) * 0.06, 1.04);
    });

    /* (d) Diagonal gallery — sequential */
    document.querySelectorAll('.diag-img img').forEach(function (img, i) {
      revealFade(img, i * 0.15, 1.04);
    });

    /* (e) Philosophy portrait */
    var philImg = document.querySelector('.phil-img');
    if (philImg) revealFade(philImg, 0, 1.04);

    /* (f) Corporate photo grid */
    document.querySelectorAll('.corporate-photo-grid img').forEach(function (img, i) {
      revealFade(img, i * 0.14, 1.04);
    });

    /* (g) Carousel cards — slide up */
    document.querySelectorAll('.carousel-card').forEach(function (card, i) {
      card.style.opacity   = '0';
      card.style.transform = 'translateY(24px)';

      inView(card, function () {
        animate(card,
          { opacity: [0, 1], transform: ['translateY(24px)', 'translateY(0px)'] },
          { duration: 0.65, easing: EASE_SOFT, delay: i * 0.09 });
      }, { margin: SAFE_MARGIN });
    });

    /* (h) Mobile editorial grid */
    document.querySelectorAll('.mobile-editorial-grid img').forEach(function (img, i) {
      revealFade(img, i * 0.10, 1.03);
    });

    /* (i) Row-3 images (Bride's Tale) */
    document.querySelectorAll('.row-3-images .square-img').forEach(function (img, i) {
      revealFade(img, i * 0.10, 1.04);
    });

    /* (j) Overlap images */
    document.querySelectorAll('.ov-img').forEach(function (img, i) {
      revealFade(img, i * 0.12, 1.03);
    });
  }

  /* ================================================================
     2. MULTI-DEPTH SCROLL PARALLAX
     4 speed tiers for a sense of 3D depth within each section
  ================================================================ */
  function initScrollParallax() {

    /* ── (a) Tall portrait — slow drift upward ──────────────── */
    var tallImg = document.querySelector('.tall-featured-img');
    if (tallImg) {
      scroll(
        animate(tallImg, { y: ['-18px', '18px'] }, { easing: 'linear' }),
        { target: tallImg, offset: ['start end', 'end start'] }
      );
    }

    /* ── (b) Grid-3x2 — alternating speed tiers ─────────────── */
    var gridSpeeds = [
      ['-14px', '6px'],
      ['-6px',  '14px'],
      ['-18px', '2px'],
      ['-10px', '10px'],
      ['-4px',  '16px'],
    ];
    document.querySelectorAll('.grid-3x2 .square-img').forEach(function (img, i) {
      var sp = gridSpeeds[i] || ['-10px', '10px'];
      scroll(
        animate(img, { y: [sp[0], sp[1]] }, { easing: 'linear' }),
        { target: img, offset: ['start end', 'end start'] }
      );
    });

    /* ── (c) Diagonal gallery — each column at distinct speed ── */
    var diagSpeeds = [
      ['-22px', '4px'],
      ['-8px',  '18px'],
      ['-16px', '8px'],
      ['-4px',  '22px'],
    ];
    document.querySelectorAll('.diag-img').forEach(function (wrap, i) {
      var sp = diagSpeeds[i] || ['-12px', '8px'];
      scroll(
        animate(wrap, { y: [sp[0], sp[1]] }, { easing: 'linear' }),
        { target: wrap, offset: ['start end', 'end start'] }
      );
    });

    /* ── (d) Reel items — alternating columns ────────────────── */
    document.querySelectorAll('.reels-grid .reel-item').forEach(function (img, i) {
      var sp = i % 2 === 0 ? ['-12px', '8px'] : ['-6px', '14px'];
      scroll(
        animate(img, { y: [sp[0], sp[1]] }, { easing: 'linear' }),
        { target: img, offset: ['start end', 'end start'] }
      );
    });

    /* ── (e) Philosophy portrait — slower float ─────────────── */
    var philLeft = document.querySelector('.phil-left');
    if (philLeft) {
      scroll(
        animate(philLeft, { y: ['-20px', '20px'] }, { easing: 'linear' }),
        { target: philLeft, offset: ['start end', 'end start'] }
      );
    }

    /* ── (f) Corporate grid — three-speed depth layers ──────── */
    var corpSpeeds = [
      ['-16px', '4px'],
      ['-8px',  '12px'],
      ['-20px', '0px'],
    ];
    document.querySelectorAll('.corporate-photo-grid img').forEach(function (img, i) {
      var sp = corpSpeeds[i] || ['-10px', '10px'];
      scroll(
        animate(img, { y: [sp[0], sp[1]] }, { easing: 'linear' }),
        { target: img, offset: ['start end', 'end start'] }
      );
    });

    /* ── (g) WOW image — enhance existing parallax with scale ── */
    var wowImg = document.querySelector('.wow-image');
    if (wowImg) {
      scroll(
        animate(wowImg, { scale: [1.08, 1.14] }, { easing: 'linear' }),
        { target: document.querySelector('.wow-section') || wowImg,
          offset: ['start end', 'end start'] }
      );
    }
  }

  /* ================================================================
     3. SECTION ENTRANCE TRANSITIONS
     Text columns, headings, service cards, WOW text
  ================================================================ */
  function initSectionTransitions() {

    /* ── (a) Section header labels (h3 overlines) ────────────── */
    document.querySelectorAll(
      '.photo-section-header h3, .video-section-header h3'
    ).forEach(function (el) {
      if (!noAos(el)) return;
      el.style.opacity   = '0';
      el.style.transform = 'translateX(-20px)';

      inView(el, function () {
        animate(el,
          { opacity: 1, transform: 'translateX(0px)' },
          { duration: 0.6, easing: EASE_OUT });
      }, { margin: '-5%' });
    });

    /* ── (b) Phil-right text column — slides from right ─────── */
    var philRight = document.querySelector('.phil-right');
    if (philRight && noAos(philRight)) {
      philRight.style.opacity   = '0';
      philRight.style.transform = 'translateX(36px)';

      inView(philRight, function () {
        animate(philRight,
          { opacity: 1, transform: 'translateX(0px)' },
          { duration: 1.0, easing: EASE_CIN, delay: 0.15 });
      }, { margin: '-8%' });
    }

    /* ── (c) Service cards — staggered bottom entrance ───────── */
    var serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length) {
      serviceCards.forEach(function (card) {
        if (!noAos(card)) return;
        card.style.opacity   = '0';
        card.style.transform = 'translateY(28px)';
      });

      inView('.services-grid', function () {
        animate(
          '.service-card',
          { opacity: 1, transform: 'translateY(0px)' },
          { delay: stagger(0.12, { startDelay: 0.05 }),
            duration: 0.7,
            easing: EASE_SOFT }
        );
      }, { margin: '-5%' });
    }

    /* ── (d) WOW text — dramatic scale + opacity reveal ──────── */
    var wowText = document.querySelector('.wow-text');
    if (wowText) {
      wowText.style.opacity   = '0';
      wowText.style.transform = 'scale(0.9) translateY(40px)';

      inView(wowText, function () {
        animate(wowText,
          { opacity: 1, transform: 'scale(1) translateY(0px)' },
          { duration: 1.3, easing: EASE_CIN });
      }, { margin: '-20%' });
    }

    /* ── (e) Phil subtitle + description — staggered ─────────── */
    var philDesc = document.querySelectorAll('.phil-subtitle, .phil-desc');
    philDesc.forEach(function (el, i) {
      if (!noAos(el)) return;
      el.style.opacity   = '0';
      el.style.transform = 'translateY(18px)';

      inView(el, function () {
        animate(el,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.75, easing: EASE_SOFT, delay: i * 0.1 + 0.2 });
      }, { margin: '-5%' });
    });

    /* ── (f) Signature — fade in last ───────────────────────── */
    var sig = document.querySelector('.signature');
    if (sig && noAos(sig)) {
      sig.style.opacity   = '0';
      sig.style.transform = 'translateY(10px)';

      inView(sig, function () {
        animate(sig,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.9, easing: EASE_SOFT, delay: 0.5 });
      }, { margin: '-5%' });
    }

    /* ── (g) Timeline cards ──────────────────────────────────── */
    document.querySelectorAll('.timeline-card, .toc-card').forEach(function (card, i) {
      if (!noAos(card)) return;
      card.style.opacity   = '0';
      card.style.transform = 'translateY(24px)';

      inView(card, function () {
        animate(card,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.65, easing: EASE_SOFT, delay: i * 0.08 });
      }, { margin: '-5%' });
    });

    /* ── (h) Contact form card ───────────────────────────────── */
    var contactCard = document.querySelector('.ref-contact-card');
    if (contactCard && noAos(contactCard)) {
      contactCard.style.opacity   = '0';
      contactCard.style.transform = 'translateY(30px)';

      inView(contactCard, function () {
        animate(contactCard,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.9, easing: EASE_SOFT });
      }, { margin: '-5%' });
    }
  }

  /* ================================================================
     4. HERO ENTRANCE SEQUENCE
     One-time staggered entrance on page load
  ================================================================ */
  function initHeroEntrance() {
    var pill     = document.querySelector('.pill-label');
    var title    = document.querySelector('.hero__title');
    var subtitle = document.querySelector('.hero__subtitle');
    var stats    = document.querySelectorAll('.hero-stat');
    var cvBtn    = document.querySelector('.hero-cv-btn');

    /* Only run if none of these have pre-existing CSS animations
       that would fight with Motion (check computed animationName) */
    var seq = [];

    if (pill) {
      pill.style.opacity   = '0';
      pill.style.transform = 'translateY(-12px)';
      seq.push([pill,
        { opacity: 1, transform: 'translateY(0px)' },
        { duration: 0.5, easing: EASE_OUT, at: 0.15 }
      ]);
    }

    if (title) {
      title.style.opacity   = '0';
      title.style.transform = 'translateY(24px)';
      seq.push([title,
        { opacity: 1, transform: 'translateY(0px)' },
        { duration: 0.9, easing: EASE_CIN, at: 0.3 }
      ]);
    }

    if (subtitle) {
      subtitle.style.opacity = '0';
      seq.push([subtitle,
        { opacity: 1 },
        { duration: 0.65, easing: EASE_SOFT, at: 0.65 }
      ]);
    }

    if (stats.length) {
      stats.forEach(function (stat, i) {
        stat.style.opacity   = '0';
        stat.style.transform = 'translateY(16px)';
        seq.push([stat,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.55, easing: EASE_SOFT, at: 0.75 + i * 0.1 }
        ]);
      });
    }

    if (cvBtn) {
      cvBtn.style.opacity = '0';
      seq.push([cvBtn,
        { opacity: 1 },
        { duration: 0.5, easing: EASE_SOFT, at: 1.0 }
      ]);
    }

    if (seq.length > 0) {
      animate(seq);
    }
  }

  /* ================================================================
     5. SMOOTH SECTION DIVIDER REVEALS
     The cinematic-divider lines draw in as you scroll past them
  ================================================================ */
  function initDividerReveals() {
    document.querySelectorAll('.cinematic-divider .divider-line').forEach(function (line) {
      line.style.transform  = 'scaleY(0)';
      line.style.transformOrigin = 'top center';
      line.style.opacity    = '0';

      inView(line, function () {
        animate(line,
          { transform: 'scaleY(1)', opacity: 1 },
          { duration: 0.8, easing: EASE_CIN });
      }, { margin: '-5%' });
    });
  }

  /* ================================================================
     BOOT
  ================================================================ */
  function init() {
    initImageReveals();
    initScrollParallax();
    initSectionTransitions();
    initHeroEntrance();
    initDividerReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ── Dead-man's switch — force-reveal any images still hidden ───
     If inView never fires (e.g., element off-screen + browser quirk),
     this resets any portfolio image stuck at opacity:0 after 5s.    */
  setTimeout(function () {
    var IMG_SEL = [
      '.tall-featured-img', '.square-img', '.reel-item',
      '.diag-img img', '.phil-img', '.corporate-photo-grid img',
      '.ov-img', '.mobile-editorial-grid img'
    ].join(', ');

    document.querySelectorAll(IMG_SEL).forEach(function (img) {
      var computed = window.getComputedStyle(img);
      if (parseFloat(computed.opacity) < 0.1) {
        img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        img.style.opacity    = '1';
        img.style.transform  = 'scale(1)';
      }
    });
  }, 5000);

}());
