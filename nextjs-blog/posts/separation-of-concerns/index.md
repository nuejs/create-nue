
---
title: Semantic CSS and Separation of Concerns
description: An important principle in writing maintainable CSS is to separate structural styling from visual styling. This separation of concerns results in CSS that is more modular, reusable and adaptable over time.
pubDate: 2023-08-22
author: Brian Morrison
avatar: /img/brian.jpg
poster: cover.jpeg
thumb: thumb.jpg
---

An important principle in writing maintainable CSS is to separate structural styling from visual styling. This separation of concerns results in CSS that is more modular, reusable and adaptable over time.

One way to achieve this separation is through semantic CSS class names. Classes should describe the content or function of an element, not its particular visual treatment. For example, .button vs .green-button.

Structural CSS focuses on providing the underlying scaffolding for a component. This includes layout, positioning, basic typographic treatment, etc. These styles form the technical backbone of an element.

## Separation makes theming possible

Visual CSS handles presentational changes like colors, shadows and decorative styles. This CSS can be easily swapped out to update appearances without altering the underlying semantic structure.

Additional methodologies like BEM (Block Element Modifier) further help decouple structure from skin. BEM methodology gives developers strict naming conventions to separate these concerns in their CSS classes.

By consciously separating structural CSS from visual treatments, sites become more adaptable over time. Updating design trends is simpler without overhauling semantic markup. It also clarifies code intention for other developers inheriting a project. Semantic CSS with clear separation of concerns is a crucial aspect of maintainable front-end development.