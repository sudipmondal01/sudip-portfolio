/* ═══════════════════════════════════════════════════════
   EVIDENCE ROOM — evidence.js
   Single JS file. No external dependencies.
═══════════════════════════════════════════════════════ */

'use strict';

/* ── EXHIBIT DATA ──────────────────────────────────────
   Each exhibit maps to real photography assets.
   plates: array of { type:'full'|'pair', src, caption }
   or for pair: { type:'pair', images:[{src,caption}] }
──────────────────────────────────────────────────────── */
const EXHIBITS = {
  'sm-2024-089': {
    num:        'SM-2024-089',
    subject:    'Portrait Series — Kolkata',
    date:       '2024',
    location:   'Kolkata, West Bengal',
    conditions: 'Studio · Natural light · 4 hours',
    status:     'ARCHIVED',
    thumb:      'https://i.ibb.co/ZRmxGRMQ/5-O7-A2320-Original.webp',
    plates: [
      {
        type:    'full',
        src:     'https://i.ibb.co/ZRmxGRMQ/5-O7-A2320-Original.webp',
        caption: '14:22 — Subject documented in natural light. <em>Condition: present.</em>'
      },
      {
        type: 'pair',
        images: [
          {
            src:     'https://i.ibb.co/mrV73Jsd/594311221-1449739290495420-6613825379268310414-n.webp',
            caption: '14:45 — Second documentation plate.'
          },
          {
            src:     'https://i.ibb.co/tyZXVfP/Portfolio-Photo-1.webp',
            caption: '15:03 — Series complete. <em>Condition: archived.</em>'
          }
        ]
      }
    ]
  },

  'sm-2024-112': {
    num:        'SM-2024-112',
    subject:    'Wedding Documentary — Kolkata',
    date:       '14.02.2024',
    location:   'Ballygunge, Kolkata',
    conditions: 'Post-rain · Overcast → golden hour · 11 hours',
    status:     'ARCHIVED',
    thumb:      'https://i.ibb.co/MDFzyJcW/5O7A6852.webp',
    plates: [
      {
        type:    'full',
        src:     'https://i.ibb.co/MDFzyJcW/5O7A6852.webp',
        caption: '11:40 — Ceremony preparation documented. Location: Ballygunge.'
      },
      {
        type: 'pair',
        images: [
          {
            src:     'https://i.ibb.co/S7VTYdwZ/IMG-5193.webp',
            caption: '14:17 — Exchange of documentation between subjects. Duration: 4 minutes.'
          },
          {
            src:     'https://i.ibb.co/ks0jkrZY/IMG-5198.webp',
            caption: '14:23 — Witness presence: 200+.'
          }
        ]
      },
      {
        type:    'full',
        src:     'https://i.ibb.co/mrC3sfM5/IMG-5199.webp',
        caption: '19:08 — Last light of ceremony. <em>Condition: irretrievable.</em>'
      }
    ]
  },

  'sm-2025-003': {
    num:        'SM-2025-003',
    subject:    'Editorial Record — Kolkata',
    date:       '2025',
    location:   'Kolkata, West Bengal',
    conditions: 'Outdoor · Overcast · 6 hours',
    status:     'ARCHIVED',
    thumb:      'https://i.ibb.co/20C7kbzv/fejk0givhrojzppzdxra.webp',
    plates: [
      {
        type:    'full',
        src:     'https://i.ibb.co/20C7kbzv/fejk0givhrojzppzdxra.webp',
        caption: '10:15 — Subject documented for editorial record. 2025.'
      },
      {
        type: 'pair',
        images: [
          {
            src:     'https://i.ibb.co/KjRzn31K/kme5yf0r7jqrto5jg79w.webp',
            caption: '11:02 — Series continuation.'
          },
          {
            src:     'https://i.ibb.co/Z6zYkvmW/qttlhjnrplfvoqpxao5h.webp',
            caption: '11:45 — Final plate. <em>Condition: archived.</em>'
          }
        ]
      }
    ]
  },

  'sm-2024-156': {
    num:        'SM-2024-156',
    subject:    'Hospitality & Events — Kolkata',
    date:       '2024',
    location:   'Kolkata, West Bengal',
    conditions: 'Indoor/outdoor · Mixed light · 8 hours',
    status:     'ARCHIVED',
    thumb:      'https://i.ibb.co/1fCSQML0/osamainthemountains-1778341960-3893332748001781918-48508808717.webp',
    plates: [
      {
        type:    'full',
        src:     'https://i.ibb.co/1fCSQML0/osamainthemountains-1778341960-3893332748001781918-48508808717.webp',
        caption: '18:00 — Event documentation commenced.'
      },
      {
        type: 'pair',
        images: [
          {
            src:     'https://i.ibb.co/4npcH7CF/osamainthemountains-1778341960-3893332846442115097-48508808717.webp',
            caption: '19:15 — Subject interaction documented.'
          },
          {
            src:     'https://i.ibb.co/VYBYmGCy/osamainthemountains-1778341960-3893332883175819611-48508808717.webp',
            caption: '20:30 — Final documentation. <em>Condition: archived.</em>'
          }
        ]
      }
    ]
  }
};

/* ── BUILD PLATES HTML ─────────────────────────────────── */
function buildPlates(plates) {
  return plates.map(plate => {
    if (plate.type === 'full') {
      return `<figure class="ev-plate-full">
        <img src="${plate.src}" alt="${plate.caption.replace(/<[^>]+>/g, '')}" loading="lazy" decoding="async">
        <figcaption class="ev-plate-caption">${plate.caption}</figcaption>
      </figure>`;
    }

    if (plate.type === 'pair') {
      const imgs = plate.images.map(img =>
        `<figure>
          <img src="${img.src}" alt="${img.caption.replace(/<[^>]+>/g, '')}" loading="lazy" decoding="async">
          <figcaption class="ev-plate-caption">${img.caption}</figcaption>
        </figure>`
      ).join('');
      return `<div class="ev-plate-pair">${imgs}</div>`;
    }

    return '';
  }).join('');
}

/* ── LOAD EXHIBIT ──────────────────────────────────────── */
function loadExhibit(id, scrollTo) {
  const data = EXHIBITS[id];
  if (!data) return;

  const platesEl = document.getElementById('ev-plates');
  const section  = document.getElementById('exhibit');

  if (!platesEl || !section) return;

  /* Fade out */
  platesEl.classList.add('is-swapping');

  setTimeout(() => {
    /* Update metadata */
    setText('ex-num',        data.num);
    setText('ex-subject',    data.subject);
    setText('ex-date',       data.date);
    setText('ex-location',   data.location);
    setText('ex-conditions', data.conditions);
    setText('ex-status',     data.status);

    /* Rebuild plates */
    platesEl.innerHTML = buildPlates(data.plates);
    platesEl.classList.remove('is-swapping');

    if (scrollTo) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 200);
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/* ── EXHIBIT INDEX ─────────────────────────────────────── */
function initExhibitIndex() {
  const rows      = document.querySelectorAll('.ev-table__row[data-exhibit]');
  const thumb     = document.getElementById('ev-thumb');
  const thumbImg  = document.getElementById('ev-thumb-img');
  const toggleBtn = document.getElementById('ev-archive-btn');

  if (!rows.length) return;

  /* Thumbnail follow */
  document.addEventListener('mousemove', e => {
    if (!thumb) return;
    thumb.style.left = e.clientX + 'px';
    thumb.style.top  = e.clientY + 'px';
  }, { passive: true });

  rows.forEach(row => {
    const exhibitId = row.dataset.exhibit;
    const exhibit   = EXHIBITS[exhibitId];

    /* Hover — show thumbnail */
    row.addEventListener('mouseenter', () => {
      if (!exhibit || !thumb || !thumbImg) return;
      thumbImg.src = exhibit.thumb;
      thumb.classList.add('is-visible');
    });

    row.addEventListener('mouseleave', () => {
      if (!thumb) return;
      thumb.classList.remove('is-visible');
    });

    /* Click / Enter — load exhibit */
    row.addEventListener('click', () => loadExhibit(exhibitId, true));

    row.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        loadExhibit(exhibitId, true);
      }
    });
  });

  /* Archive expand toggle */
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const hidden     = document.querySelectorAll('.ev-table__row--hidden');
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';

      hidden.forEach(r => r.classList.toggle('is-shown', !isExpanded));
      toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
      toggleBtn.textContent = isExpanded
        ? '[ SHOW FULL ARCHIVE ]'
        : '[ COLLAPSE ARCHIVE ]';
    });
  }
}

/* ── NAV SCROLL STRIP ──────────────────────────────────── */
function initNavStrip() {
  const strip = document.getElementById('ev-strip');
  if (!strip) return;

  let visible = false;

  window.addEventListener('scroll', () => {
    const should = window.scrollY > 200;
    if (should !== visible) {
      visible = should;
      strip.classList.toggle('is-visible', should);
    }
  }, { passive: true });
}

/* ── MOBILE OVERLAY ────────────────────────────────────── */
function initMobileNav() {
  const burger  = document.getElementById('ev-burger');
  const overlay = document.getElementById('ev-overlay');
  const closeBtn = document.getElementById('ev-overlay-close');
  const links   = overlay ? overlay.querySelectorAll('.ev-overlay__link') : [];

  if (!burger || !overlay) return;

  function openMenu() {
    overlay.classList.add('is-open');
    requestAnimationFrame(() => overlay.classList.add('is-visible'));
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    overlay.classList.remove('is-visible');
    setTimeout(() => overlay.classList.remove('is-open'), 200);
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeMenu();
  });
}

/* ── FORM ──────────────────────────────────────────────── */
function generateRef() {
  const d    = new Date();
  const mo   = String(d.getMonth() + 1).padStart(2, '0');
  const dy   = String(d.getDate()).padStart(2, '0');
  const rand = String(Math.floor(Math.random() * 9000) + 1000);
  return `SM-${d.getFullYear()}-${mo}${dy}-${rand}`;
}

function typeRef(el, text) {
  el.textContent = '';
  [...text].forEach((char, i) => {
    setTimeout(() => { el.textContent += char; }, i * 38);
  });
}

function validateForm(form) {
  let valid = true;

  form.querySelectorAll('[required]').forEach(field => {
    const group = field.closest('.ev-form__group');
    const err   = group ? group.querySelector('.ev-form__error') : null;
    const empty = !field.value.trim();

    field.classList.toggle('is-invalid', empty);
    if (err) err.textContent = empty ? 'REQUIRED' : '';
    if (empty) valid = false;
  });

  return valid;
}

function initForm() {
  const form    = document.getElementById('ev-form');
  const confirm = document.getElementById('ev-confirm');
  const refEl   = document.getElementById('ev-ref-num');
  const submit  = document.getElementById('ev-submit');

  if (!form) return;

  /* Clear errors on input */
  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('input', () => {
      const group = field.closest('.ev-form__group');
      const err   = group ? group.querySelector('.ev-form__error') : null;
      if (field.value.trim()) {
        field.classList.remove('is-invalid');
        if (err) err.textContent = '';
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateForm(form)) return;

    if (submit) {
      submit.disabled = true;
      submit.textContent = '[ FILING... ]';
    }

    /*
     * TODO: Replace with your form endpoint.
     * Example: fetch('/api/contact', { method:'POST', body: new FormData(form) })
     *   .then(() => showConfirm())
     *   .catch(() => { submit.disabled = false; submit.textContent = '[ FILE REQUEST ]'; });
     *
     * For now: show confirmation immediately (client-side only).
     */
    setTimeout(showConfirm, 400);
  });

  function showConfirm() {
    form.style.transition = 'opacity 150ms ease';
    form.style.opacity    = '0';

    setTimeout(() => {
      form.hidden         = true;
      form.style.opacity  = '';
      form.style.transition = '';

      if (confirm) {
        confirm.hidden          = false;
        confirm.style.opacity   = '0';
        confirm.style.transition = 'opacity 300ms ease';

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            confirm.style.opacity = '1';
            if (refEl) typeRef(refEl, generateRef());
          });
        });
      }
    }, 150);
  }
}

/* ── INIT ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavStrip();
  initExhibitIndex();
  initMobileNav();
  initForm();

  /* Pre-load the wedding exhibit as the default */
  loadExhibit('sm-2024-112', false);
});
