// console.log(process.argv[2]);

var fs = require('fs');


var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
// var split_string = str.split('');


var newline_count = str.split(/\r\n|\r|\n/).length - 1;
// var newline_count = 0;
// for(var i = 0;  i < split_string.length; i++){
//   uri = /n/;
//   if ( split_string[i].match(uri) ){
//     newline_count++;
//   }
// }

console.log(newline_count);