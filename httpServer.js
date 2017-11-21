var http = require('http'),
fs = require('fs');

var server = http.createServer(function(req, res){
  var rStream = fs.createReadStream(process.argv[3], {encoding: 'utf8'})
  rStream.pipe(res)
});

server.listen(process.argv[2])

// var http = require('http')
// var fs = require('fs')
//
// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })
//
//   fs.createReadStream(process.argv[3]).pipe(res)
// })
// 
// server.listen(Number(process.argv[2]))
