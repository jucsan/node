// This problem is the same as the previous problem (HTTP COLLECT) in that
// you need to use http.get(). However, this time you will be provided with
// three URLs as the first three command-line arguments.
//
// You must collect the complete content provided to you by each of the URLs
// and print it to the console (stdout). You don't need to print out the
// length, just the data as a String; one line per URL. The catch is that you
// must print them out in the same order as the URLs are provided to you as
// command-line arguments.

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

//ACCEPTED LINUX SOLUTION
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
