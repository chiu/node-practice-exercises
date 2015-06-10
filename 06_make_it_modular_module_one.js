

  var path = require('path')
  var fs = require('fs');

module.exports = function (pathname, desired_extension, flying) { 

// var filtered = [];

fs.readdir(pathname, function (err, list_of_files) {
  if (err){
    return flying(err);
  } else {
     list_of_files = list_of_files.filter(function(single_file) {
      return path.extname(single_file) === desired_extension;
    })
    flying(null,list_of_files);
  }
})



}