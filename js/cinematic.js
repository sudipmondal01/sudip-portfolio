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
    const status = $('#ld-status');
    const words = ['FOCUSING…', 'METERING…', 'ROLLING…'];
    let i = 0;
    const timer = setInterval(() => {
      i = (i + 1) % words.length;
      if (status) status.textContent = words[i];
    }, 350);
    window.addEventListener('load', () => {
      setTimeout(() => { clearInterval(timer); finish(); }, 1500);
    });
    // safety net if 'load' is slow
    setTimeout(() => { clearInterval(timer); finish(); }, 4000);
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

  /* ---------- 10. LIGHTBOX ---------- */
  (() => {
    const lb = $('#lightbox');
    const stage = $('#lightboxStage');
    if (!lb || !stage) return;
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
    };
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-lightbox]');
      if (trigger) {
        const src = trigger.getAttribute('data-lightbox');
        if (src) { e.preventDefault(); open(`<img src="${src}" alt="Selected work — Sudip Mondal">`); }
      }
    });
    // Featured reel → YouTube
    const reel = $('.fm-reel');
    if (reel) reel.addEventListener('click', () => {
      const id = reel.getAttribute('data-yt');
      if (id && id !== 'REPLACE_WITH_SHOWREEL_ID') {
        open(`<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" title="Showreel" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`);
      }
    });
    lb.addEventListener('click', (e) => { if (e.target === lb || e.target.closest('.lightbox-close')) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lb.classList.contains('open')) close(); });
  })();

  /* ---------- 11. CAROUSELS ---------- */
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
  })();

  /* ---------- 13. FORM VALIDATION ---------- */
  (() => {
    const form = $('#bookingForm');
    const success = $('#formSuccess');
    if (!form) return;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fieldOf = (input) => input.closest('.fg');
    const fail = (input, msg) => {
      const fg = fieldOf(input); if (!fg) return;
      fg.classList.add('error');
      const m = $('.msg', fg); if (m) m.textContent = msg;
    };
    const clearErr = (input) => {
      const fg = fieldOf(input); if (!fg) return;
      fg.classList.remove('error');
      const m = $('.msg', fg); if (m) m.textContent = '';
    };
    $$('input, select, textarea', form).forEach(el => {
      el.addEventListener('input', () => clearErr(el));
      el.addEventListener('change', () => clearErr(el));
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const type = form.querySelector('[name="type"]');
      const message = form.querySelector('[name="message"]');
      if (name && !name.value.trim()) { fail(name, 'Please enter your name'); ok = false; }
      if (email && !emailRe.test(email.value.trim())) { fail(email, 'Enter a valid email'); ok = false; }
      if (type && !type.value) { fail(type, 'Please choose a project type'); ok = false; }
      if (message && message.value.trim().length < 10) { fail(message, 'Tell me a little more (10+ characters)'); ok = false; }
      if (!ok) return;
      form.classList.add('gone');
      if (success) success.classList.add('show');
    });
  })();

  /* ---------- 14. FOOTER YEAR ---------- */
  (() => { const yr = $('#yr'); if (yr) yr.textContent = new Date().getFullYear(); })();

})();
