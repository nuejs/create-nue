#!/usr/bin/env node

import path from 'node:path'
import url from 'node:url'
import fs from 'node:fs/promises'

const DEFAULT_OPTS = {
  name: 'hello-nue'
}

export async function create(opts = {}) {
  opts = { ...DEFAULT_OPTS, ...opts }

  const src = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), 'template')
  const dest = path.resolve(process.cwd(), opts.name)
  
  await fs.mkdir(opts.name)
  await fs.cp(src, dest, { recursive: true, force: true })
}

export default create
