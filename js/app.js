document.documentElement.classList.add("js");

/*
  GOHIGHLEVEL CONFIGURATION
  Paste each Media Storage URL between the quotes.
  Leave a value blank to keep the local fallback path from the HTML/CSS.
*/
const STRIKE_CONFIG = {
  assets: {
    background: "",
    heroLogo: "",
    strikeHqIcon: "",
    mobileSetterIcon: "",
    mobileCloserIcon: "",
    fiberSetterIcon: "",
    fiberCloserIcon: ""
  },

  links: {
    strikeHq:
      "https://virtual.fiberonyx.com/?url=%252Fv2%252Flocation%252F2y7t6RQ7whC5QFkjdzIq%252Fsettings%252Fstaff%252Fteam",
    mobileSetter: "/mobile-setter",
    mobileCloser: "/mobile-closer",
    fiberSetter: "/fiber-setter",
    fiberCloser: "/fiber-closer",
    joinTeam: "/join-the-team",
    saveMoney: "/save-money",
    about: "/about",
    contact: "/contact"
  }
};

function applyStrikeConfiguration() {
  const { assets } = STRIKE_CONFIG;

  document.querySelectorAll("[data-asset]").forEach((image) => {
    const key = image.dataset.asset;
    const configuredUrl = assets[key];

    if (configuredUrl) {
      image.src = configuredUrl;
    }
  });

  if (assets.background) {
    document.documentElement.style.setProperty(
      "--asset-background",
      `url("${assets.background}")`
    );
  }

  const currentYear = document.querySelector("#current-year");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
}

function initializeRevealAnimations() {
  const items = document.querySelectorAll(
    ".portal-card, .wide-action, .small-action, .why-panel"
  );

  if (!("IntersectionObserver" in window)) {
    return;
  }

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

applyStrikeConfiguration();
initializeRevealAnimations();
