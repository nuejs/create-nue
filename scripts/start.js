
import compile from './compile.js'
import minify from './minify.js'
import render from './render.js'
import serve from './serve.js'

export default async function start() {
  await compile()
  await minify()
  await render()
  serve()
}
