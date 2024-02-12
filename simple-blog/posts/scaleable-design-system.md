---
title: Crafting a scaleable CSS design system
hero: img/ui-1.png
pubDate: 2023-05-22
credits: vlockn
---

Design systems are key to managing code at scale, but creating one that’s flexible and maintainable takes work. A key to success is to break UI elements into reusable, abstracted components. When building a CSS design system, focus on these areas:

1. **Modular components**: Break UI elements into reusable, abstracted components. A button should be built independently from where it’s used. This promotes consistency across properties and apps.

2. **Flexible foundations**: Construct stylistic foundations for typography, color palettes, spacing, etc. But don’t be overly prescriptive. Leave room for one-off deviations.

3. **Clear naming conventions**: Utilize consistent, semantic naming for classes, variables, mixins, etc. This improves developer efficiency and organization.


## Keep things minimal
It's important to keep things lightweight: Write CSS that’s DRY, separating structure from skin using methodologies like BEM. Don't over-engineer - keep logic simple.

[code numbered="true"]
  <figure @name="img" :class="class" :id="id">
    <img loading="lazy" :alt="alt" :src="_ || src">

    <!--
      Inner comment and another lkfsjlksaj
    -->
    <p>I finally made it to the public</p>

  + <figcaption :if="caption">{{ caption }}</figcaption>
  - <figcaption :if="caption">{{ caption }}</figcaption>

    <script>
      •constructor(data)• {
        this.caption = data.caption || ''
      }
    </script>
  </figure>


Use gradual rollouts: Introduce changes incrementally over time. Don't rebuild everything at once. Maintain backwards compatibility.

> Put in the work upfront, and your system will pay dividends down the road.

By investing in these areas, you can craft a design system that brings cohesion and consistency to products, while still being flexible enough to allow for creative solutions. The ultimate goal is scalable, maintainable CSS that matches the ever-evolving needs of organizations and developers alike. Put in the work upfront, and your system will pay dividends down the road.

![](img/ui-2.png)

Once a painting is underway, digital photography can also assist the process. Taking in-progress photos allows you to see compositions with fresh eyes. You can spot areas for improvement, mistakes that need correcting, or places that would benefit from increased attention. Like having an undo button, it gives the opportunity for editing mid-painting.

[codetabs "page.tsx | layout.html" languages="jsx; html" numbered="true"]
  import { FormEvent } from 'react';

  /* comment goes here */
  export default function Page() {
    async function onSubmit(event: FormEvent<Element>) {
  +   const response = await fetch('/api/submit', {
  +     method: 'POSTO',
        body: formData,
      });
    }

    return (
      <form onSubmit=•{onSubmit}•>
  >     <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    );
  }`
  ---
  <!-- join form -->
  <form @name="join-list">
    <label>
      <h4>Your name</h4>
      <input type="text" name="name" required>
    </label>

    <label>
      <h4>Your email</h4>
      <input type="email" ••name="email" required••>
    </label>

    <label>
      <h4>Your requirements</h4>
      <textarea name="feedback" placeholder="Type here..."/>
    </label>
    <button>I'm interested</button>
  </form>


## Summary

By investing in these areas, you can craft a design system that brings cohesion and consistency to products, while still being flexible enough to allow for creative solutions. The ultimate goal is scalable, maintainable CSS that matches the ever-evolving needs of organizations and developers alike. Put in the work upfront, and your system will pay dividends down the road.

![](img/ui-3.png)

Using color effectively is a vital part of web design. When planned intentionally, your color palette creates visual harmony across your website or application. A cohesive color scheme boosts recognition of your brand, while making the interface feel cohesive.





