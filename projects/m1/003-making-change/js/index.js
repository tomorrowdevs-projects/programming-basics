const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const Penny = 1;
const Nickel = 5;
const Dime = 10
const Quarter = 25
const Loonie = 100 
const Toonie = 200 

async function main() {
    console.log("rules:\nEnter the size of your container\n Enter k for having the final refund");
  const rl = readline.createInterface({ input, output });
 
  getInput(rl);
  //const bottleDeposit = await getInput ('length',rl);
  
  //console.log(`area della staza di lunghezza ${length}, larghezza:${width} è :${area} metri quadrati`);
}
main();



async function getInput(rl){
     const input = await rl.question(`Please enter the change: `)
     const inputNumber = Number.parseInt(input,10);
    if(Number.isInteger(inputNumber) && inputNumber > 0){

      

        const toonies = Math.floor(input / Toonie);
        const restT = input % Toonie;
        const loonies = Math.floor(restT / Loonie);
        const restL = restT % Loonie;
      const quarters = Math.floor(restL / Quarter);
        const restQ = restL % Quarter;
        const dimes = Math.floor(restQ/ Dime);
        const restD = restQ % Dime;
        const nickels = Math.floor(restD/ Nickel);
        const pennys= restD % Nickel;

        console.log(`the change:${inputNumber} corrisponde:
            Tonnies:${toonies}
            loonies:${loonies},
            quarters:${quarters},
            dimes:${dimes},
            nickesl:${nickels},
            pennys:${pennys}
            `,
        )
        rl.close();
        return;
    }
    
    console.log('Please enter a valid integer for the change');
    getInput(rl);
   
   
 }