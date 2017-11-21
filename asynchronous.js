var fs = require('fs');

// fs.readFile('./text.txt', 'utf8', function (err, data){
fs.readFile(process.argv[2], 'utf8', function (err, data){
  if(err){
    console.log('there was an error')
  } else {
    console.log(data.split('\n').length - 1);
  }
})
