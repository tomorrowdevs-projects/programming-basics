const fs = require('fs').promises;
const replaceWord = require('./functions').replaceWord;
const dataset = 'dataset.txt';
const sensitiveWord = 'sensitiveWord.txt';
const output = 'output.txt';

const getFileRewritten = async () =>{
    try{
        const dataText = await fs.readFile(dataset , 'utf-8');
        const text = dataText.toLowerCase();
        
        let dataSensWord = await fs.readFile(sensitiveWord, 'utf-8');
        const sensWord = dataSensWord.split(/\W+/);
      
       
       const result = replaceWord(text,sensWord);
       await fs.writeFile(output, result);
        
    }catch(err){
        console.log(err);
    }  
}


getFileRewritten();