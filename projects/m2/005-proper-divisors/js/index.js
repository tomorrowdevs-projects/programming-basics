const prompt = require("prompt-sync")();
let valueChoice = 0;
let divisor = [];

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

function properDivisors(valueChoice) {
  for (let i = 1; i < valueChoice; i++) {
    if (valueChoice % i === 0) {
      divisor.push(i);
    }
  }
  return divisor;
}

valueChoice = addNumber();
divisor = properDivisors(valueChoice);

if (divisor.length === 0) {
  console.log("Hai inserito un numero senza divisori");
} else {
  const title = `I divisori del numero ${valueChoice} sono:`;
  console.log(title);

  for (let x = 0; x < divisor.length; x++) {
    let myDivisor = divisor[x];
    console.log(myDivisor);
  }
}