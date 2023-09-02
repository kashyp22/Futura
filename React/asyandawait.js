    
    
    
    function functionOne(){
        return new Promise((res,rej)=>{
            setTimeout(() => {
            let name="sreerag" 
            res(name)   
            },3000);    
        })   
    }


    function functionTwo(){
        return new Promise((res,rej)=>{ 
            setTimeout(() => {        
                let age=26 
                res(age)
                },3000);
        })
    }
     
    //using promise
    // Promise.all([functionOne(),functionTwo()]).then((result)=>{ 
    //         console.log(result);        
    //     })
    //using asing await
    async function display(){
        let name= await functionOne()
        console.log('***',name);
        let age= await functionTwo()
        console.log('***',age);
    }
    display()
    