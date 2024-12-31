const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       
        await getInput(rl)
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
    main();



function getBase2(inputNumber,result=""){
    if(inputNumber === 0){
        return result;
    }
    const rest = inputNumber % 2;
    const newInputNumber = Math.floor(inputNumber / 2);
    result =`${rest}${result}`;

    return getBase2(newInputNumber,result);
}



async function getInput(rl){
   
  
   const input = await rl.question(`Please enter the number: `)
    const inputNumber = Number.parseInt(input,10);
   //const inputNumber = input *1;
    if(input.trim().length === 0){
        return;
    }
    
    if(Number.isInteger(inputNumber)){
        console.log(`conversione in base 2 vale ${getBase2(inputNumber)}`)
    }
    else{
        console.log('Please enter a valid number');
    }

   

 
     return getInput(rl,type,month);

}


