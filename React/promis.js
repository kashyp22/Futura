
function Hello(n1,n2){
    return new Promise((res,rej)=>{
        res(n1+n2)
    })
}
function hai(n1,n2){
    return new Promise((res,rej)=>{
      res(n1-n2)
    })
}
function ok(n1,n2){
    return new Promise((res,rej)=>{
        res(n1*n2)
    })
}

Hello(100,250).then((value)=>{
    console.log(value);
    return hai(value,10);
}).then((value2)=>{
    console.log(value2);
    return ok(value2,10)
}).then((res)=>{
    console.log(res);
})