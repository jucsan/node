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
