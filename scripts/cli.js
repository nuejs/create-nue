#!/usr/bin/env node

const script = process.argv[2]

try {
  (await import(`./${script}.js`)).default()
} catch (e) {
  console.info(e)
  console.error('Invalid script:', script)
}