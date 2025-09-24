//
const accentEls = document.querySelectorAll<HTMLElement>(".text-accent span");
const accentObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting
        ? entry.target.classList.add("active")
        : entry.target.classList.remove("active");
    });
  },
  { threshold: 1 }
);
accentEls.forEach((el) => accentObs.observe(el));
