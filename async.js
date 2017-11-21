var http = require('http'),
bl = require('bl'),
array = [],
counter = 0;

function result(){
  array.forEach(function(item){
    console.log(item);
  })
}

function httpget(index){
  http.get(process.argv[2 + index ], function(res){
    res.pipe(bl(function(err, data){
      if(err){console.log(err)};

      array[index] = data.toString();
      counter++;
      if(counter === 3){
        result()
      }
    }))
  })
}

for(var i = 0; i < 3; i++ ){
  httpget(i)
}

// for(var i = 2; i <= process.argv.length - 1; i++){
//   http.get(process.argv[2], function(res){
//     var string = ''
//     res.setEncoding('utf8')
//     res.on('data', function(data){
//       string += data
//     })
//     res.on('end', function(){
//       console.log(string);
//     })
//   }).on('error', console.error);
// }
