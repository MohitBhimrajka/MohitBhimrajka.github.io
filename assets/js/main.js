// assets/js/main.js

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Animate Numbers
const animateValue = (element, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

// Stats Animation
const animateStats = () => {
  document.querySelectorAll('[data-count]').forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count'));
    animateValue(stat, 0, target, 2000);
  });
};

// Skills Progress Animation
const animateSkills = () => {
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const target = parseInt(bar.getAttribute('data-progress'));
    bar.style.width = target + '%';
  });
};

// Intersection Observer for Animations
const createObserver = (elements, callback) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach(element => observer.observe(element));
};

// Initialize Observers
document.addEventListener('DOMContentLoaded', () => {
  // Stats Observer
  const statsElements = document.querySelectorAll('.stats-section');
  if (statsElements.length) {
    createObserver(statsElements, () => animateStats());
  }

  // Skills Observer
  const skillsElements = document.querySelectorAll('.skills-section');
  if (skillsElements.length) {
    createObserver(skillsElements, () => animateSkills());
  }

  // Project Filter (if on projects page)
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (filterButtons.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        filterProjects(filter);
      });
    });
  }
});

// Project Filtering Function
const filterProjects = (filter) => {
  const projects = document.querySelectorAll('[data-category]');
  projects.forEach(project => {
    const category = project.getAttribute('data-category');
    if (filter === 'all' || category === filter) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
};

// Form Validation (if needed)
const validateForm = (form) => {
  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    if (input.hasAttribute('required') && !input.value.trim()) {
      isValid = false;
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
    }
  });
  
  return isValid;
};

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
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