const fs = require('fs').promises;
const {getArrGender, getMostName, getObj} = require('../009-names-that-reachned-number-one/js/functions');
const prompt = require("prompt-sync")();
const startingYear = prompt('Enter the starting year: ');
const endYear = prompt('Enter  the end year: ');
const userNum = parseInt(prompt('Enter the number of the most used names you want to know: '));


const directory = './names-1880-2021/';

const main = async() =>{
  try{  

     const male = [];
     const female = [];
     for(let year = startingYear; year <= endYear; year++){
      let data = await fs.readFile(directory + `yob${year}.txt`, 'utf-8');
      data = data.split("\n")
          .map((str) => [str.replace(/\r/g, "")].join(",").split(","));
      
      getArrGender(data,female,male)
    }
    const objF = getObj(female);
    const objM = getObj(male);

    const mostF = getMostName(objF,userNum);
    const mostM = getMostName(objM,userNum);  
    
    console.log(`\nthe ${userNum} most used male names between ${startingYear} and ${endYear} are:\n ${mostM}
  \nthe ${userNum} most used female names between ${startingYear} and ${endYear} are:\n ${mostF}`);

  } catch(err){
    console.log(err);
  }
}

main();