const prompt = require('prompt-sync')();

function readValuesAndCalculateSum() {
  const value = prompt("Inserisci un valore (premi Invio per terminare): ");

  if (value === "") {
    return 0.0;
  }

  const numericValue = parseFloat(value);

  if (isNaN(numericValue)) {
    console.log("Valore non valido. Riprova.");
    return readValuesAndCalculateSum();
  }

  const sumOfRemainingValues = readValuesAndCalculateSum();

  return numericValue + sumOfRemainingValues;
}

const totalSum = readValuesAndCalculateSum();

console.log("Somma totale:", totalSum);