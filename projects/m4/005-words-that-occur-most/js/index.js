const fs = require('fs/promises');
const {getArrWords, getMostOccur} = require('./functions');
const prompt = require("prompt-sync")();
const userFile = prompt('Enter file name: ');


const main = ()=>{
    fs.readFile(userFile, "utf8")
      .then((data) => {
        const words = getArrWords(data);
        console.log(getMostOccur(words));
      })
      .catch((err) => console.log(err));
}
      
main();