document.addEventListener("DOMContentLoaded", function() {
  // Initialize AOS for scroll-triggered animations
  AOS.init({
    duration: 800,
    once: true
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    });
  }

  // GSAP Sticky Navigation Condense
  if (typeof gsap !== "undefined" && document.getElementById('navbar')) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#navbar", {
      scrollTrigger: {
        trigger: "#navbar",
        start: "top top",
        end: "+=100",
        scrub: true
      },
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      ease: "none"
    });
  }

  // GSAP Input Focus Animation for Contact Form
  const inputs = document.querySelectorAll('.form-input, .form-textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      gsap.to(input, { borderColor: "#008080", duration: 0.3 });
    });
    input.addEventListener('blur', () => {
      gsap.to(input, { borderColor: "#ccc", duration: 0.3 });
    });
  });
});
