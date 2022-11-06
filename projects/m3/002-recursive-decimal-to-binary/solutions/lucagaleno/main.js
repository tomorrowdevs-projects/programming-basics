//Recursive Decimal to Bnary

const prompt = require('prompt-sync')();
const value = parseInt(prompt('Enter the value (empty to stop enetring values): '));

function decimalToBinary(number){

    if ((number === 1) || (number === 0)){
        return number.toString();
    }else { 
        binary = (decimalToBinary(parseInt(number/2)))
        return  (binary + (number%2).toString());
    };
};
console.log(`The integer base 10 ${value} become in binary base 2: ${decimalToBinary(value)}`)

