// console.log(process.argv);

var fs = require('fs');
const input = process.argv;

if(input[2] == 1){
    fs.appendFile(input[3], input[4], function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}else{
    console.log(input[2])
}
