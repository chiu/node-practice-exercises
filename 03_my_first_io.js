 var fs = require('fs');


 fs.readFileSync('/path/to/file')

 var newline_count;
 var str = buf.toString();

 var split_string = str.split('');


 for(var i = 0;  i < split_string.length; i++){


  if (split_string[i] == "n"){
    newline_count++;
  }

}

console.log(newline_count);