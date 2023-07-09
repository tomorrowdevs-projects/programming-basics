const prompt = require("prompt-sync")();
let numberArray = [];
let oldNumberArray = [];

function AddNumber() {
  let valueChoice = -1;

  while (valueChoice !== 0) {
    valueChoice = parseFloat(prompt("Inserisci un numero intero. Inserisci 0 per concludere: "));

    if (!isNaN(valueChoice) && Number.isInteger(valueChoice) && valueChoice !== 0) {
      numberArray.push(valueChoice);
    } else if (valueChoice !== 0) {
      console.log("Per favore, inserisci solo numeri interi.");
    }
  }

  if (numberArray.length < 4) {
    console.log("Non hai inserito valori sufficienti");
    process.exit();
  }

  oldNumberArray = [...numberArray];
  removeOutliers();
}

function removeOutliers() {
  if (numberArray.length >= 5) {
    numberArray.sort(function(a, b) {
      return a - b;
    });
    numberArray = numberArray.slice(2);
    numberArray = numberArray.slice(0, numberArray.length - 2);
  }
  return numberArray;
}

AddNumber();
const secondValue = "Valori modificati";
console.log(secondValue);

for (let x = 0; x < numberArray.length; x++) {
  let myNumber = numberArray[x];
  console.log(myNumber);
}

const firstValue = "Valori precedenti";
console.log(firstValue);

for (let x = 0; x < oldNumberArray.length; x++) {
  let myOldNumber = oldNumberArray[x];
  console.log(myOldNumber);
}