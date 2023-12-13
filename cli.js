#!/usr/bin/env node
'use strict'

import { promises as fs } from 'node:fs'
import { sep, join } from 'node:path'

import * as p from '@clack/prompts'
import color from 'picocolors';

async function copyTemplate(name, to) {
  const s = p.spinner()
  s.start('Copying template')
  const root = new URL('.', import.meta.url).pathname
  const src = join(root, name)
  // const filter = path =>  !path.includes(sep + '.')
  await fs.cp(src, to, { recursive: true, force: true })
  s.stop(`Copied template ${name} to ${to}`)
}

// empty space
console.clear()
console.log('')

p.intro(color.bgCyan(color.black(' create-nue ')))


// project name
const to = await p.text({
  message: 'Your project directory name:',
  placeholder: 'my-app',
  initialValue: '',
  validate(name) {
    if (!name.trim()) return `Project name is required`
  },
})

if (p.isCancel(to)) {
  p.cancel('No project name given. Setup cancelled')
  process.exit(0)
}

// required for Bun
await void(0)


// select template
const template = await p.select({
  message: 'Pick a template',
  options: [
    { value: 'skeleton-site', label: 'Skeleton website', hint: '"Hello, World!" only'},
    { value: 'skeleton-app', label: 'Skeleton app', hint: '"Hello, World!" only'},
    { value: 'hotreload-demo', label: 'Hot-reload demo', hint: 'From Nue front page'},
    { value: 'simple-blog', label: 'Simple blog', hint: 'The blog fron Nue tutorial' },
    { value: 'simple-app', label: 'Simple app', hint: 'The single-page app from Nue tutorial' },
    { value: 'simple-crm', label: 'Simple CRM', hint: 'A more complex single-page application'},
    { value: '', label: 'Empty directory', hint: 'Start from scratch'},
  ],
})

if (p.isCancel(template)) {
  p.cancel('No template given. Setup cancelled')
  process.exit(0)
}

if (template) {
  await copyTemplate(template, to)
} else {
  await fs.mkdir(to, { recursive: true })
  p.log.step(`Created empty directory: ${color.cyan(to)}`)
}

const nextSteps = [
  '# install Nue (if not done yet)',
  color.white('bun install nuekit --global'),
  '',
  '# switch to project directory',
  color.white(`cd ${to}`),
  '',
  '# start developing your app',
  color.white(`nue`)
]

p.note(nextSteps.join('            \n'), 'Next steps.');

p.outro(`Problems? ${color.underline(color.cyan('https://github.com/nuejs/nuejs/issues'))}`)

