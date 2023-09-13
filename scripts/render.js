#!/usr/bin/env node

/*
  Generates a sample HTML page using Nue server-side rendering
*/

import { promises as fs } from 'node:fs'
import { parse, render } from 'nuejs'
import yaml from 'js-yaml'

// read assets
const read = async (name, dir='src') => await fs.readFile(dir + '/' + name, 'utf-8')
const primary_css = await read('primary.css', 'www/css')
const lib  = parse(await read('components.nue'))
const data = yaml.load(await read('content.data'))
const page = await read('layout.nue')

// set properties
data.primary_css = primary_css.replace(/\s+/g, ' ')
data.timestamp = new Date()

// generate HTML
const html = '<!DOCTYPE html>\n\n' + render(page, data, lib)

// write index.html
await fs.writeFile('./www/index.html', html)

console.log('wrote', 'www/index.html')