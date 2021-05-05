/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

const express = require('express')
const morgan = require('morgan')
const next = require('next')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()
const env = process.env.NODE_ENV
const dev = env !== 'production'

const devProxy = {
  '/api': {
    // target: 'http://yuansuan-portal.intern.yuansuan.cn/api',
    target: 'http://localhost:3001/api',
    pathRewrite: { '^/api': '/' },
    changeOrigin: true,
  },
}

;(async () => {
  await app.prepare()
  const server = express()

  // Set up the proxy.
  if (dev && devProxy) {
    const proxyMiddleware = require('http-proxy-middleware')
    Object.keys(devProxy).forEach(function(context) {
      server.use(proxyMiddleware(context, devProxy[context]))
    })
  }

  server.use(
    morgan(':date[iso] :remote-addr :method :url :status - :response-time ms')
  )

  server.get('*', (req, res) => handle(req, res))

  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()
