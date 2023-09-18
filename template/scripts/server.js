#!/usr/bin/env node

// a super minimal web server to serve files on the current working directory
import { join, extname } from 'node:path'
import http from 'node:http'
import fs from 'node:fs'

const TYPES = {
  html: 'text/html; charset=UTF-8',
  js:   'application/javascript',
  svg:  'image/svg+xml',
  ico:  'image/x-icon',
  png:  'image/png',
  jpg:  'image/jpg',
  css:  'text/css'
}

const PORT = 8080

http.createServer(async (req, res) => {
  let { url } = req
  if (url.endsWith('/')) url += 'index.html'
  const path = join('.', url)
  const ext = extname(path).slice(1)
  const head = { 'Content-Type': TYPES[ext] }

  try {
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)

  } catch(e) {
    res.writeHead(404, head)
    res.end('')
  }

}).listen(PORT)

console.log(process.isBun ? 'Bun' : 'Node', `HTTP server at http://127.0.0.1:${PORT}/`)
