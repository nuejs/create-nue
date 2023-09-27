
/*
  Compile/transpile client-side nue- components to JavaScript

  https://nuejs.org/docs/nuejs/reactive-components.html
*/
import { compileFile } from 'nuejs-core'

export default async function(to='www/islands.js') {
  await compileFile('src/islands.nue', to)
  console.info('compiled', to)
}