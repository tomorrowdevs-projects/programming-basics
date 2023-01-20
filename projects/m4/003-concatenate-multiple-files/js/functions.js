const prompt = require('prompt-sync')();
const populateDataset = () =>{
  const arr = [];
  let fileName;
  while (fileName !== "") {
    fileName = prompt("Enter file name or press enter to finish: ");
    if (fileName !== "") arr.push(fileName)   
  }
  return arr;
};

module.exports = populateDataset;