#!/usr/bin/env node

/*
  Generates a sample HTML page using Nue server-side rendering

  https://nuejs.org/docs/nuejs/server-components.html
*/

import { parse, render } from 'nuejs-core'
import { promises as fs } from 'node:fs'
import yaml from 'js-yaml'

// read() function for reading assets
const read = async (name, dir='src') => await fs.readFile(dir + '/' + name, 'utf-8')

// read primary CSS
const primary_css = await read('primary.css', 'www/css')

// read dependencies (server-side components)
const lib  = parse(await read('components.nue'))

// read website data: title, description, etc.
const data = yaml.load(await read('content.data'))

// read page layout
const page = await read('layout.nue')

// set extra, dynamic properties to data
data.primary_css = primary_css.replace(/\s+/g, ' ')
data.timestamp = new Date()

// generate HTML with the render() method
const html = '<!DOCTYPE html>\n\n' + render(page, data, lib)

// write index.html
await fs.writeFile('./www/index.html', html)

console.log('wrote', 'www/index.html')