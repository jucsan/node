var fs      = require('fs'),
fileString  = fs.readFileSync('./text.txt').toString().split('\n'),
// fileString  = fs.readFileSync(process.argv[2]).toString().split('\n'),
lines       = fileString.length - 1;

console.log(lines)

//no need for loop, just lenght it
// for(var i = 0; i <= fileString.length - 2; i++){
//   lineTotal ++;
// }
//
// console.log(lineTotal);
