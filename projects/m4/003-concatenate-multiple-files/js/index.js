const fs = require('fs').promises;
const prompt = require('prompt-sync')();
const output = 'output.txt'
let arrDataset = [];

const populateDataset = () =>{
  
  const fileName = prompt('Enter file name or press enter to finish: ');

   if(fileName == ''){
      return arrDataset;
   }else{
      arrDataset.push(fileName);
      return populateDataset();
   }
}

const cat = () =>{
    arrDataset = populateDataset();

    if(arrDataset.length){
      const readFile = arrDataset.map((file)=>{
      return fs.readFile(file,'utf-8').catch((err) => console.log(`\nError reading file ${file}:\n\n ${err}`))
    }) ;
  
    Promise.all(readFile)
      .then((result) =>{
          fs.writeFile(output,result)
          console.log(result.join(' - '))
      }).catch((err) => console.log(err))
    
    }else{
      console.log('no files entered')
    }
}
cat()