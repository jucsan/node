var fs = require('fs'),
extention = '.' + process.argv[3],
location = process.argv[2]
const path = require('path');

fs.readdir(location, function(err, list){
  if(err){
    console.log(err);
  } else {
    list.forEach(function(file){
      if(path.extname(file) === extention) console.log(file)
    })
  }
})
