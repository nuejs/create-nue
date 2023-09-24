#!/usr/bin/env node

export const DEFAULT_OPTS = {
  prod: false,
  port: 8080
}

export async function create(opts = {}) {
  opts = { ...DEFAULT_OPTS, ...opts }

  // The order is preserved
  const scripts = ['minify', 'render', 'compile', 'server']

  const mods = await Promise.allSettled(
    scripts.map(script => import(`./${script}.js`))
  );

  for (const { value: mod } of mods) {
    await mod.default(opts)
  }
}

export default create