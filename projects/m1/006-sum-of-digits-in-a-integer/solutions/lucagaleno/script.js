
// Sum of digits in a integer

let inputNumber = parseInt(prompt('Enter input: ', '0000'));

console.log(inputNumber);

while ((inputNumber.toString().length > 4) || (isNaN(inputNumber))){
    let newInputNumber = parseInt(prompt("Please enter the correct input with 4 digits:", '0000'));
    inputNumber = newInputNumber;
};

if (inputNumber.toString().length < 4) {

     inputNumber =   inputNumber.toString().padStart(4,'0'); //padStart to add something at the beginning of a string with defined lengtt
     console.log(inputNumber)
}

let sumDigits = Number(String(inputNumber)[0]) + Number(String(inputNumber)[1]) + Number(String(inputNumber)[2]) + Number(String(inputNumber)[3]);    

console.log('Sum of single digits: '+ sumDigits);