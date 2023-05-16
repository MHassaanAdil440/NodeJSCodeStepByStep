var http = require('http');
// var data = require('./data2');

// console.log(data);
const name1 = process.argv[2];
const age1 = process.argv[3];
const data =[
    {name: name1, age:age1},
];
var server = http.createServer(function(req,res){
    res.writeHead(201,{'Content-Type':'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(8091)