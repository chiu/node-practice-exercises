var path = require('path')


for(var count = 0; count < process.argv.length; count++){
}

var fs = require('fs');
var pathname = process.argv[2];
var desired_extension = "."+ process.argv[3];

fs.readdir(pathname, function read(err, content) {
  if (err) {
    throw err;
  }



  filtered = content.filter(function(single_file){
    // return true;
// console.log("path extname:", path.extname(single_file));
// console.log("desired extension", desired_extension);
return path.extname(single_file) == desired_extension;
});
  // console.log(filtered);

  for(var i = 0; i < filtered.length; i ++){

    console.log(filtered[i]);
  }

});