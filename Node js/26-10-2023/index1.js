// we connecting using require like import in react 

var http = require('http')

http.createServer(function(req,res){
    res.write('hellow port')
    res.end()
}).listen('8800')

