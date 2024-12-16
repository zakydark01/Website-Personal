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
