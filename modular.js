var fs = require('fs'),
path = require('path');

module.exports = function (dir, exten, callback){
  var ext = '.' + exten;
  fs.readdir(dir, function(err, list){
    if(err){
      callback(err)
    } else {
      var array = []
      list.forEach(function(file){
        if(path.extname(file) === ext) {
          array.push(file)};
      })
      callback(null, array);
    }
  })
}
