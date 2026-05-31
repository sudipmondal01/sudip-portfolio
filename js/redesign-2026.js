/**
 * Redesign 2026 — Feature JavaScript
 * Photo category filter · Form handler · Video interactions
 * Motion v12 (window.Motion) already loaded before this file.
 */
(function () {
  'use strict';

  /* ── Reduced motion guard ──────────────────────────────────── */
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ================================================================
     1. PHOTO CATEGORY FILTER
     Toggles visibility of photo-filter-block elements by category.
     Animates with Motion when available.
  ================================================================ */
  function initPhotoFilter() {
    var bar     = document.querySelector('.photo-filter-bar');
    var blocks  = document.querySelectorAll('.photo-filter-block');
    if (!bar || !blocks.length) return;

    var animate = (window.Motion && window.Motion.animate) ? window.Motion.animate : null;

    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;

      /* Update active state */
      bar.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      var cat = btn.dataset.filter;

      blocks.forEach(function (block, i) {
        var blockCat = block.dataset.category;
        var show     = cat === 'all' || blockCat === cat;

        if (show) {
          block.classList.remove('filter-hidden');
          if (animate && !reducedMotion) {
            block.style.opacity = '0';
            block.style.transform = 'translateY(16px)';
            animate(block,
              { opacity: [0, 1], y: [16, 0] },
              { duration: 0.5, easing: [0.25, 0.46, 0.45, 0.94], delay: i * 0.06 }
            );
          } else {
            block.style.opacity = '1';
            block.style.transform = 'none';
          }
        } else {
          if (animate && !reducedMotion) {
            animate(block,
              { opacity: [1, 0], y: [0, 8] },
              { duration: 0.3, easing: [0.25, 0.46, 0.45, 0.94] }
            ).then(function () {
              block.classList.add('filter-hidden');
            });
          } else {
            block.classList.add('filter-hidden');
          }
        }
      });
    });
  }

  /* ================================================================
     2. CONTACT FORM — Labels, loading, success, error states
  ================================================================ */
  function initContactForm() {
    var form = document.querySelector('.contact-form');
    if (!form) return;

    var submitBtn  = form.querySelector('.submit-btn');
    var successDiv = form.closest('.contact-right')
                    ? form.closest('.contact-right').querySelector('.form-success')
                    : null;

    function showError(input, message) {
      input.classList.add('input-error');
      var group = input.closest('.form-field-group');
      if (group) {
        var errEl = group.querySelector('.form-field-error');
        if (errEl) {
          errEl.textContent = message;
          errEl.classList.add('visible');
        }
      }
    }

    function clearErrors() {
      form.querySelectorAll('.input-error').forEach(function (el) {
        el.classList.remove('input-error');
      });
      form.querySelectorAll('.form-field-error').forEach(function (el) {
        el.classList.remove('visible');
      });
    }

    function validateForm() {
      var valid = true;
      clearErrors();

      var nameInput  = form.querySelector('input[name="name"], input[type="text"]');
      var emailInput = form.querySelector('input[name="email"], input[type="email"]');
      var msgInput   = form.querySelector('textarea');

      if (nameInput && !nameInput.value.trim()) {
        showError(nameInput, 'Please enter your name.');
        valid = false;
      }
      if (emailInput) {
        var emailVal = emailInput.value.trim();
        var emailRe  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailVal) {
          showError(emailInput, 'Please enter your email.');
          valid = false;
        } else if (!emailRe.test(emailVal)) {
          showError(emailInput, 'Please enter a valid email address.');
          valid = false;
        }
      }
      if (msgInput && !msgInput.value.trim()) {
        showError(msgInput, 'Please tell me about your project.');
        valid = false;
      }

      return valid;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm()) return;

      /* Loading state */
      var btnText = submitBtn ? submitBtn.textContent : 'Send Message';
      if (submitBtn) {
        submitBtn.classList.add('loading');
        submitBtn.textContent = 'Sending…';
        submitBtn.disabled = true;
      }

      function showSuccess() {
        if (successDiv) {
          form.style.display = 'none';
          successDiv.classList.add('visible');
          if (window.Motion && window.Motion.animate && !reducedMotion) {
            window.Motion.animate(successDiv,
              { opacity: [0, 1], y: [20, 0] },
              { duration: 0.6, easing: [0.25, 0.46, 0.45, 0.94] }
            );
          }
        } else if (submitBtn) {
          submitBtn.textContent = '✓ Message Sent!';
          submitBtn.style.background = '#22c55e';
          submitBtn.style.color = '#fff';
          setTimeout(function () {
            submitBtn.textContent = btnText;
            submitBtn.style.background = '';
            submitBtn.style.color = '';
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            form.reset();
          }, 3500);
        }
      }

      function resetBtn() {
        if (submitBtn) {
          submitBtn.classList.remove('loading');
          submitBtn.textContent = btnText;
          submitBtn.disabled = false;
        }
      }

      /* =========================================================
         BACKEND ENDPOINT — ⚠️ SWAP POINT
         1. Sign up free at https://formspree.io using sudipxv@gmail.com
         2. Create a form, copy its ID (formspree.io/f/abcdwxyz → "abcdwxyz")
         3. Replace REPLACE_WITH_FORMSPREE_ID below.
         Until then: hand off to the visitor's email app — NEVER fake "sent".
      ========================================================= */
      var FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID';

      if (FORM_ENDPOINT.indexOf('REPLACE_WITH_') !== -1) {
        var nm = (form.querySelector('input[name="name"], input[type="text"]') || {}).value || '';
        var em = (form.querySelector('input[name="email"], input[type="email"]') || {}).value || '';
        var pr = (form.querySelector('select') || {}).value || '';
        var dt = (form.querySelector('input[type="date"]') || {}).value || '';
        var ms = (form.querySelector('textarea') || {}).value || '';
        var subject = encodeURIComponent('Project Inquiry: ' + (pr || 'General') + ' — ' + nm);
        var body = encodeURIComponent(
          'Name: ' + nm + '\nEmail: ' + em + '\nProject: ' + (pr || 'Not specified') +
          (dt ? '\nPreferred date: ' + dt : '') + '\n\n' + ms
        );
        window.location.href = 'mailto:sudipxv@gmail.com?subject=' + subject + '&body=' + body;
        resetBtn();
        return;
      }

      /* REAL SEND — success ONLY on HTTP ok */
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function (response) {
        if (response.ok) { showSuccess(); }
        else { throw new Error('HTTP ' + response.status); }
      }).catch(function (err) {
        console.error('[contact] send failed:', err);
        resetBtn();
        var msgInput = form.querySelector('textarea');
        if (msgInput) showError(msgInput, "Couldn't send — please WhatsApp +91 70446 92706 or email sudipxv@gmail.com.");
      });
    });

    /* Clear error on input change */
    form.querySelectorAll('.form-input').forEach(function (input) {
      input.addEventListener('input', function () {
        this.classList.remove('input-error');
        var group = this.closest('.form-field-group');
        if (group) {
          var errEl = group.querySelector('.form-field-error');
          if (errEl) errEl.classList.remove('visible');
        }
      });
    });
  }

  /* ================================================================
     3. VIDEO THUMBNAIL HOVER — preview lift on reel section
  ================================================================ */
  function initVideoHovers() {
    var animate = (window.Motion && window.Motion.animate) ? window.Motion.animate : null;
    if (!animate || reducedMotion) return;

    document.querySelectorAll('.carousel-card').forEach(function (card) {
      card.addEventListener('mouseenter', function () {
        animate(card, { y: -6, scale: 1.02 }, { duration: 0.3, easing: [0.25, 0.46, 0.45, 0.94] });
      });
      card.addEventListener('mouseleave', function () {
        animate(card, { y: 0, scale: 1 }, { duration: 0.4, easing: [0.25, 0.46, 0.45, 0.94] });
      });
    });

    /* Reel items */
    document.querySelectorAll('.reel-item').forEach(function (img) {
      var wrap = img.parentElement;
      wrap.addEventListener('mouseenter', function () {
        animate(img, { scale: 1.04 }, { duration: 0.5, easing: [0.25, 0.46, 0.45, 0.94] });
      });
      wrap.addEventListener('mouseleave', function () {
        animate(img, { scale: 1 }, { duration: 0.5, easing: [0.25, 0.46, 0.45, 0.94] });
      });
    });
  }

  /* ================================================================
     4. SERVICE CARD ICON PULSE on hover
  ================================================================ */
  function initServiceCardHover() {
    var animate = (window.Motion && window.Motion.animate) ? window.Motion.animate : null;
    if (!animate || reducedMotion) return;

    document.querySelectorAll('.service-card').forEach(function (card) {
      var icon = card.querySelector('.service-icon');
      if (!icon) return;

      card.addEventListener('mouseenter', function () {
        animate(icon, { scale: [1, 1.12, 1.08] }, { duration: 0.4, easing: [0.25, 0.46, 0.45, 0.94] });
      });
    });
  }

  /* ================================================================
     5. SECTION NUMBER COUNTER ANIMATION
     Animates stat numbers (170+, 65+) when they scroll into view
  ================================================================ */
  function initStatCounters() {
    var inView = (window.Motion && window.Motion.inView) ? window.Motion.inView : null;
    if (!inView) return;

    document.querySelectorAll('.stat-number, .about-cred-number').forEach(function (el) {
      var raw   = el.textContent.trim();
      var num   = parseInt(raw.replace(/\D/g, ''), 10);
      var suffix = raw.replace(/[0-9]/g, '');
      if (!num) return;

      var triggered = false;
      inView(el, function () {
        if (triggered) return;
        triggered = true;
        var start  = 0;
        var end    = num;
        var dur    = 1200;
        var startT = null;

        function step(ts) {
          if (!startT) startT = ts;
          var progress = Math.min((ts - startT) / dur, 1);
          var ease     = 1 - Math.pow(1 - progress, 3); /* cubic ease out */
          el.textContent = Math.round(ease * end) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }, { margin: '-10%' });
    });
  }

  /* ================================================================
     6. SMOOTH SCROLL for newly added nav links
  ================================================================ */
  function initSmoothScrollLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ── Boot ──────────────────────────────────────────────────── */
  function init() {
    initPhotoFilter();
    initContactForm();
    initVideoHovers();
    initServiceCardHover();
    initStatCounters();
    initSmoothScrollLinks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
