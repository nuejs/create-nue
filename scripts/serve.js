
// a super minimal web server to serve files on the current working directory
import { join, extname } from 'node:path'
import http from 'node:http'
import fs from 'node:fs'
import { networkInterfaces } from 'node:os'

export default function(opts={}) {
  const { dir='www', port=8080 } = opts

  const TYPES = {
    html: 'text/html; charset=UTF-8',
    js:   'application/javascript',
    svg:  'image/svg+xml',
    ico:  'image/x-icon',
    png:  'image/png',
    jpg:  'image/jpg',
    css:  'text/css',
  }

  http.createServer(async (req, res) => {
    let { url } = req
    if (url.endsWith('/')) url += 'index.html'
    const path = join(dir, url)
    const ext = extname(path).slice(1)
    const head = { 'Content-Type': TYPES[ext] }
  
    try {
      res.writeHead(200, head)
      fs.createReadStream(path).pipe(res)
  
    } catch(e) {
      res.writeHead(404, head)
      res.end('')
    }
  
  }).listen(port)
  
  // Network IP
  const addr = networkInterfaces()?.eth0?.[0]?.address;

  console.log(
    process.isBun ? 'Bun' : 'Node',
    `HTTP server at http://127.0.0.1:${port}/`,
    addr ? `http://${addr}:${port}/` : ''
  )
}
