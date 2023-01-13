const fs = require('fs').promises;
const prompt = require("prompt-sync")();
const userFile = prompt('Enter file name: ');
const command = prompt('Enter the command to read the last 10 lines of the file: ')



fs.readFile(userFile, 'utf-8')
    .then((data)=>{
        data = data.split('\n')
        getTail(data,command)
    }).catch((err) => console.log(err));


const getTail = (arr,command, number = 10)=> {
    if(command === 'tail'){
        const tail = arr.filter((elem,index) => index >= arr.length - number).join('\n');
        console.log(tail);
    }else{
        console.log(`bash: ${command}: command not found`)
    }  
}