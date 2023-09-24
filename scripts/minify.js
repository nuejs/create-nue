#!/usr/bin/env node

/*
  Minifies Nue JS files into a single JS file (nue.js)

  Uses esbuild or Bun's internal minifier depending on the environment
*/

import { promises as fs } from 'node:fs'
import { join } from 'node:path'

export default async function (opts) {
  if (!opts.prod) {
    // TODO: Scaffold template via package binary
    const info = 'This feature is not yet available, please see https://github.com/nuejs/create-nue#installation'
    console.warn(info)
    await fs.writeFile('placeholder.txt', info)
    process.exit(0)
  }

  try {
    let Bundler = process.isBun ? Bun : await import('esbuild');

    await Bundler.build({
      entryPoints: [join('node_modules', 'nuejs-core', 'src', 'nue.js')],
      format: 'esm',
      bundle: true,
      outdir: 'www',
      minify: true,
    });

    console.log(
      'Minified Nue to wwwl/nue.js with',
      process.isBun ? 'Bun' : 'ESBuild'
    );
  } catch (e) {
    console.log(
      'No builder found (esbuild or Bun)',
      'www/nue.js is not minified'
    );
    await copyNue();
  }

  // no bundler -> just copy
  async function copyNue() {
    const dir = join('node_modules', 'nuejs-core', 'src')
    const files = await fs.readdir(dir)
    for (const name of files) {
      await fs.copyFile(join(dir, name), join('www', name))
    }
  }
}


