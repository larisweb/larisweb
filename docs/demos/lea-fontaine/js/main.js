/* Léa Fontaine — interactions minimales
   -------------------------------------
   1. Menu mobile (hamburger + overlay plein écran)
   2. Header : classe .scrolled après 40px de scroll
   3. Fade-in à l'intersection (opacité pure)
*/

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Menu mobile ---------- */

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav-menu');
  const navLinks = nav ? nav.querySelectorAll('a') : [];

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
    document.body.style.overflow = '';
  }

  function openNav() {
    if (!nav || !toggle) return;
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fermer le menu');
    document.body.style.overflow = 'hidden';
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeNav() : openNav();
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeNav();
        toggle.focus();
      }
    });
  }

  /* ---------- 2. Header scroll state ---------- */

  const header = document.getElementById('site-header');
  let scrollTicking = false;

  function updateHeader() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    scrollTicking = false;
  }

  window.addEventListener('scroll', function () {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateHeader);
      scrollTicking = true;
    }
  }, { passive: true });

  updateHeader();

  /* ---------- 3. Fade-in au scroll (opacité pure) ---------- */

  const fadeEls = document.querySelectorAll('.fade');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    fadeEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    });

    fadeEls.forEach(function (el) { observer.observe(el); });
  }
})();
