// req response handle data transfer,server create


var a=require('http')
var b=require('url')

var c=a.createServer((req1,res)=>{
    const urls=b.parse(req1.url).pathname;
     console.log('***',(req1.url));

     if (urls =='/') {
        res.write('home page')
        res.end()        
     }else if(urls =='/anyname/abc'){
        res.write('anyname page')
        res.end()
     }
}).listen(5000)
