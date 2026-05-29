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

    // Navbar scroll effect
    const navbar = document.querySelector('.cinematic-header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        
        // Add scrolled class for glassmorphism
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/Show on scroll direction
        if (window.scrollY > lastScrollY && window.scrollY > 200) {
            navbar.classList.add('hide-nav');
        } else {
            navbar.classList.remove('hide-nav');
        }
        lastScrollY = window.scrollY;
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

    // Mouse move parallax for floating effect
    const icons = document.querySelectorAll('.hero__icon');
    const dots = document.querySelectorAll('.hero__dot');

    document.addEventListener('mousemove', function(e) {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

        icons.forEach(function(icon, index) {
            const factor = (index + 1) * 3;
            icon.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`;
        });

        dots.forEach(function(dot, index) {
            const factor = (index + 1) * 2;
            dot.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`;
        });
    });

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

    // Active link update on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href*="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    });

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
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
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

    // Fix Wow Section Parallax
    const wowSection = document.querySelector('.wow-section');
    const wowImage = document.querySelector('.wow-image');
    
    window.addEventListener('scroll', () => {
        if (wowSection && wowImage) {
            const rect = wowSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                wowImage.style.transform = `scale(1.1) translateY(${(scrollProgress - 0.5) * 50}px)`;
            }
        }
    });

    // Cinematic Cursor
    const cursor = document.createElement('div');
    cursor.classList.add('cinematic-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', e => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    const hoverables = document.querySelectorAll('a, button, .magnetic-hover, input, textarea, select');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Cinematic Cursor Trail
    const cursorTrail = document.createElement('div');
    cursorTrail.classList.add('cinematic-cursor-trail');
    document.body.appendChild(cursorTrail);

    let trailX = 0, trailY = 0;
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateTrail() {
        // Easing factor for the trail
        const ease = 0.15;
        trailX += (mouseX - trailX) * ease;
        trailY += (mouseY - trailY) * ease;
        
        cursorTrail.style.transform = `translate(${trailX}px, ${trailY}px)`;
        requestAnimationFrame(animateTrail);
    }
    animateTrail();

    // Add trail hover effect to existing hoverables
    if (typeof hoverables !== 'undefined') {
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => cursorTrail.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorTrail.classList.remove('hover'));
        });
    }

    // Contact form — mailto handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name    = contactForm.querySelector('input[type="text"]').value.trim();
            const email   = contactForm.querySelector('input[type="email"]').value.trim();
            const project = contactForm.querySelector('select').value;
            const message = contactForm.querySelector('textarea').value.trim();

            const subject = encodeURIComponent('Project Inquiry: ' + project + ' — ' + name);
            const body    = encodeURIComponent(
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n' +
                'Project: ' + project + '\n\n' +
                message
            );

            window.location.href = 'mailto:sudipxv@gmail.com?subject=' + subject + '&body=' + body;

            const btn = contactForm.querySelector('.submit-btn');
            const original = btn.textContent;
            btn.textContent = 'Opening email client…';
            btn.disabled = true;
            setTimeout(function() {
                btn.textContent = original;
                btn.disabled = false;
            }, 3000);
        });
    }

    // Smooth scroll progress bar at top
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '4px';
    progressBar.style.backgroundColor = 'var(--yellow)';
    progressBar.style.width = '0%';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.1s ease';
    progressBar.style.boxShadow = '0 0 10px rgba(245, 171, 0, 0.5)';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + '%';
    });

    // Dynamic Cinematic Dividers
    const sectionsToDivide = document.querySelectorAll('section:not(.wow-section):not(.hero)');
    sectionsToDivide.forEach(section => {
        const divider = document.createElement('div');
        divider.className = 'cinematic-divider';
        divider.innerHTML = '<div class="divider-line"></div><div class="divider-blur"></div>';
        section.parentNode.insertBefore(divider, section);
    });


