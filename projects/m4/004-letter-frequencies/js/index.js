const fs = require('fs').promises;
const {getArrLett, getLetterFreq} = require('./function');
const prompt = require("prompt-sync")();
const userFile = prompt('Enter file name: ');

const main = ()=>{
  fs.readFile(userFile, 'utf-8')
  .then((data)=>{

    const letters = getArrLett(data);
    console.log(getLetterFreq(letters)) ;

  }).catch((err) => console.log(err));
}

main();
  


 