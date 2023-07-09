const prompt= require("prompt-sync")();
let numberArray = [];

function AddNumber() {
  let valueChoice = -1;

  while (valueChoice !== 0) {
      valueChoice = parseInt(prompt("Inserisci un numero intero. Inserisci 0 per concludere: "), 10);

      if (!isNaN(valueChoice) && valueChoice !== 0) {
          numberArray.push(valueChoice);
      }
  }
}
AddNumber();

numberArray.sort(function(a, b) {
  return a - b;
});

for (let x=0; x < numberArray.length; x++) {
  let myNumber= numberArray[x];
  console.log(myNumber);
}