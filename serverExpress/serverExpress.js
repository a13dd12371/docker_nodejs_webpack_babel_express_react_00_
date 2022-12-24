const express = require("express")
const path = require('path');
const url = require("url");

const _Port = process.env.PORT || 8080

const app = express()
const router = require('express').Router()

app.use(
  '/',
  router.get('/', (request, response) => {
    console.log(`Request Method: ${request.method}`)
    console.log(`Request Route: ${url.parse(request.url).pathname}`)
    console.log(`Request Port: ${_Port}`)
    response.sendFile(path.join(__dirname, '..', '/clientHTML', '/index.html'))
  })
)
app.use(
  '/xxx',
  router.get('/xxx', (request, response) => {
    response.send("<h1>Hello, Express! - xxx</h1>")
  })
)

app.listen(
  _Port,
  console.log(
    `\t ** serverHttp/serverHttp.js >> requestListerner
 __dirname: ${__dirname})
 process.cwd(): ${process.cwd()}`
  )
)