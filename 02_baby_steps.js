// console.log(process.argv);

var sum = 0;
for(var i = 2; i<process.argv.length; i++){

// console.log(process.argv[i]);
sum += Number(process.argv[i]);

}



// return sum;
console.log(sum);