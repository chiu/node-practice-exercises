


var path = require('path')
var fs = require('fs');
var pathname = process.argv[2];
var desired_extension = "."+ process.argv[3];



for(var count = 0; count < process.argv.length; count++){
}



fs.readdir(pathname, function read(err, content) {
  if (err) {
    throw err;
  }
  filtered = content.filter(function(single_file){
    return path.extname(single_file) == desired_extension;
  });
  for(var i = 0; i < filtered.length; i ++){
    console.log(filtered[i]);
  }
});