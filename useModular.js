//part 2 of modular.js
var modular = require('./modular.js'),
directory = process.argv[2],
extention = process.argv[3];

modular(directory, extention, callback)

function callback(err, data){
  if(err){
    console.log('there was an error');
  } else {
    data.forEach(function(file){
      console.log(file);
    })
  }
}
