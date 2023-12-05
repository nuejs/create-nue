
---
title: Modern techniques for progressive enhancement
description: Progressive enhancement allows websites to provide basic functional access to all users, while layering modern features for capable browsers. Here are the core techniques.

pubDate: 2023-09-14
author: Alice Greenland
avatar: /img/alice.jpg
poster: cover.jpeg
thumb: thumb.jpg
---

Progressive enhancement allows websites to provide basic functional access to all users, while layering modern features for capable browsers. Implementing it involves planning fallbacks with these core techniques:

- Feature detection - Use JavaScript to check browser support for newer features before applying them. For example, check for support of Flexbox before enabling flex layouts.

- Graceful degradation - Layer modern CSS and JavaScript on top of basic HTML foundations. If scripts fail to load or browsers lack support, the underlying HTML ensures the site remains usable but loses enhancements.

- Semantic HTML - Use semantic elements like `<header>`, `<main>` and `<aside>` to provide native browser styling in absence of CSS. Rely on HTML for document structure.

- Default stylings - Build from a naked HTML foundation upward. Apply CSS resets cautiously to avoid stripping default browser styling that aids unsupported browsers.

- Polyfills - Use polyfill scripts to mimic missing native support for newer features like CSS Grid, media queries and SVG. This expands browser compatibility.

- Accessible UX - Ensure all UX remains accessible without JavaScript. Menu toggles, image carousels and other interactive patterns should have HTML-based fallbacks.

## Summary
By beginning with a resilient HTML foundation then cautiously adding progressive layers, websites can maximize compatibility while providing cutting-edge experiences for modern browsers that support them. Planning for progressive enhancement from the start results in experiences built to withstand the test of time.

