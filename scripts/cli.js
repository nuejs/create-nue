#!/usr/bin/env node

/* NOTE:
  The code here is a placeholder.
  I just wanted to get it working as simple as possible.
  The implementation may vary depending on the design. It is a topic to discuss.
*/

import { DEFAULT_OPTS } from './create.js'

const argv = process.isBun ? Bun.argv : process.argv
const script = argv[2]
const opts = { ...DEFAULT_OPTS, ...{ prod: argv[3] == '--prod' } } // TODO: Implement parsing opts

try {
  (await import(`./${script}.js`)).default(opts)
} catch {
  console.error(`Invalid script name: ${script}`)
}