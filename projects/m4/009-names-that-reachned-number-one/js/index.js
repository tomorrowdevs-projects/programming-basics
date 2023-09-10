const fs = require('fs').promises;
const directory = './names-1880-2021/';
const {getArrGender, getObj, getMostName} = require('./functions');

const prompt = require('prompt-sync')();
const userNum = prompt('Enter the number of the most used names you want to know: ');


const main = async()=>{
  try{
    const file = await fs.readdir(directory);
   
    const male = [];
    const female = [];
    for(const fileName of file){
        let data = await fs.readFile(directory + fileName, 'utf-8');
        data = data.split("\n")
        .map((str) => [str.replace(/\r/g, "")].join(",").split(","));
    
        getArrGender(data,female,male);
    }
    const objF = getObj(female);
    const objM = getObj(male);

    const mostF = getMostName(objF,userNum);
    const mostM = getMostName(objM,userNum);  
    
    console.log(`\nthe ${userNum} most used male names between 1880 and 2021 are:\n ${mostM}
  \nthe ${userNum} most used female names between 1880 and 2021 are:\n ${mostF}`);

  } catch(err){
    console.log("An error occurred while reading the directory:\n ",err);
  }
}

main()