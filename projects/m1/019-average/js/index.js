// Get the value from the user
let numbersToCalc = prompt("Enter a value (write as last number '0' to stop):");
  // Error if first value is 0
  while(numbersToCalc.charAt(0) == 0){
    numbersToCalc = prompt("First character can't be '0', please enter a correct value (write as last number '0' to stop):");
  }
  // Error if last value is not 0
  while(numbersToCalc.charAt(numbersToCalc.length - 1) != 0){
    numbersToCalc = prompt("Last value must be '0', please enter a correct value (write as last number '0' to stop):");
  }

// Creating and populating array without the last "0" and convert it from strings to numbers
const listNumbersUser = numbersToCalc.substring(0,numbersToCalc.length - 1).split('').map(Number);

//Sum all values
let sumValues = parseInt(0);
for (let i = 0; i < listNumbersUser.length; i++) {
    sumValues += listNumbersUser[i];
}

//Evarage of values
let evarageNumber = sumValues / (numbersToCalc.length - 1);

alert("The evarage of your input is: " + evarageNumber);