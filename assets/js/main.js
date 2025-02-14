// main.js
document.addEventListener("DOMContentLoaded", function() {
  // AOS initialization
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true
    });
  }

  // Sticky Nav with GSAP (if gsap is available)
  if (typeof gsap !== "undefined" && document.getElementById('navbar')) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#navbar', {
      scrollTrigger: {
        trigger: '#navbar',
        start: 'top top',
        end: '+=100',
        scrub: true
      },
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      ease: 'none'
    });
  }

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !expanded);
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Basic Contact Form Validation (if used on contact.html)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      let valid = true;

      // Validate Name
      const nameInput = document.getElementById('name');
      const nameError = document.getElementById('name-error');
      if (nameInput && nameError && !nameInput.value.trim()) {
        nameError.classList.remove('hidden');
        valid = false;
      } else if (nameError) {
        nameError.classList.add('hidden');
      }

      // Validate Email
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('email-error');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput && emailError && !emailRegex.test(emailInput.value.trim())) {
        emailError.classList.remove('hidden');
        valid = false;
      } else if (emailError) {
        emailError.classList.add('hidden');
      }

      // Validate Message
      const messageInput = document.getElementById('message');
      const messageError = document.getElementById('message-error');
      if (messageInput && messageError && !messageInput.value.trim()) {
        messageError.classList.remove('hidden');
        valid = false;
      } else if (messageError) {
        messageError.classList.add('hidden');
      }

      if (!valid) {
        e.preventDefault();
      }
    });
  }
});
