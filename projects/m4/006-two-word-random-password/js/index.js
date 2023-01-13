const fs = require('fs').promises;
const randomPass = require('./functions').randomPass;
const dataset = 'dataset.txt'


fs.readFile(dataset, 'utf-8')
    .then((data) =>{
         console.log(`your password is: ${randomPass(data)}`);
    }).catch((err) => console.log(err));