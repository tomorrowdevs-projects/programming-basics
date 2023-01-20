const fs = require('fs').promises;
const populateDataset = require('./functions');
const output = 'output.txt'


const cat = async ()=>{
  try{
     const arrDataset = populateDataset();
     for (let i = 0; i < arrDataset.length; i++) {
       const data = await fs.readFile(arrDataset[i], "utf-8");
       await fs.appendFile(output, data);
     }
  }catch(err){
    console.log(err);
  }
}
cat();
