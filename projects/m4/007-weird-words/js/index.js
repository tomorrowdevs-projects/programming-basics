const fs  = require('fs').promises;
const getLists = require('./functions');
const prompt = require('prompt-sync')();
const dataset = prompt('Enter file name: ');


const main = ()=>{
    fs.readFile(dataset, 'utf-8')
    .then((data) =>{
        console.log(getLists(data));
    }).catch((err) => console.log(err))
}

main();


