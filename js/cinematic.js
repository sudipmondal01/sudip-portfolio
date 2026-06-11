/* ============================================================
   SUDIP MONDAL — CINEMATIC PORTFOLIO  ·  interactions
   Vanilla JS, zero dependencies. Powers index-cinematic.html
   ============================================================ */
(() => {
  'use strict';

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);

  /* ---------- 1. LOADER ---------- */
  (() => {
    const loader = $('#loader');
    const finish = () => document.body.classList.add('loaded');
    if (!loader || reduce) { finish(); return; }

    // Repeat visit this session → no curtain, straight to content
    let seen = false;
    try { seen = sessionStorage.getItem('sm-seen') === '1'; sessionStorage.setItem('sm-seen', '1'); } catch (e) {}
    if (seen) { loader.style.display = 'none'; finish(); return; }

    const status = $('#ld-status');
    const words = ['FOCUSING…', 'METERING…', 'ROLLING…'];
    let i = 0;
    const timer = setInterval(() => {
      i = (i + 1) % words.length;
      if (status) status.textContent = words[i];
    }, 350);

    const t0 = performance.now();
    let done = false;
    const finishSoon = () => {
      if (done) return; done = true;
      // keep the curtain up just long enough to not flash (min 600ms)
      const wait = Math.max(0, 600 - (performance.now() - t0));
      setTimeout(() => { clearInterval(timer); finish(); }, wait);
    };
    // Reveal as soon as the hero (LCP) is painted — don't wait for every asset
    const hero = $('.hero-bg');
    if (hero) {
      if (hero.complete) finishSoon();
      else { hero.addEventListener('load', finishSoon, { once: true }); hero.addEventListener('error', finishSoon, { once: true }); }
    }
    window.addEventListener('load', finishSoon);
    // safety net so slow third-party images never hold the page hostage
    setTimeout(finishSoon, 1400);
  })();


  /* ---------- 2. SCROLL PROGRESS ---------- */
  (() => {
    const bar = $('#progress');
    if (!bar) return;
    let ticking = false;
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  })();

  /* ---------- 3. NAV SCROLL STATE ---------- */
  (() => {
    const nav = $('#nav');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  /* ---------- 4. MOBILE MENU ---------- */
  (() => {
    const burger = $('.nav-burger');
    const menu = $('#navMobile');
    if (!burger || !menu) return;
    const setOpen = (open) => {
      burger.classList.toggle('open', open);
      menu.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('lb-lock', open);
    };
    burger.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
    $$('a', menu).forEach(a => a.addEventListener('click', () => setOpen(false)));
  })();

  /* ---------- 5. ACTIVE NAV LINK ---------- */
  (() => {
    const links = $$('.nav-links a');
    if (!links.length || !('IntersectionObserver' in window)) return;
    const map = {};
    links.forEach(a => { const id = a.getAttribute('href'); if (id && id.startsWith('#')) map[id.slice(1)] = a; });
    const sections = $$('section[id]').filter(s => map[s.id]);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          if (map[e.target.id]) map[e.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => io.observe(s));
  })();

  /* ---------- 6. CUSTOM CURSOR ---------- */
  (() => {
    if (!finePointer || reduce || isTouch) return;
    const dot = document.createElement('div'); dot.className = 'cursor-dot';
    const ring = document.createElement('div'); ring.className = 'cursor-ring';
    document.body.append(dot, ring);
    document.documentElement.classList.add('has-cursor');

    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    }, { passive: true });
    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    const hoverSel = 'a, button, [data-magnetic], .work-card, .fm-slide, [data-lightbox]';
    document.addEventListener('pointerover', (e) => {
      if (e.target.closest(hoverSel)) { dot.classList.add('is-hover'); ring.classList.add('is-hover'); }
    });
    document.addEventListener('pointerout', (e) => {
      if (e.target.closest(hoverSel) && !(e.relatedTarget && e.relatedTarget.closest(hoverSel))) {
        dot.classList.remove('is-hover'); ring.classList.remove('is-hover');
      }
    });
    document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
  })();

  /* ---------- 7. MAGNETIC ---------- */
  (() => {
    if (reduce || isTouch) return;
    $$('[data-magnetic]').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${clamp(x * 0.3, -8, 8)}px, ${clamp(y * 0.3, -8, 8)}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  })();

  /* ---------- 8. PARALLAX ---------- */
  (() => {
    if (reduce) return;
    const items = $$('[data-parallax]');
    if (!items.length) return;
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      items.forEach(el => {
        const factor = parseFloat(el.dataset.parallax) || 0;
        const r = el.getBoundingClientRect();
        const offset = (r.top + r.height / 2) - vh / 2;
        el.style.transform = `translate3d(0, ${(-offset * factor).toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  })();

  /* ---------- 9. REVEALS  (+ counters) ---------- */
  (() => {
    const reveals = $$('.reveal');
    const animateCount = (el) => {
      const target = parseFloat(el.dataset.count);
      if (el.classList.contains('nc') || isNaN(target)) return;
      const suffix = el.dataset.suffix || '';
      const dur = 1600, t0 = performance.now();
      const tick = (now) => {
        const p = clamp((now - t0) / dur, 0, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + (p === 1 ? suffix : '');
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const reveal = (el) => {
      el.classList.add('in');
      $$('[data-count]', el).forEach(animateCount);
      if (el.matches('[data-count]')) animateCount(el);
    };
    if (reduce || !('IntersectionObserver' in window)) { reveals.forEach(reveal); return; }
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => { if (e.isIntersecting) { reveal(e.target); obs.unobserve(e.target); } });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(el => io.observe(el));
  })();

  /* ---------- 10. LIGHTBOX — VIEWFINDER ---------- */
  (() => {
    const lb = $('#lightbox');
    const stage = $('#lightboxStage');
    if (!lb || !stage) return;
    const counter = $('#lbCounter');
    const cap = $('#lbCap');
    const prevBtn = $('.lb-prev', lb);
    const nextBtn = $('.lb-next', lb);

    // Serve lightbox images via the same CDN at display size (faster than raw originals)
    const sized = (src, w = 1920) =>
      src.includes('i.ibb.co') && !src.includes('wsrv.nl')
        ? `https://wsrv.nl/?url=${src}&w=${w}&q=85&output=webp&we&maxage=1y`
        : src;

    // Gallery = every [data-lightbox] trigger, in document order
    let items = [];
    let idx = -1;
    const collect = () => {
      items = $$('[data-lightbox]').map(el => ({
        src: el.getAttribute('data-lightbox'),
        cap: (el.getAttribute('data-cap') || ($('img', el) || el).getAttribute?.('alt') || '')
          .split('—')[0].trim()
      })).filter(it => it.src);
    };

    const pad = (n) => String(n).padStart(2, '0');
    const updateHud = () => {
      if (counter) counter.textContent = items.length ? `FR ${pad(idx + 1)} / ${pad(items.length)}` : '';
      if (cap) cap.textContent = (items[idx] && items[idx].cap) || '';
    };
    const preload = (i) => {
      const it = items[(i + items.length) % items.length];
      if (it) { const im = new Image(); im.src = sized(it.src); }
    };

    const isImgMode = () => idx >= 0;
    const show = (i, instant = false) => {
      if (!items.length) return;
      idx = (i + items.length) % items.length;
      const swap = () => {
        stage.innerHTML = `<img src="${sized(items[idx].src)}" alt="${items[idx].cap || 'Selected work — Sudip Mondal'}">`;
        const im = $('img', stage);
        if (im) im.addEventListener('error', () => { im.src = items[idx].src; }, { once: true });
        stage.classList.remove('is-switching');
        updateHud();
        preload(idx + 1); preload(idx - 1);
      };
      if (instant || reduce) { swap(); return; }
      stage.classList.add('is-switching');
      setTimeout(swap, 160);
    };

    const open = (html) => {
      stage.innerHTML = html;
      lb.classList.add('open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lb-lock');
    };
    const close = () => {
      lb.classList.remove('open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lb-lock');
      stage.innerHTML = '';
      idx = -1;
      if (counter) counter.textContent = '';
      if (cap) cap.textContent = '';
    };

    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-lightbox]');
      if (trigger) {
        e.preventDefault();
        collect();
        const src = trigger.getAttribute('data-lightbox');
        const i = items.findIndex(it => it.src === src);
        open('');
        show(i === -1 ? 0 : i, true);
      }
    });
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); show(idx - 1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); show(idx + 1); });

    // Featured reel → YouTube
    const reel = $('.fm-reel');
    if (reel) reel.addEventListener('click', () => {
      const id = reel.getAttribute('data-yt');
      if (id && id !== 'REPLACE_WITH_SHOWREEL_ID') {
        idx = -1;
        open(`<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" title="Showreel" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`);
      } else {
        window.open('https://www.youtube.com/@bunnyxdneo', '_blank', 'noopener');
      }
    });
    // Work card video lightbox (data-video attribute)
    document.addEventListener('click', (e) => {
      const card = e.target.closest('[data-video]');
      if (card) {
        const id = card.getAttribute('data-video');
        e.preventDefault();
        if (id && id !== 'REPLACE_WITH_FILM_ID') {
          idx = -1;
          open(`<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" title="Chasing Shadows" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`);
        } else {
          window.open('https://www.youtube.com/@bunnyxdneo', '_blank', 'noopener');
        }
      }
    });
    lb.addEventListener('click', (e) => { if (e.target === lb || e.target.closest('.lightbox-close')) close(); });
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (isImgMode() && e.key === 'ArrowLeft') { e.preventDefault(); show(idx - 1); }
      if (isImgMode() && e.key === 'ArrowRight') { e.preventDefault(); show(idx + 1); }
    });
  })();

  /* ---------- 11. WORK FILTERS ---------- */
  (() => {
    const tabs = document.querySelectorAll('.wf-tab');
    const cards = document.querySelectorAll('.work-card[data-category]');
    if (!tabs.length || !cards.length) return;
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.getAttribute('data-filter');
        cards.forEach(card => {
          const match = filter === 'all' || card.getAttribute('data-category') === filter;
          card.classList.toggle('wc-hidden', !match);
        });
      });
    });
  })();

  /* ---------- 12. CAROUSELS ---------- */
  (() => {
    const wire = (trackId, prevId, nextId) => {
      const track = document.getElementById(trackId);
      const prev = document.getElementById(prevId);
      const next = document.getElementById(nextId);
      if (!track) return;
      const step = () => {
        const slide = track.querySelector('.fm-slide');
        const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 16;
        return slide ? slide.offsetWidth + gap : track.clientWidth * 0.8;
      };
      if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
      if (next) next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
    };
    wire('hospFan', 'hospPrev', 'hospNext');
    wire('corpFan', 'corpPrev', 'corpNext');
  })();

  /* ---------- 12. BEFORE / AFTER SLIDER ---------- */
  (() => {
    const slider = $('#cgSlider');
    const graded = $('#cgGraded');
    const handle = $('#cgHandle');
    if (!slider || !graded || !handle) return;
    let dragging = false;
    const set = (clientX) => {
      const r = slider.getBoundingClientRect();
      const p = clamp(((clientX - r.left) / r.width) * 100, 0, 100);
      graded.style.clipPath = `inset(0 0 0 ${p}%)`;
      handle.style.left = `${p}%`;
    };
    const start = (e) => { dragging = true; slider.classList.add('dragging'); set(e.clientX); };
    const move = (e) => { if (dragging) set(e.clientX); };
    const end = () => { dragging = false; slider.classList.remove('dragging'); };
    slider.addEventListener('pointerdown', start);
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerup', end);
    slider.style.cursor = 'ew-resize';

    // pair switcher
    const rawImg = $('#cgRawImg');
    const gradedImg = $('#cgGradedImg');
    $$('.cg-pair-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.cg-pair-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const src = btn.dataset.src;
        if (rawImg) rawImg.src = src;
        if (gradedImg) gradedImg.src = src;
        // reset handle to centre
        graded.style.clipPath = 'inset(0 0 0 50%)';
        handle.style.left = '50%';
      });
    });
  })();

  /* ---------- 13. ENQUIRY WIZARD (3-step) ---------- */
  (() => {
    const form = $('#bookingForm');
    const success = $('#formSuccess');
    if (!form) return;
    const panels = $$('.fw-panel', form);
    const steps = $$('.fw-step', form);
    const barFill = $('#fwBarFill');
    const label = $('#fwLabel');
    if (!panels.length) return;
    const titles = ['Your event', 'Date & location', 'Your details'];
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let current = 0;

    const fieldOf = (el) => el.closest('.fg');
    const fail = (el, msg) => {
      const fg = fieldOf(el); if (!fg) return;
      fg.classList.add('error');
      const m = $('.msg', fg); if (m) m.textContent = msg;
    };
    const clearErr = (el) => {
      const fg = fieldOf(el); if (!fg) return;
      fg.classList.remove('error');
      const m = $('.msg', fg); if (m) m.textContent = '';
    };
    $$('input, select, textarea', form).forEach(el => {
      el.addEventListener('input', () => clearErr(el));
      el.addEventListener('change', () => clearErr(el));
    });

    const goTo = (idx) => {
      current = clamp(idx, 0, panels.length - 1);
      panels.forEach((p, i) => p.classList.toggle('active', i === current));
      steps.forEach((s, i) => s.classList.toggle('active', i <= current));
      if (barFill) barFill.style.width = ((current + 1) / panels.length) * 100 + '%';
      if (label) label.textContent = `Step ${current + 1} of ${panels.length} · ${titles[current] || ''}`;
    };

    const validatePanel = (idx) => {
      const panel = panels[idx];
      let ok = true;
      // required radio group
      const radio = panel.querySelector('input[type="radio"][required]');
      if (radio && !panel.querySelector(`input[name="${radio.name}"]:checked`)) {
        fail(radio, 'Please pick one'); ok = false;
      }
      $$('input:not([type="radio"])[required], select[required], textarea[required]', panel).forEach(el => {
        const v = el.value.trim();
        if (!v) { fail(el, 'This field is required'); ok = false; }
        else if (el.type === 'email' && !emailRe.test(v)) { fail(el, 'Enter a valid email'); ok = false; }
      });
      return ok;
    };

    $$('.fw-next', form).forEach(btn => btn.addEventListener('click', () => {
      if (validatePanel(current)) goTo(current + 1);
    }));
    $$('.fw-back', form).forEach(btn => btn.addEventListener('click', () => goTo(current - 1)));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validatePanel(current)) return;
      const btn = form.querySelector('[type="submit"]');
      const origText = btn ? btn.textContent : '';
      const errDiv = $('#formError');
      if (errDiv) errDiv.classList.remove('show');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form),
        });
        if (res.ok) {
          form.classList.add('gone');
          if (success) success.classList.add('show');
        } else {
          if (btn) { btn.disabled = false; btn.textContent = origText; }
          if (errDiv) errDiv.classList.add('show');
        }
      } catch {
        if (btn) { btn.disabled = false; btn.textContent = origText; }
        if (errDiv) errDiv.classList.add('show');
      }
    });

    goTo(0);
  })();

  /* ---------- 14. FAQ ACCORDION ---------- */
  (() => {
    const btns = $$('.faq-q');
    if (!btns.length) return;
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btns.forEach(other => {
          if (other === btn) return;
          other.setAttribute('aria-expanded', 'false');
          const a = other.nextElementSibling;
          if (a) a.setAttribute('hidden', '');
        });
        btn.setAttribute('aria-expanded', String(!expanded));
        const answer = btn.nextElementSibling;
        if (answer) {
          if (expanded) answer.setAttribute('hidden', '');
          else answer.removeAttribute('hidden');
        }
      });
    });
  })();

  /* ---------- 15. IMAGE CDN RESILIENCE ---------- */
  // If the image CDN ever fails, fall back to the original file (data-fb)
  (() => {
    window.addEventListener('error', (e) => {
      const t = e.target;
      if (t && t.tagName === 'IMG' && t.dataset.fb && !t.dataset.fbDone) {
        t.dataset.fbDone = '1';
        t.removeAttribute('srcset');
        t.removeAttribute('sizes');
        t.src = t.dataset.fb;
      }
    }, true);
  })();

  /* ---------- 16. FOOTER YEAR ---------- */
  (() => { const yr = $('#yr'); if (yr) yr.textContent = new Date().getFullYear(); })();

})();
