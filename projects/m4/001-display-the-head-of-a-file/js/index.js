const fs = require('fs').promises;
const prompt = require("prompt-sync")();
const userFile = prompt('Enter file name: ');
const command = prompt('Enter the command to read the first 10 lines of the file: ')



fs.readFile(userFile, 'utf-8')
    .then((data)=>{
        data = data.split('\n')
        getHead(data,command)
    }).catch((err) => console.log(err));


const getHead = (arr,command, number = 10)=> {
    if(command === 'head'){
        const head = arr.filter((elem,index) => index < number).join('\n');
        console.log(head);
    }else{
        console.log(`bash: ${command}: command not found`)
    }  
}