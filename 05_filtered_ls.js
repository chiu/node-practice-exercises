var path = require('path')


// console.log(process.argv[2]);
console.log("hi");
for(var count = 0; count < process.argv.length; count++){
  console.log(process.argv[count]);
}
console.log("goodbye");

// path.extname(p)#

var fs = require('fs');
var pathname = process.argv[2];
var desired_extension = process.argv[3];

console.log('pathname', pathname);
console.log('desired_extension', desired_extension);

fs.readdir(pathname, function read(err, data) {
  if (err) {
    throw err;
  }
  content = data;
  content = content.toString();
console.log(content);



filtered = content.filter(function(count_file){
  console.log(path.extname(content[count_file]));
  path.extname(content[count_file]) == desired_extension;
});
// console.log(filtered.toString());
console.log(filtered);
});