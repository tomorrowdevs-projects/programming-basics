const prompt = require("prompt-sync")();

let firstNumber = parseFloat(prompt("Insert a number: "));

const array = [];
array.push(firstNumber);

while (firstNumber > 1){   
        if (firstNumber % 2 === 0){
            firstNumber = firstNumber / 2
        }else{
            firstNumber = firstNumber * 3 + 1;
            
        }
        array.push(firstNumber);
    }
console.log(array);

