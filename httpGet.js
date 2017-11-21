var http = require('http'),
bl = require('bl'),
path = process.argv[2];

http.get(path, function(res){
  res.pipe(bl(function(err, data){
    if(err){console.log(err)}
    var string = data.toString();
    console.log(string.length)
    console.log(string);
  }))
  res.on('error', console.error);
}).on('error', console.error)
