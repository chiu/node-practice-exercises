


module.exports = function (pathname, desired_extension, flying) { 

  var path = require('path')
  var fs = require('fs');
// var filtered = [];

  fs.readdir(pathname, function read(err, content) {
    if (err){
      return flying(err, null);
    }

    var filtered = content.filter( function(single_file) {
      return path.extname(single_file) == desired_extension;
    })

    return flying(null,filtered);
  })

  

}