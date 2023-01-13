const fs = require('fs').promises;
const getArrGender = require('../009-names-that-reachned-number-one/js/functions').getArrGender;
const getObj = require('../009-names-that-reachned-number-one/js/functions').getObj;
const getMostName = require('../009-names-that-reachned-number-one/js/functions').getMostName;
const prompt = require("prompt-sync")();
const startingYear = prompt('Enter the starting year: ');
const endYear = prompt('Enter  the end year: ');
const userNum = parseInt(prompt('Enter the number of the most used names you want to know: '));


const directory = './names-1880-2021/';


const main = async() =>{
  let data;
  try{
     const male = [];
     const female = [];
     let objM = {};
     let objF = {};
     for(let year = startingYear; year <= endYear; year++){
      data = await fs.readFile(directory + `yob${year}.txt`, 'utf-8');
       data = data.split("\n")
          .map((str) => [str.replace(/\r/g, "")].join(",").split(","));
      
      getArrGender(data,female,male)
    }
    objF = getObj(female);
    objM = getObj(male);

    const mostF = getMostName(objF,userNum);
    const mostM = getMostName(objM,userNum);  
    
    console.log(`\nthe ${userNum} most used male names between 1880 and 2021 are:\n ${mostM}
  \nthe ${userNum} most used female names between 1880 and 2021 are:\n ${mostF}`);

  } catch(err){
    console.log(err);
  }
}

main();