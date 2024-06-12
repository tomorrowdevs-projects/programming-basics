const prompt = require('prompt-sync')();
let startingNumber = parseInt(prompt('Scrivi un numero a quattro cifre: '), 10);

while (isNaN(startingNumber) || startingNumber < 1000 || startingNumber > 9999) {
  console.log('Il numero inserito non è valido. Inserisci un numero a quattro cifre.');
  startingNumber = parseInt(prompt('Scrivi un numero a quattro cifre: '), 10);
}

const numbers = startingNumber.toString();

if (numbers.length === 4) {
  const firstN = numbers.charAt(0);
  console.log(firstN);
  const secondN = numbers.charAt(1);
  console.log(secondN);
  const thirdN = numbers.charAt(2);
  console.log(thirdN);
  const fourthN = numbers.charAt(3);
  console.log(fourthN);
  const num1 = parseInt(firstN);
  const num2 = parseInt(secondN);
  const num3 = parseInt(thirdN);
  const num4 = parseInt(fourthN);
  const totale = num1 + num2 + num3 + num4;
  console.log(totale);
}

