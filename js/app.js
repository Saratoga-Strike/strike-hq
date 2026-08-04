document.documentElement.classList.add("js");

function getStrikeConfig() {
  if (!window.STRIKE_CONFIG) {
    throw new Error("STRIKE_CONFIG was not loaded. Make sure js/config.js loads before js/app.js.");
  }

  return window.STRIKE_CONFIG;
}

function setImageSource(id, source) {
  const image = document.getElementById(id);

  if (image && source) {
    image.src = source;
  }
}

function setLinkDestination(id, destination) {
  const link = document.getElementById(id);

  if (link && destination) {
    link.href = destination;
  }
}

function applyStrikeConfiguration() {
  const config = getStrikeConfig();
  const { assets, links, company } = config;

  setImageSource("heroLogo", assets.heroLogo);
  setImageSource("strikeHqIcon", assets.strikeHqIcon);
  setImageSource("mobileSetterIcon", assets.mobileSetterIcon);
  setImageSource("mobileCloserIcon", assets.mobileCloserIcon);
  setImageSource("fiberSetterIcon", assets.fiberSetterIcon);
  setImageSource("fiberCloserIcon", assets.fiberCloserIcon);

  if (assets.background) {
    document.documentElement.style.setProperty(
      "--asset-background",
      `url("${assets.background}")`
    );
  }

  const favicon = document.getElementById("siteFavicon");
  if (favicon && assets.favicon) {
    favicon.href = assets.favicon;
  }

  setLinkDestination("strikeHqLink", links.strikeHq);
  setLinkDestination("mobileSetterLink", links.mobileSetter);
  setLinkDestination("mobileCloserLink", links.mobileCloser);
  setLinkDestination("fiberSetterLink", links.fiberSetter);
  setLinkDestination("fiberCloserLink", links.fiberCloser);
  setLinkDestination("joinTeamLink", links.joinTeam);
  setLinkDestination("saveMoneyLink", links.saveMoney);
  setLinkDestination("aboutLink", links.about);
  setLinkDestination("contactLink", links.contact);

  const currentYear = document.getElementById("current-year");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  const footerCompany = document.querySelector(".site-footer span:first-child");
  if (footerCompany && company?.name) {
    footerCompany.innerHTML = `© <span id="current-year">${new Date().getFullYear()}</span> ${company.name}`;
  }
}

function initializeRevealAnimations() {
  const items = document.querySelectorAll(
    ".portal-card, .wide-action, .small-action, .why-panel"
  );

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("reveal--visible"));
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

document.addEventListener("DOMContentLoaded", () => {
  applyStrikeConfiguration();
  initializeRevealAnimations();
});
