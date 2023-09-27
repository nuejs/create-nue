#!/usr/bin/env node

/*
  This file is an entry point for calling the package via shell.

  `$ npm create nue@latest`
  `$ npx create-nue@latest`
  `$ yarn create nue`
  `$ pnpm create nue`
  `$ bunx create-nue@latest`

  Or if installed globally:
  `$ create-nue`
*/

import readline from 'node:readline/promises'
import process from 'node:process'
import create from './create.js'

const prompts = {}

const PM =
  'npm_config_user_agent' in process.env
    ? ['bun', 'pnpm', 'yarn', 'npm', ''].find(pm =>
        process.env.npm_config_user_agent.startsWith(pm)
      )
    : 'npm'

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const r = new readline.Readline(process.stdout)

const clearLine = () => {
  r.moveCursor(0, -1)
  r.clearLine(1)
  r.commit()
}
const clearScreen = () => {
  r.cursorTo(0, 0)
  r.clearScreenDown()
  r.commit()
}

clearScreen()
prompts.name = await rl.question('> Project name: ')
rl.close()

try {
  await create(prompts)
} catch (e) {
  console.error(e.message)
  console.info('Unable to create, aborting...')
  process.exit(1)
} finally {
  console.info('\nWelcome to Nue!')
  console.info(`
    cd ${prompts.name}
    ${PM} install
    ${PM} start
  `)
  process.exit(0)
}
