(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  if (hasGsap) {
    gsap.registerPlugin(ScrollTrigger);
  }

  const prominentSentence = document.querySelector('.sentence-reveal');
  if (prominentSentence && hasGsap && !reduceMotion) {
    const words = prominentSentence.textContent.trim().split(/\s+/);
    prominentSentence.innerHTML = words.map((word) => `<span class="reveal-word">${word}</span>`).join(' ');
    gsap.fromTo(prominentSentence.querySelectorAll('.reveal-word'),
      { autoAlpha: 0, y: '0.6em' },
      {
        autoAlpha: 1,
        y: 0,
        duration: .55,
        ease: 'power3.out',
        stagger: .035,
        scrollTrigger: { trigger: prominentSentence, start: 'top 78%', once: true }
      }
    );
  }

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.desktop-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('mobile-open', !open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('mobile-open');
    }));
  }

  const cursor = document.querySelector('.cursor');
  const cursorRing = document.querySelector('.cursor-ring');
  if (!coarse && !reduceMotion && cursor && cursorRing) {
    let x = innerWidth / 2;
    let y = innerHeight / 2;
    let ringX = x;
    let ringY = y;
    window.addEventListener('pointermove', (event) => { x = event.clientX; y = event.clientY; }, { passive: true });
    const drawCursor = () => {
      ringX += (x - ringX) * .2;
      ringY += (y - ringY) * .2;
      cursor.style.transform = `translate3d(${x}px,${y}px,0)`;
      cursorRing.style.transform = `translate3d(${ringX}px,${ringY}px,0)`;
      requestAnimationFrame(drawCursor);
    };
    drawCursor();
    document.querySelectorAll('a,button,[data-tilt]').forEach((element) => {
      element.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
      element.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if (hasGsap && !reduceMotion) {
    gsap.utils.toArray('.reveal').forEach((element, index) => {
      gsap.fromTo(element, { autoAlpha: 0, y: 30 }, {
        autoAlpha: 1,
        y: 0,
        duration: .9,
        delay: Math.min(index * .04, .3),
        ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 88%', once: true }
      });
    });
    gsap.utils.toArray('.project').forEach((project, index) => {
      gsap.fromTo(project, { scale: .94, opacity: .35 }, {
        scale: 1,
        opacity: 1,
        ease: 'none',
        scrollTrigger: { trigger: project, start: 'top 90%', end: 'top 45%', scrub: true }
      });
      project.style.zIndex = String(index + 1);
    });
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

  document.querySelectorAll('.project-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const project = button.closest('.project');
      const notes = project.querySelector('.project-notes');
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      button.firstChild.textContent = open ? 'Read project details ' : 'Hide project details ';
      button.querySelector('span').textContent = open ? '+' : '−';
      notes.hidden = open;
      if (hasGsap) ScrollTrigger.refresh();
    });
  });

  if (!coarse && !reduceMotion) {
    document.querySelectorAll('[data-tilt]').forEach((element) => {
      element.addEventListener('pointermove', (event) => {
        const box = element.getBoundingClientRect();
        const px = (event.clientX - box.left) / box.width - .5;
        const py = (event.clientY - box.top) / box.height - .5;
        element.style.transform = `rotateX(${py * -6}deg) rotateY(${px * 7}deg)`;
      });
      element.addEventListener('pointerleave', () => { element.style.transform = ''; });
    });
  }

  const canvas = document.getElementById('hero-canvas');
  if (canvas && !reduceMotion) {
    const context = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    const resize = () => {
      const ratio = Math.min(devicePixelRatio, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from({ length: Math.min(70, Math.floor(innerWidth / 18)) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - .5) * .2,
        vy: (Math.random() - .5) * .2
      }));
    };
    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        context.fillStyle = 'rgba(198,255,88,.7)';
        context.fillRect(particle.x, particle.y, 1, 1);
      });
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const distance = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (distance < 120) {
            context.strokeStyle = `rgba(198,255,88,${.13 * (1 - distance / 120)})`;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });
    draw();
  }
})();
