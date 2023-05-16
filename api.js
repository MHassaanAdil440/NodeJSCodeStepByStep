var http = require('http');
var data = require('./data');

var server = http.createServer(function(req,res){
    res.writeHead(201,{'Content-Type':'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(8091)