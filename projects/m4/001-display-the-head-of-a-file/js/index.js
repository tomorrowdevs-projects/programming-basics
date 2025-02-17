// const prompt = require('prompt-sync')({sigint: true});
const fs = require('fs/promises');

const textFiles = [];
fs.readFile('./file1.txt',"utf8")
    .then(data => {
        textFiles.push((data.split("\r\n").slice(0, 10)));
        console.log(textFiles);
    }) 
    .catch(error => {
        console.log(error);
    });