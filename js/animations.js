
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
