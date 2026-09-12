// Small reveal animation for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section").forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(18px)";
  section.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(section);
});
