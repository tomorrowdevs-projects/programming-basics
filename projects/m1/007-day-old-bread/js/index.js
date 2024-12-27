const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const regularPrice = 3.49;
const discount = 0.6;



async function main() {
   
  const rl = readline.createInterface({ input, output });
 
  const numBread= await getInput(rl);

  const price = numBread * regularPrice;
  const discountPrice = price *discount;
    const result = price - discountPrice;

    console.log(`
       Input = ${numBread}   
Regular price: ${price.toFixed(2)}€  
Discount:      ${discountPrice.toFixed(2)}€  
Total price:    ${result.toFixed(2)}€  
        `);

rl.close();
  //const bottleDeposit = await getInput ('length',rl);
  
  //console.log(`area della staza di lunghezza ${length}, larghezza:${width} è :${area} metri quadrati`);
}
main();



async function getInput(rl,value){
     const input = await rl.question(`Please enter the number of bread loves: `)
     const inputNumber = Number.parseInt(input,10);
    if(Number.isInteger(inputNumber) && inputNumber > 0){
        return inputNumber;
    }
    
    console.log(`Please enter a valid integer for the bread loves`);
    getInput(rl);
   
   
 }