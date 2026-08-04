# Strike HQ — Config-Driven Version

Main change:
All asset paths and page destinations now live in:

js/config.js

Edit that one file when:
- replacing local image paths with GoHighLevel Media Storage URLs
- changing page paths
- changing the Strike HQ external link
- replacing the favicon

Load order:
1. js/config.js
2. js/app.js

Files included:
- index.html
- css/styles.css
- js/config.js
- js/app.js
- strike-homepage-reference.html

GoHighLevel note:
When pasting into HighLevel, place the contents of config.js before app.js in the footer/tracking-code section.
