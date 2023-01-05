// Variables declarations
const numberUser = parseInt(prompt("Enter an integer (2 or greater)"));
let numberUserInput = numberUser;
let factor = 2;
const listFactorNumer = [];
let messageOutput = "The prime factors of " + numberUser + " are:\n";

// Cycle to establish prime factors
while(factor <= numberUserInput){
  if(numberUserInput % factor == 0){
    listFactorNumer.push(factor);
    numberUserInput = Math.floor(numberUserInput / factor);
  } else {
    factor++;
  }
}

// Cycle to print output containing prime factors, each on a different line
for(let i=0; i<listFactorNumer.length; i++){
  messageOutput += listFactorNumer[i] + "\n";
}

// Output
if(listFactorNumer.length != 0){
  alert(messageOutput);
} else {
  alert("The number entered is less than 2 so the program is finished.")
}
