const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

let totalDeposit=0;

async function main() {
    console.log("rules:\nEnter the size of your container\n Enter k for having the final refund");
  const rl = readline.createInterface({ input, output });
 
  getInput(rl);
  //const bottleDeposit = await getInput ('length',rl);
  
  //console.log(`area della staza di lunghezza ${length}, larghezza:${width} è :${area} metri quadrati`);
}
main();



async function getInput(rl){
     const input = await rl.question(`Please enter the size  of your container `)
     const inputNumber = Number(input);
     if(input.toLowerCase()==='k'){

        console.log(`your deposit refund is: ${totalDeposit}$ \n`);
        rl.close();
        return;
     }

     if(Number.isNaN(inputNumber) || inputNumber < 0){
        console.log('Please enter a valid number \n');
        }
    else{
        const add = inputNumber > 1 ? 0.25:0.10;
        totalDeposit+=add;
        console.log(`your deposit refund is: ${totalDeposit}$ \n`);
    }
     getInput(rl);



     /* const inputNumber = Number.parseFloat(input);
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
 
         
       
     */
   
 }