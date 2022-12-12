// Declare variables
let userNumber = "";
let sumNumbers = 0;

// User input request 
do{
  userNumber = prompt("Inserire un numero con massimo 4 cifre");
} while(userNumber.length != 4)

// Split user input
const userNumberSplit = userNumber.split('');

// Declare new array for splitted user input
const convUserNumberSplit = [];

// Convert Input in Number
userNumberSplit.forEach(el => {
  convUserNumberSplit.push(Number(el));
});
// Sum element of array
for(let i = 0; i < convUserNumberSplit.length; i++){
  sumNumbers += convUserNumberSplit[i];
} 

// Alert with mathematic sum and result
alert(convUserNumberSplit[0] + "+" + convUserNumberSplit[1] + "+" + convUserNumberSplit[2] + "+" + convUserNumberSplit[3] + "=" + sumNumbers);