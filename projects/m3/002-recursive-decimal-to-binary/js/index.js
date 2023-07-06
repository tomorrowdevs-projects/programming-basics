const prompt = require("prompt-sync")();

function convertNumber (n,array){
   
    if (n<0){
        return `Error insert a positive number`
    }else if (n === 0 || n === 1) {
        array.push(n)
        return `The binary number of ${n} is ${array.reverse().join("")}`;
    }else{
        const digitToPush = n % 2; //0 1 0 1
        const digitToCalculate = Math.floor(n / 2); //5 2 1
        array.push(digitToPush)
        return convertNumber(digitToCalculate,array); //5 [0] - 2 [0,1] - 2 [0,1,0] - 1 [0,1,0,1]
    }
    
}
const numberToCheck = parseInt(prompt("Insert a positive number: ")) //10
const binary = convertNumber(numberToCheck,[])
console.log(binary)