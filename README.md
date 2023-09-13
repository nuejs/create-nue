
<a href="https://nuejs.org">
  <img src="https://nuejs.org/global/logo/logo.png" width="275" alt="Nue logo">
</a>

[Ecosystem](//nuejs.org/ecosystem/) •
[Nue JS docs](//nuejs.org/docs/nuejs/) •
[Backstory](//nuejs.org/backstory/)


# create-nue
A recommended way to start a Nue project


## Installation
Setup a new Nue project with `npm create nue <destination>`. For example:

``` sh
npm create nue my-nue-app

# cd to your newly created app
cd my-nue-app

# Build demo site and start a HTTP server
npm run start

# Open the demo on the browser
open "http://localhost:8080"
```

## Demo website
In above we created a demo website under `my-nue-app/www` and serve it on port 8080. It looks like this:

<p><img src="https://nuejs.org/docs/img/create-nue-big.png" style="max-width: 900px" alt="Demo website"></p>


### Demo site features

1. **Separation of concerns**: the content (`src/content.data`) is separated from the layout (`src/layout.nue`, `src/components.nue`) and styling (`www/css/*`)

1. [The 14kb rule][fourteen]: the first TCP packet contains all the necessary to render the first contentful paint: the HTML code and primary CSS (`www/css/primary.css`)

1. **Progressive enhancement**: all JavaScript and secondary CSS is loaded after the content and primary styling is loaded with CSS `fetchpriority` set to "low".

1. **Reactive islands**: the static content is enhanced with two reactive components (aka "islands"): theme switcher dialog and a dialog launcher component. These islands are rendered as Web Components. The logic is found at `www/setup.js`

[fourteen]: https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work#tcp_slow_start_14kb_rule


## Scripts
You can run the following scripts with `npm run <script>` or `bun <script>`.

- **minify**: creates a bundled and minified nue.js script (`www/nue.js`) from the files under `node_modules/nuejs/src`

- **render**: creates `www/index.html` using Nue server-side rendering

- **compile**: compiles client-side nue- components (`src/islands.nue`) under the `www` folder

- **serve**: starts a web server under the `www` directory

- **start**: run them all: minify, render, compile, and serve


## Learning Nue JS
Make changes to the files under the `src` folder and run `npm run render` or `npm run compile` to see your changes. You can also study the contents of the [scripts](scripts) folder. You can see how Nue server side rendering and compilation works. The source code should be easy to read.

Users of Bun can run `bun --bun <script>`. For example: `bun --bun minify`


## Roadmap
This repository gets updated as the projects on our [roadmap](//nuejs.org/roadmap) get finished. Ultimately create-nue iw powered by the upcoming **Nuekit** website generator, which is currently being developed in a private GitHub repository. For now this repository is to learn how [Nue JS](//nuejs.org/docs/nuejs) works.



