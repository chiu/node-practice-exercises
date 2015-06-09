// console.log(process.argv[2]);

var fs = require('fs');
// var buf = fs.readFile(process.argv[2]);
// var str = buf.toString();
// var newline_count = str.split(/\r\n|\r|\n/).length - 1;

// console.log(newline_count);



// var fs = require('fs') // require is a special function provided by node
// var myNumber = undefined // we don't know what the number is yet since it is stored in a file

// function addOne() {
//   fs.readFile('number.txt', function doneReading(err, fileContents) {
//     myNumber = parseInt(fileContents)
//     myNumber++
//   })
// }

// addOne()

// console.log(myNumber) // logs out undefined -- this line gets run before readFile is done


fs.readFile(process.argv[2], function read(err, data) {
  if (err) {
    throw err;
  }
  content = data;
  content = content.toString();


  var newline_count = content.split(/\r\n|\r|\n/).length - 1;
  console.log(newline_count);
    // Invoke the next step here however you like
    // console.log(content);   // Put all of the code here (not the best solution)
    // processFile();
  });


// function processFile() {
//   console.log(content);
// }      