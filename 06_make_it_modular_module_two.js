 // caller file; this file calls the module. 

 var mymodule = require('./06_make_it_modular_module_one.js');


 var pathname = process.argv[2];
 var desired_extension = "."+ process.argv[3];


 // var callback = mymodule;


 mymodule(pathname, desired_extension, function read(err, result){
  if (err){
    // throw err;
    console.log(err);
    // return err;
  } else {
    // return result;
    // console.log(JSON.stringify(result, 2));
    // for(var i = 0; i < result.length; i ++){
    //   console.log(result[i]);
    // }
    console.log(result.join("\n"));
    // return result;

  }

});





//  function bar (callback) {
//   foo(function (err, data) {
//     if (err)
//           return callback(err) // early return

//         // ... no error, continue doing cool things with `data`

//         // all went well, call callback with `null` for the error argument

//         callback(null, data)
//         or(var i = 0; i < filtered.length; i ++){
//     console.log(filtered[i]);
//   }
//       })
// }



