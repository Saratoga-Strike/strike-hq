document.documentElement.classList.add("js");

const items = document.querySelectorAll(
  ".portal-card, .wide-action, .small-action, .why-panel"
);

if ("IntersectionObserver" in window) {
  items.forEach((item) => item.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("reveal--visible");
        instance.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}
