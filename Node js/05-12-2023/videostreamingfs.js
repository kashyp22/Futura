const fs = require('fs')

const readFile=fs.createReadStream('./file1.html',{encoding:'utf-8'})
const writeFile=fs.createWriteStream('./file2.html')
// readFile.on('data',(data)=>{
//     console.log('*************************************  ',data);
// })

// writeFile.pipe(readFile)
readFile.pipe(writeFile)
