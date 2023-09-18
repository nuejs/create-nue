
<a href="https://nuejs.org">
  <img src="https://nuejs.org/global/logo/logo.png" width="275" alt="Nue logo">
</a>

[Backstory](//nuejs.org/backstory/) •
[Ecosystem](//nuejs.org/ecosystem/) •
[Documentation](//nuejs.org/docs/nuejs/)


# create-nue
A recommended way to start a Nue project

This project is the "Hello, world" application for Nue. It currently shows only the power of the [Nue JS](//nuejs.org/docs/nuejs/) UI library. Eventually this project demonstrates all the features of the [Nue ecosystem](//nuejs.org/ecosystem/), like rich HTML pages written with Markdown- like syntax and universal hot reloading.


## Installation
The recommended way to get started is to clone a `create-nue` repository and play with it:

``` sh
# clone the repository
git clone https://github.com/nuejs/create-nue.git

# cd to your newly created app
cd create-nue

# install dependencies
npm install

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


## Learning Nue JS
Please check the contents of the `src` and `scripts` folders to see how Nue JS server-side rendering and compilation works. The source code should be easy to read.

You can make changes to the files under the `src` folder and run `npm run render` or `npm run compile` to see it live on the demo.

Users of Bun can run `bun --bun <script>`. For example: `bun --bun minify`


## All the scripts
You can run the following scripts with `npm run <script>` or `bun --bun <script>`.

- **minify**: creates a bundled and minified nue.js script (`www/nue.js`) from the files under `node_modules/nuejs/src`

- **render**: creates `www/index.html` using Nue server-side rendering

- **compile**: compiles client-side nue- components (`src/islands.nue`) under the `www` folder

- **serve**: starts a web server under the `www` directory

- **start**: run them all: minify, render, compile, and serve








