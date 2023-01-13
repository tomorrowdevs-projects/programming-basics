const fs = require('fs/promises');
const getArrWords = require('./functions').getArrWords;
const getMostOccur = require('./functions').getMostOccur;
const prompt = require("prompt-sync")();
const userFile = prompt('Enter file name: ');


fs.readFile(userFile,'utf8')
    .then((data) =>{
        const words = getArrWords(data);
        console.log(getMostOccur(words));
    }).catch((err) => console.log(err))
        
