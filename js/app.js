document.documentElement.classList.add("js");

function getStrikeConfig() {
  if (!window.STRIKE_CONFIG) {
    throw new Error(
      "STRIKE_CONFIG was not loaded. Make sure config.js loads before app.js."
    );
  }

  return window.STRIKE_CONFIG;
}

function setLinkDestination(elementId, destination) {
  const link = document.getElementById(elementId);

  if (!link || !destination) {
    return;
  }

  link.href = destination;
}

function applyNavigationLinks() {
  const config = getStrikeConfig();
  const { links } = config;

  setLinkDestination("strikeHqLink", links.strikeHQ);
  setLinkDestination("mobileSetterLink", links.mobileSetter);
  setLinkDestination("mobileCloserLink", links.mobileCloser);
  setLinkDestination("fiberSetterLink", links.fiberSetter);
  setLinkDestination("fiberCloserLink", links.fiberCloser);
  setLinkDestination("joinTeamLink", links.joinTeam);
  setLinkDestination("saveMoneyLink", links.saveMoney);
  setLinkDestination("aboutLink", links.about);
  setLinkDestination("contactLink", links.contact);
}

function updateFooterYear() {
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function initializeRevealAnimations() {
  const items = document.querySelectorAll(
    ".portal-card, .wide-action, .small-action, .why-panel"
  );

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => {
      item.classList.add("reveal--visible");
    });

    return;
  }

  items.forEach((item) => {
    item.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("reveal--visible");
        instance.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12
    }
  );

  items.forEach((item) => {
    observer.observe(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    applyNavigationLinks();
    updateFooterYear();
    initializeRevealAnimations();
  } catch (error) {
    console.error("Strike homepage initialization failed:", error);
  }
});