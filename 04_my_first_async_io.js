// console.log(process.argv[2]);

var fs = require('fs');
var file = process.argv[2];




fs.readFile(file, function read(err, data) {
  if (err) {
    throw err;
  }
  content = data;
  content = content.toString();


  var newline_count = content.split(/\r\n|\r|\n/).length - 1;
  console.log(newline_count);
    
  });

