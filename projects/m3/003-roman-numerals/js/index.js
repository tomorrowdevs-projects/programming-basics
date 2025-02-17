const functions = require('./functions');
const prompt = require('prompt-sync')();

function main() {
  try {
    const romanNumeral = prompt("Inserisci un numero romano: ");
    const integerValue = functions.romanToInteger(romanNumeral.toUpperCase());
    console.log(`Il numero romano ${romanNumeral} corrisponde al numero intero ${integerValue}.`);
  } catch (error) {
    console.log(error.message);
  }
}

main();