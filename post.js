// Write an HTTP server that receives only POST requests and converts
// incoming POST body characters to upper-case and returns it to the client.
//
// Your server should listen on the port provided by the first argument to
// your program.

var http = require('http');

var server = http.createServer(function(req, res){
  var array = [];
  if(req.method === 'POST'){
    req.on('data', function(data){
      array.push(data);
    })
    req.on('end', function(){
      array = Buffer.concat(array).toString().toUpperCase();
      res.end(array)
    })
  } else {return}
})

server.listen(process.argv[2])

//using through2-map npm package
// var http = require('http')
// var map = require('through2-map')
//
// var server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }
//
//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))
