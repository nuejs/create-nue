#!/usr/bin/env node

/*
  Compile/transpile client-side nue- components to JavaScript
*/
import { compileFile } from 'nuejs'
const js = 'www/islands.js'
await compileFile('src/islands.nue', js)
console.info('compiled', js)