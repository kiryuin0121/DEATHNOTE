//文章のblurを画面に入ったタイミングで解除
const fadeEls = document.querySelectorAll<HTMLElement>(".animate-fade p");
const fadeObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting
        ? entry.target.classList.add("active")
        : entry.target.classList.remove("active");
    });
  },
  { threshold: 0.1 }
);
fadeEls.forEach((el) => fadeObs.observe(el));

// footerのinvertを画面に入ったタイミングで解除する。
const footerEl = document.querySelector<HTMLElement>("footer");
const footerObs = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.filter = "none";
        footerEl && footerObs.unobserve(footerEl);
      } else {
        (entry.target as HTMLElement).style.filter = "invert(96%)";
      }
    });
  },
  { threshold: 0.7 }
);
if (footerEl) footerObs.observe(footerEl);
