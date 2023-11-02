const fsi=require('fs')

// ************  Read file ********************

// fsi.readFile('any.txt','utf-8',function(data,err){
//     if(data){
//         console.log(data);
//     }else{
//         console.log(err
//             );
//     }
// })

// *************** Write file **********

// fsi.writeFile('kashyap.txt','hi im kashyap',(err)=>{
//     console.log('sucess');
// })

// ************ rename ******************

// fsi.appendFile('creat1.txt','vendum kashyap add akunu',(data,err)=>{
//     if(data){
//         console.log("file created");
//     }else{
//         console.log("created",err);

//     }
// })

// ************************  renamed file ****************
// fsi.rename('./abcdefg.txt', 'renamed.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("file renamed");
//     }
// })

// ******************* deleated file *************
fsi.unlink('./renamed.txt', (data) => {

    // renamed file poyiiiiiii toh eni kittula

    if (data) {
        console.log(err);
    }
    else
        console.log('file  deleated');
 })
