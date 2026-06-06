/*
 * SUDIP MONDAL — PORTFOLIO ALL-IN-ONE FIXES
 * Covers: lightbox prev/next, Most Popular badge, testimonial avatars,
 *         LinkedIn footer, YouTube placeholder redirect, SEO meta tags,
 *         service card hover, counter animation, smooth scroll.
 *
 * Usage: <script src="js/fixes.js" defer></script>  (already added to index.html)
 */
(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     1. INJECT CSS
  ───────────────────────────────────────────── */
  const css = `
    /* Lightbox prev / next buttons */
    .lb-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255,255,255,0.08);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.18);
      color: #fff;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s ease, transform 0.2s ease;
      z-index: 10002;
    }
    .lb-nav:hover {
      background: rgba(245,166,35,0.35);
      transform: translateY(-50%) scale(1.1);
    }
    .lb-prev { left: 24px; }
    .lb-next { right: 24px; }
    @media (max-width: 600px) {
      .lb-prev { left: 8px; }
      .lb-next { right: 8px; }
      .lb-nav { width: 40px; height: 40px; }
    }

    /* Lightbox counter */
    .lb-counter {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255,255,255,0.55);
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      letter-spacing: 0.12em;
      z-index: 10002;
      pointer-events: none;
    }

    /* Most Popular badge */
    .svc-popular {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: linear-gradient(135deg, #f5a623, #e8890a);
      color: #000;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 20px;
      margin-bottom: 10px;
      font-family: 'Inter', sans-serif;
    }
    .svc-card.is-popular {
      outline: 1px solid rgba(245,166,35,0.35);
    }

    /* Testimonial avatars */
    .tst-avatar {
      width: 44px;
      height: 44px;
      min-width: 44px;
      border-radius: 50%;
      background: linear-gradient(135deg, #f5a623, #c97a08);
      color: #000;
      font-size: 14px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
      margin-right: 12px;
    }
    .tst-by {
      display: flex;
      align-items: center;
    }
    .tst-by-text {
      display: flex;
      flex-direction: column;
    }

    /* Service card hover lift */
    .svc-card {
      transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),
                  box-shadow 0.28s ease !important;
    }
    .svc-card:hover {
      transform: translateY(-6px) !important;
    }

    /* Scroll-behaviour for anchor links */
    html { scroll-behavior: smooth; }
  `;
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ─────────────────────────────────────────────
     2. SEO META TAGS  (canonical + Twitter card)
  ───────────────────────────────────────────── */
  const addMeta = function (attr, key, content) {
    if (document.querySelector('meta[' + attr + '="' + key + '"]')) return;
    const m = document.createElement('meta');
    m.setAttribute(attr, key);
    m.setAttribute('content', content);
    document.head.appendChild(m);
  };
  const addLink = function (rel, href) {
    if (document.querySelector('link[rel="' + rel + '"]')) return;
    const l = document.createElement('link');
    l.rel = rel;
    l.href = href;
    document.head.appendChild(l);
  };
  addMeta('name',     'twitter:card',        'summary_large_image');
  addMeta('name',     'twitter:title',       'Sudip Mondal — Best Cinematic Photographer in India | Weddings, Portraits & Films');
  addMeta('name',     'twitter:description', 'India\'s premier cinematic photographer & filmmaker. Weddings, portraits, brand films — making life look like a movie frame. Based in Kolkata · available pan-India.');
  addMeta('name',     'twitter:image',       'https://i.ibb.co/MDFzyJcW/5O7A6852.webp');
  addMeta('property', 'og:url',             'https://sudip-mondal.com/');
  // Swap canonical href to your real domain once deployed
  addLink('canonical', 'https://sudip-mondal.com/');

  /* ─────────────────────────────────────────────
     RUN DOM MUTATIONS AFTER CONTENT IS READY
  ───────────────────────────────────────────── */
  function run() {

    /* ── 3. MOST POPULAR BADGE on Wedding Films ── */
    document.querySelectorAll('.svc-name').forEach(function (el) {
      if (el.textContent.trim() !== 'Wedding Films') return;
      const card = el.closest('.svc-card');
      if (!card || card.querySelector('.svc-popular')) return;
      card.classList.add('is-popular');
      const badge = document.createElement('span');
      badge.className = 'svc-popular';
      badge.innerHTML = '&#9733; Most Popular';
      // Insert after the icon (before the h3)
      el.insertAdjacentElement('beforebegin', badge);
    });

    /* ── 4. TESTIMONIAL AVATAR INITIALS ── */
    var avatarData = [
      { initials: 'RA' },
      { initials: 'PS' },
      { initials: 'AB' },
    ];
    document.querySelectorAll('.tst-card').forEach(function (card, i) {
      var byEl = card.querySelector('.tst-by');
      if (!byEl || card.querySelector('.tst-avatar')) return;
      var data = avatarData[i] || { initials: '?' };
      var av = document.createElement('div');
      av.className = 'tst-avatar';
      av.textContent = data.initials;
      // Wrap existing children
      var wrapper = document.createElement('div');
      wrapper.className = 'tst-by-text';
      while (byEl.firstChild) wrapper.appendChild(byEl.firstChild);
      byEl.appendChild(av);
      byEl.appendChild(wrapper);
    });

    /* ── 5. LINKEDIN IN FOOTER ── */
    var footSocials = document.querySelector('.foot-socials');
    if (footSocials && !footSocials.querySelector('[aria-label="LinkedIn"]')) {
      var li = document.createElement('a');
      li.href = 'https://www.linkedin.com/in/sudip-mondal';
      li.target = '_blank';
      li.rel = 'noopener';
      li.className = 'foot-social';
      li.setAttribute('aria-label', 'LinkedIn');
      li.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>';
      footSocials.appendChild(li);
    }
    // Also add to footer nav Social column
    document.querySelectorAll('.foot-col').forEach(function (col) {
      var h4 = col.querySelector('h4');
      if (!h4 || h4.textContent.trim() !== 'Social') return;
      if (col.querySelector('[href*="linkedin"]')) return;
      var a = document.createElement('a');
      a.href = 'https://www.linkedin.com/in/sudip-mondal';
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = 'LinkedIn';
      var allLinks = col.querySelector('[href*="linktr"]');
      if (allLinks) allLinks.insertAdjacentElement('beforebegin', a);
      else col.appendChild(a);
    });

    /* ── 6. LIGHTBOX PREV / NEXT NAVIGATION ── */
    var lb    = document.getElementById('lightbox');
    var stage = document.getElementById('lightboxStage');
    if (lb && stage && !lb.querySelector('.lb-prev')) {
      var imgSrcs  = [];
      var currentIdx = 0;
      var counterEl  = null;

      var refreshSrcs = function () {
        imgSrcs = Array.from(document.querySelectorAll('[data-lightbox]'))
          .map(function (el) { return el.getAttribute('data-lightbox'); })
          .filter(Boolean);
      };

      // Capture current index when a lightbox is triggered
      document.addEventListener('click', function (e) {
        var trigger = e.target.closest('[data-lightbox]');
        if (!trigger) return;
        refreshSrcs();
        var src = trigger.getAttribute('data-lightbox');
        var idx = imgSrcs.indexOf(src);
        if (idx !== -1) currentIdx = idx;
        updateCounter();
      }, true); // capture phase → runs before cinematic.js

      // Build prev / next buttons
      var prevBtn = document.createElement('button');
      prevBtn.className = 'lb-nav lb-prev';
      prevBtn.setAttribute('aria-label', 'Previous image');
      prevBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>';

      var nextBtn = document.createElement('button');
      nextBtn.className = 'lb-nav lb-next';
      nextBtn.setAttribute('aria-label', 'Next image');
      nextBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>';

      counterEl = document.createElement('div');
      counterEl.className = 'lb-counter';

      lb.appendChild(prevBtn);
      lb.appendChild(nextBtn);
      lb.appendChild(counterEl);

      var updateCounter = function () {
        if (counterEl && imgSrcs.length) {
          counterEl.textContent = (currentIdx + 1) + ' / ' + imgSrcs.length;
        }
      };

      var goTo = function (idx) {
        if (!imgSrcs.length) return;
        currentIdx = (idx + imgSrcs.length) % imgSrcs.length;
        stage.innerHTML = '<img src="' + imgSrcs[currentIdx] + '" alt="Selected work — Sudip Mondal">';
        updateCounter();
      };

      prevBtn.addEventListener('click', function (e) { e.stopPropagation(); goTo(currentIdx - 1); });
      nextBtn.addEventListener('click', function (e) { e.stopPropagation(); goTo(currentIdx + 1); });

      // Arrow key navigation
      document.addEventListener('keydown', function (e) {
        if (!lb.classList.contains('open')) return;
        if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(currentIdx - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentIdx + 1); }
      });
    }

    /* ── 7. YOUTUBE PLACEHOLDER → CHANNEL REDIRECT ── */
    // Showreel button
    var reelBtn = document.querySelector('[data-yt="REPLACE_WITH_SHOWREEL_ID"]');
    if (reelBtn) {
      reelBtn.addEventListener('click', function () {
        window.open('https://www.youtube.com/@bunnyxdneo', '_blank', 'noopener');
      });
    }
    // Film card play button
    var filmCard = document.querySelector('[data-video="REPLACE_WITH_FILM_ID"]');
    if (filmCard) {
      filmCard.addEventListener('click', function () {
        window.open('https://www.youtube.com/@bunnyxdneo', '_blank', 'noopener');
      });
    }

  } // end run()

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

})();
