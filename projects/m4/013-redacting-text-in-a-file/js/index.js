const fs = require('fs').promises;
const replaceWord = require('./functions');
// const dataset = 'dataset.txt';
// const sensitiveWord = 'sensitiveWord.txt';
const output = 'output.txt';
const arrDataset = ['dataset.txt','sensitiveWord.txt']



const getFileRewritten = ()=>{
     const readArr = arrDataset.map((file)=>{
        return fs.readFile(file,'utf-8');
     });
    Promise.all(readArr)
        .then((data)=>{
            const text = data[0].toLowerCase();
            const sensWord = data[1].split(/\s+/);

            const result = replaceWord(text, sensWord);

            fs.writeFile(output, result);

         }).catch((err) => console.log(err));
}

getFileRewritten();