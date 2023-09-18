#!/usr/bin/env node

/*
  Compile/transpile client-side nue- components to JavaScript

  https://nuejs.org/docs/nuejs/reactive-components.html
*/
import { compileFile } from 'nuejs-core'

const target_js = 'www/islands.js'

// compile nue source code for browser execution
await compileFile('src/islands.nue', target_js)
console.info('compiled', target_js)