
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function main() {
  const rl = readline.createInterface({ input, output });
  const length = await getInput ('length',rl);
  const width = await getInput ('width',rl);
  console.log('length',length);
  console.log('width',width);
  const area = length * width;
  console.log(`area della staza di lunghezza ${length}, larghezza:${width} è :${area} metri quadrati`);
}
main();



async function getInput(value,rl){
     const input = await rl.question(`Please enter the value of ${value} :`)
        const inputNumber = Number.parseFloat(input);
        //console.log({inputNumber})
        if(!Number.isNaN(inputNumber) && !Number.isInteger(inputNumber)){
         //console.log('finish');
         return inputNumber
         
       }
     let result = "";
        if(Number.isInteger(inputNumber)){
         result = `Please enter a valid float number for the ${value} of the room`
        }
        else if (Number.isNaN(inputNumber)){
          result = `Please enter a valid number for the ${value} of the room`
        }
 
        console.log(result);
        getInput(value);
 
         
       
     
   
 }



