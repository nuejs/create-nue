#!/usr/bin/env node

import { DEFAULT_OPTS } from './create.js'

const argv = process.isBun ? Bun.argv : process.argv
const script = argv[2]
const opts = { ...DEFAULT_OPTS, ...{ prod: argv[3] == '--prod' } }

try {
  (await import(`./${script}.js`)).default(opts)
} catch {
  console.error(`Invalid script name: ${script}`)
}