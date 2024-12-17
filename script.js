// Lazy-loading animation for each section
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.5, // Trigger when 50% of the section is visible
});

// Observe each section
sections.forEach((section) => observer.observe(section));
// Observer untuk setiap section di halaman
const section = document.querySelectorAll('.section');

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in'); // Menambahkan kelas fade-in
    }
  });
}, {
  threshold: 0.3, // Mulai animasi saat 30% section terlihat
});

// Observe setiap section
sections.forEach((section) => {
  fadeInObserver.observe(section);
});

const sections = document.querySelectorAll('.section');
const projectCards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('active');
    }
  });

  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.classList.add('show');
    }
  });
});
