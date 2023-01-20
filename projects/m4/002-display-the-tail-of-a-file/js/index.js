const fs = require('fs').promises;
const prompt = require("prompt-sync")();
const getTail = require('./functions');
const userFile = prompt('Enter file name: ');
const command = prompt('Enter the command to read the last 10 lines of the file: ')


const main = ()=>{
    fs.readFile(userFile, 'utf-8')
    .then((data)=>{
        data = data.split('\n')
        getTail(data,command)
    }).catch((err) => console.log(err));
}
main();