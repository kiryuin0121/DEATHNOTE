document.addEventListener("DOMContentLoaded", () => {
  // fadeup
  const fadeupEls = document.querySelectorAll<HTMLElement>(".animate-fadeup");
  const fadeupObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting
          ? entry.target.classList.add("active")
          : entry.target.classList.remove("active");
      });
    },
    {
      threshold: 0.1,
    }
  );

  fadeupEls.forEach((el) => fadeupObs.observe(el));
});
