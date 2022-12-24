const http = require('http');
const url = require("url");
var fs = require('fs');

console.log("## serverHttp/serverHttp.js")
console.log("__dirname: ", __dirname)
console.log("process.cwd(): ", process.cwd())


const _Port = process.env.PORT || 3000
const requestListerner = (request, response) => {
  console.log(`Request Method: ${request.method}`)
  console.log(`Request Route: ${url.parse(request.url).pathname}`)
  console.log(`Request Port: ${_Port}`)
  response.writeHead(200, { 'Content-Type': 'text/html' })
  console.log("\t ** serverHttp/serverHttp.js >> requestListerner")
  console.log("__dirname: ", __dirname)
  console.log("process.cwd(): ", process.cwd())
  response.end(fs.readFileSync('./clientHTML/index.html'))
}

// const serverHTTP = http.createServer(requestListerner).listen(_Port)
http.createServer(requestListerner).listen(_Port)
