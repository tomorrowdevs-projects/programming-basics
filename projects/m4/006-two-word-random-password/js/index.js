const fs = require('fs').promises;
const randomPass = require('./functions');
const dataset = 'dataset.txt'


const main = ()=>{
     fs.readFile(dataset, 'utf-8')
    .then((data) =>{
         console.log(`your password is: ${randomPass(data)}`);
    }).catch((err) => console.log(err));
}
main();
