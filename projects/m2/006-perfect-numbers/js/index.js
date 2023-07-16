const prompt = require("prompt-sync")();
let valueChoice = 0;

function addNumber() {
  let condition = true;
  while (condition) {
    valueChoice = parseInt(prompt("Inserisci un numero intero "));

    if (!isNaN(valueChoice) && Number.isInteger(valueChoice) && valueChoice !== 0) {
      condition = false;
    } else {
      console.log("Per favore, inserisci solo numeri interi.");
    }
  }
  return valueChoice;
}

function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

function perfectNumber(valueChoice) {
  if (isPerfectNumber(valueChoice)) {
    console.log("Il tuo è un numero perfetto");
  } else {
    console.log("Il tuo non è un numero perfetto");
  }
}

function printTotalPerfectNumber(maxValue) {
  for (let x = 1; x <= maxValue; x++) {
    if (isPerfectNumber(x)) {
      console.log(x);
    }
  }
}

valueChoice = addNumber();
perfectNumber(valueChoice);
console.log("I numeri perfetti da 1 a 10000 sono: ");
printTotalPerfectNumber(10000);
