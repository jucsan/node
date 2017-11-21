// Write an HTTP server that serves JSON data when it receives a GET request
// to the path '/api/parsetime'. Expect the request to contain a query string
// with a key 'iso' and an ISO-format time as the value.
//
// For example:
//
// /api/parsetime?iso=2013-08-10T12:10:15.474Z
//
// The JSON response should contain only 'hour', 'minute' and 'second'
// properties. For example:
//
//    {
//      "hour": 14,
//      "minute": 23,
//      "second": 15
//    }
//
// Add second endpoint for the path '/api/unixtime' which accepts the same
// query string but returns UNIX epoch time in milliseconds (the number of
// milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
// For example:
//
//    { "unixtime": 1376136615474 }
//
// Your server should listen on the port provided by the first argument to
// your program.

var http = require('http'),
url = require('url');

function parse(d){
  return {hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds()}
}

function unix(d){
  return {unixtime: d.getTime()}
}

var server = http.createServer(function(req, res){
  if(req.method !== 'GET'){
    return 'We only do GET';
  }

  req.on('error', function(err){
    console.log(err)
  });

  var u = url.parse(req.url, true),
  date = new Date(u.query.iso),
  j;
  if(u.pathname === '/api/parsetime'){
    j = parse(date)
  }

  if(u.pathname === '/api/unixtime'){
    j = unix(date)
  }

  if(j){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(j));
  } else {
    res.writeHead(404);
    res.end();
  }
})

server.listen(process.argv[2])
