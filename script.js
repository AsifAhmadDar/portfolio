(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;

  const cursor = document.querySelector('.cursor');
  const cursorRing = document.querySelector('.cursor-ring');
  if (!coarse && cursor && cursorRing) {
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
    window.addEventListener('pointermove', (event) => { x = event.clientX; y = event.clientY; }, { passive: true });
    const drawCursor = () => { rx += (x - rx) * .2; ry += (y - ry) * .2; cursor.style.transform = `translate3d(${x}px,${y}px,0)`; cursorRing.style.transform = `translate3d(${rx}px,${ry}px,0)`; requestAnimationFrame(drawCursor); };
    drawCursor();
    document.querySelectorAll('a,button,[data-tilt]').forEach((item) => {
      item.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
      item.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
    });
  }

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.desktop-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('mobile-open', !open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menuButton.setAttribute('aria-expanded', 'false'); nav.classList.remove('mobile-open'); }));
  }

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((element, index) => { if (!reduceMotion) element.style.transitionDelay = `${Math.min(index * 35, 280)}ms`; observer.observe(element); });

  document.querySelectorAll('.project-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const notes = button.closest('.project').querySelector('.project-notes');
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      button.querySelector('span').textContent = open ? '+' : '−';
      button.firstChild.textContent = open ? 'View system notes ' : 'Hide system notes ';
      notes.hidden = open;
    });
  });

  if (!coarse && !reduceMotion) {
    document.querySelectorAll('[data-tilt]').forEach((element) => {
      element.addEventListener('pointermove', (event) => { const box = element.getBoundingClientRect(); const px = (event.clientX - box.left) / box.width - .5; const py = (event.clientY - box.top) / box.height - .5; element.style.transform = `rotateX(${py * -6}deg) rotateY(${px * 7}deg)`; });
      element.addEventListener('pointerleave', () => { element.style.transform = ''; });
    });
  }

  const canvas = document.getElementById('hero-canvas');
  if (canvas && !reduceMotion) {
    const context = canvas.getContext('2d'); let width = 0, height = 0; let particles = [];
    const resize = () => { width = canvas.width = canvas.offsetWidth * devicePixelRatio; height = canvas.height = canvas.offsetHeight * devicePixelRatio; context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); width /= devicePixelRatio; height /= devicePixelRatio; particles = Array.from({ length: Math.min(70, Math.floor(innerWidth / 18)) }, () => ({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .2, vy: (Math.random() - .5) * .2 })); };
    resize(); window.addEventListener('resize', resize);
    const paint = () => { context.clearRect(0, 0, width, height); particles.forEach((p) => { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > width) p.vx *= -1; if (p.y < 0 || p.y > height) p.vy *= -1; context.fillStyle = 'rgba(184,255,90,.7)'; context.fillRect(p.x, p.y, 1, 1); }); for (let i = 0; i < particles.length; i += 1) for (let j = i + 1; j < particles.length; j += 1) { const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, distance = Math.hypot(dx, dy); if (distance < 120) { context.strokeStyle = `rgba(184,255,90,${.13 * (1 - distance / 120)})`; context.beginPath(); context.moveTo(particles[i].x, particles[i].y); context.lineTo(particles[j].x, particles[j].y); context.stroke(); } } requestAnimationFrame(paint); };
    paint();
  }
})();
