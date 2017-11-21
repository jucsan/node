var http = require('http'),
path = process.argv[2]

http.get(path, function(res){
  res.setEncoding('utf8');
  res.on('data', function(data){
    console.log(data);
  })
  res.on('error', console.error)
}).on('error', console.error)
