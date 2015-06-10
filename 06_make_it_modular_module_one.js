


module.exports = function (pathname, desired_extension, flying) { 

  var path = require('path')
  var fs = require('fs');
// var filtered = [];

  fs.readdir(pathname, function read(err, content) {
    var filtered = content.filter( function(single_file) {
      return path.extname(single_file) == desired_extension;
    })
    flying(null,filtered);
  })

  

}