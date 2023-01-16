const fs = require('fs').promises;
const getWords = require('./function').getWords;
const printWord = require('./function').printWord;
const dataset = 'dataset.txt';


const main = async()=>{
    try{
        const data = await fs.readFile(dataset, 'utf-8');
        const words = getWords(data.split(/\W+/));
        printWord(words);
    }catch(err){
        console.log(err);
    }
}

main();