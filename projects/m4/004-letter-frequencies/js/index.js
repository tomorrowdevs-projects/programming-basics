const fs = require('fs').promises;
const getArrLett = require('./function').getArrLett;
const getLetterFreq = require('./function').getLetterFreq;
const prompt = require("prompt-sync")();
const userFile = prompt('Enter file name: ');


fs.readFile(userFile, 'utf-8')
  .then((data)=>{

    const letters = getArrLett(data);
    console.log(getLetterFreq(letters)) ;

  }).catch((err) => console.log(err));
  


 