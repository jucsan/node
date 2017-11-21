var net = require('net');

function lead(date){
  return (date < 10 ? '0' : '') + date;
}

var server = net.createServer(function(socket){
  var date = new Date(),
  string = date.getFullYear()
  + "-" + lead(date.getMonth() + 1) + '-'
  + lead(date.getDate()) + ' '
  + lead(date.getHours()) + ':'
  + lead(date.getMinutes());
  socket.end(string + '\n')
})

server.listen(process.argv[2]);
