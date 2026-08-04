/*
==========================================================
 STRIKE HQ CONFIGURATION
==========================================================

This is the ONLY file you should need to edit in the future.

If you ever:
- Change an icon
- Replace the logo
- Change page URLs
- Change the Strike HQ link

...you only edit this file.

==========================================================
*/

window.STRIKE_CONFIG = {

    company: {
        name: "Strike",
        footerText: "Powered by Strike HQ"
    },

    assets: {

        // Background
        background: "assets/backgrounds/background.webp",

        // Logos
        heroLogo: "assets/logo/hero-logo.webp",
        strikeLogo: "assets/logo/strike-logo.webp",
        favicon: "assets/logo/favicon.png",

        // HQ
        strikeHqIcon: "assets/icons/s-bolt-red.webp",

        // Mobile
        mobileSetterIcon: "assets/icons/s-bolt-blue.webp",
        mobileCloserIcon: "assets/icons/s-bolt-gold.webp",

        // Fiber
        fiberSetterIcon: "assets/icons/bolt-blue.webp",
        fiberCloserIcon: "assets/icons/bolt-gold.webp"
    },

    links: {

        // GoHighLevel
        strikeHq:
            "https://virtual.fiberonyx.com/?url=%252Fv2%252Flocation%252F2y7t6RQ7whC5QFkjdzIq%252Fsettings%252Fstaff%252Fteam",

        // Internal pages
        mobileSetter: "pages/mobile-setter.html",
        mobileCloser: "pages/mobile-closer.html",

        fiberSetter: "pages/fiber-setter.html",
        fiberCloser: "pages/fiber-closer.html",

        joinTeam: "pages/join-team.html",
        saveMoney: "pages/save-money.html",

        about: "pages/about.html",
        contact: "pages/contact.html"
    }

};