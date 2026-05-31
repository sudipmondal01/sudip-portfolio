(function() {
    'use strict';

    // Mobile Navigation
    const mobileToggle = document.querySelector('#mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const spans = mobileToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                mobileToggle.click();
            }
        });
    });

    // Consolidated scroll handler (navbar + active links + wow parallax + progress bar)
    const navbar = document.querySelector('.cinematic-header');
    let lastScrollY = window.scrollY;
    const sections = document.querySelectorAll('section[id]');
    const wowSection = document.querySelector('.wow-section');
    const wowImage   = document.querySelector('.wow-image');

    const progressBar = document.createElement('div');
    progressBar.style.cssText = 'position:fixed;top:0;left:0;height:4px;background:var(--yellow);width:0%;z-index:9999;transition:width 0.1s ease;box-shadow:0 0 10px rgba(245,171,0,0.5);';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Navbar: glassmorphism + hide/show
        if (navbar) {
            navbar.classList.toggle('scrolled', scrollY > 50);
            if (scrollY > lastScrollY && scrollY > 200) {
                navbar.classList.add('hide-nav');
            } else {
                navbar.classList.remove('hide-nav');
            }
            lastScrollY = scrollY;
        }

        // Active nav link
        sections.forEach(current => {
            const sectionTop = current.offsetTop - 100;
            const navLink = document.querySelector(`.nav-link[href*="#${current.getAttribute('id')}"]`);
            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + current.offsetHeight) {
                document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
                navLink.classList.add('active');
            }
        });

        // WOW section parallax
        if (wowSection && wowImage) {
            const rect = wowSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                wowImage.style.transform = `scale(1.1) translateY(${(progress - 0.5) * 50}px)`;
            }
        }

        // Scroll progress bar
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        progressBar.style.width = (scrollY / scrollHeight * 100) + '%';
    });

    // Parallax effect on scroll
    const hero = document.querySelector('.hero');
    const portrait = document.querySelector('.hero__portrait');
    const circle = document.querySelector('.hero__circle');
    const yellowShape = document.querySelector('.hero__yellow-shape');
    const title = document.querySelector('.hero__title');

    let ticking = false;

    function updateParallax() {
        const scrollY = window.scrollY;
        
        if (hero && scrollY < hero.offsetHeight) {
            const progress = scrollY / hero.offsetHeight;
            
            if (portrait) portrait.style.transform = `translateY(${scrollY * 0.15}px)`;
            if (circle) circle.style.transform = `translateY(${scrollY * 0.08}px) scale(${1 - progress * 0.1})`;
            if (yellowShape) yellowShape.style.transform = `translateY(${scrollY * 0.25}px)`;
            if (title) {
                title.style.opacity = 1 - progress * 1.5;
                title.style.transform = `translateY(${scrollY * 0.1}px)`;
            }
        }
        
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Hero icon/dot mouse parallax is handled by mouse-parallax.js (smooth rAF version)

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.text-reveal, .gallery-item').forEach(el => {
        observer.observe(el);
    });

    // Active link + all other scroll work is handled by the consolidated listener above

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Reveal animation on load
    const revealElements = document.querySelectorAll('.hero__label, .hero__name-text, .hero__portrait, .hero__circle, .hero__yellow-shape');
    revealElements.forEach(function(el, index) {
        el.style.animationDelay = (0.3 + index * 0.15) + 's';
    });

})();

    // NEW: Advanced Intersection Observer for Scroll Reveals
    const advancedObserverOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.05
    };

    const advancedObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, advancedObserverOptions);

    document.querySelectorAll('.reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-fade').forEach(el => {
        advancedObserver.observe(el);
    });

    // Magnetic Hover Effect for Buttons/Images
    const magneticElements = document.querySelectorAll('.magnetic-hover, .footer-btn, .submit-btn');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const position = el.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;
            
            el.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`;
        });

        el.addEventListener('mouseout', function() {
            el.style.transform = 'translate(0px, 0px)';
        });
    });

    // WOW section parallax is handled by the consolidated scroll listener

    // ── Premium cursor: snapping dot + lagging ring ─────────────────────────
    const dot  = document.createElement('div');
    const ring = document.createElement('div');
    dot.id  = 'cursor-dot';
    ring.id = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let curMouseX = 0, curMouseY = 0;
    let ringX = 0,     ringY = 0;
    let ringRafId  = null;
    let cursorReady = false;

    document.addEventListener('mousemove', function(e) {
        curMouseX = e.clientX;
        curMouseY = e.clientY;

        if (!cursorReady) {
            // First move: teleport ring so it doesn't sweep in from (0,0)
            cursorReady = true;
            ringX = curMouseX;
            ringY = curMouseY;
            dot.classList.add('is-ready');
            ring.classList.add('is-ready');
        }

        // Dot: half of 8px size = 4px centre-offset
        dot.style.transform = 'translate(' + (curMouseX - 4) + 'px,' + (curMouseY - 4) + 'px)';

        if (!ringRafId) ringRafId = requestAnimationFrame(animateRing);
    }, { passive: true });

    function animateRing() {
        var ease = 0.13;
        ringX += (curMouseX - ringX) * ease;
        ringY += (curMouseY - ringY) * ease;
        // Half of 36px base ring size = 18px centre-offset
        ring.style.transform = 'translate(' + (ringX - 18) + 'px,' + (ringY - 18) + 'px)';

        if (Math.abs(curMouseX - ringX) > 0.2 || Math.abs(curMouseY - ringY) > 0.2) {
            ringRafId = requestAnimationFrame(animateRing);
        } else {
            ringRafId = null;
        }
    }

    // Hover state on interactive elements
    const hoverables = document.querySelectorAll('a, button, .magnetic-hover, input, textarea, select');
    hoverables.forEach(function(el) {
        el.addEventListener('mouseenter', function() {
            dot.classList.add('is-hovering');
            ring.classList.add('is-hovering');
        });
        el.addEventListener('mouseleave', function() {
            dot.classList.remove('is-hovering');
            ring.classList.remove('is-hovering');
        });
    });

    // Click: ring squeezes on press, springs back on release
    document.addEventListener('mousedown', function() {
        dot.classList.add('is-clicking');
        ring.classList.add('is-clicking');
    });
    document.addEventListener('mouseup', function() {
        dot.classList.remove('is-clicking');
        ring.classList.remove('is-clicking');
    });

    // Fade ring when pointer leaves the viewport
    document.addEventListener('mouseleave', function() { ring.classList.add('is-hidden'); });
    document.addEventListener('mouseenter', function() { ring.classList.remove('is-hidden'); });

    // Contact form — validation + success message
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        // Inject error and success message containers once
        const msgEl = document.createElement('div');
        msgEl.style.cssText = 'margin-top:12px;padding:12px 16px;border-radius:8px;font-size:14px;font-weight:600;display:none;';
        contactForm.appendChild(msgEl);

        function showMsg(text, isError) {
            msgEl.textContent = text;
            msgEl.style.display = 'block';
            msgEl.style.background = isError ? '#ffe0e0' : '#e6f9f0';
            msgEl.style.color      = isError ? '#c0392b' : '#1a7a4a';
        }

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            msgEl.style.display = 'none';

            const nameField    = contactForm.querySelector('input[type="text"]');
            const emailField   = contactForm.querySelector('input[type="email"]');
            const messageField = contactForm.querySelector('textarea');
            const name         = nameField.value.trim();
            const email        = emailField.value.trim();
            const project      = contactForm.querySelector('select').value;
            const message      = messageField.value.trim();

            // Validation
            if (!name) { showMsg('Please enter your name.', true); nameField.focus(); return; }
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showMsg('Please enter a valid email address.', true); emailField.focus(); return;
            }
            if (!message) { showMsg('Please tell me about your project.', true); messageField.focus(); return; }

            // Open mailto
            const subject = encodeURIComponent('Project Inquiry: ' + (project || 'General') + ' — ' + name);
            const body    = encodeURIComponent(
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n' +
                'Project: ' + (project || 'Not specified') + '\n\n' +
                message
            );
            window.location.href = 'mailto:sudipxv@gmail.com?subject=' + subject + '&body=' + body;

            // Success state
            showMsg("Thanks! I'll get back to you soon.", false);
            const btn = contactForm.querySelector('.submit-btn');
            btn.textContent = 'Message Sent ✓';
            btn.disabled = true;
            setTimeout(function() {
                contactForm.reset();
                btn.textContent = 'Send Message';
                btn.disabled = false;
                msgEl.style.display = 'none';
            }, 4000);
        });
    }

    // Progress bar is created and updated inside the consolidated scroll listener

    // Dynamic Cinematic Dividers
    const sectionsToDivide = document.querySelectorAll('section:not(.wow-section):not(.hero)');
    sectionsToDivide.forEach(section => {
        const divider = document.createElement('div');
        divider.className = 'cinematic-divider';
        divider.innerHTML = '<div class="divider-line"></div><div class="divider-blur"></div>';
        section.parentNode.insertBefore(divider, section);
    });

// ── QR Code Lightbox ─────────────────────────────────────────────────────────

(function () {
    const modal   = document.getElementById('qr-modal');
    const trigger = document.getElementById('qr-trigger');
    const close   = modal && modal.querySelector('.qr-modal__close');
    const backdrop = modal && modal.querySelector('.qr-modal__backdrop');

    if (!modal || !trigger) return;

    // Focus trap: collect focusable children inside the modal box
    function getFocusable() {
        return Array.from(modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ));
    }

    function openModal() {
        modal.removeAttribute('hidden');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        // Double rAF ensures the transition fires after display kicks in
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                modal.classList.add('is-open');
                // Focus the close button for keyboard users
                if (close) close.focus();
            });
        });
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        // Re-hide after CSS transition completes (opacity: 0 → visibility: hidden)
        setTimeout(function () {
            if (!modal.classList.contains('is-open')) {
                modal.setAttribute('hidden', '');
            }
        }, 320);
        // Return focus to the trigger that opened it
        trigger.focus();
    }

    // Open on click + Enter/Space for keyboard users
    trigger.addEventListener('click', openModal);
    trigger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal();
        }
    });

    // Close via close button
    close.addEventListener('click', closeModal);

    // Close when clicking anywhere outside the card (backdrop or modal flex area)
    modal.addEventListener('click', function (e) {
        if (!e.target.closest('.qr-modal__inner')) {
            closeModal();
        }
    });

    // Close via ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });

    // Trap focus inside the modal while open
    modal.addEventListener('keydown', function (e) {
        if (e.key !== 'Tab' || !modal.classList.contains('is-open')) return;
        const focusable = getFocusable();
        if (!focusable.length) return;
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });
}());

// ── Portrait Showcase Selector ────────────────────────────────────────────────
(function () {
    var showcase = document.getElementById('portrait-showcase');
    var thumbs   = document.querySelectorAll('.portrait-thumb');

    if (!showcase || !thumbs.length) return;

    // Mark the first thumb active by default
    thumbs[0].classList.add('is-active');

    function selectThumb(thumb) {
        var newSrc = thumb.dataset.src;
        var newAlt = thumb.dataset.alt || showcase.alt;

        if (showcase.src.includes(encodeURIComponent(newSrc)) ||
            showcase.src === newSrc) return; // already showing this one

        // Cross-fade: fade out → swap src → fade back in
        showcase.classList.add('is-fading');

        setTimeout(function () {
            showcase.src = newSrc;
            showcase.alt = newAlt;

            showcase.onload = function () {
                showcase.classList.remove('is-fading');
                showcase.onload = null;
            };
            // Fallback in case onload doesn't fire (cached image)
            setTimeout(function () {
                showcase.classList.remove('is-fading');
            }, 400);
        }, 300);

        // Update active state on thumbnails
        thumbs.forEach(function (t) { t.classList.remove('is-active'); });
        thumb.classList.add('is-active');
    }

    thumbs.forEach(function (thumb) {
        // Click
        thumb.addEventListener('click', function () { selectThumb(thumb); });
        // Keyboard: Enter or Space
        thumb.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectThumb(thumb);
            }
        });
    });
}());


