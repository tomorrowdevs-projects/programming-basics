const { decimalToBinary } = require('./function');
const prompt = require('prompt-sync')();

function main() {
  try {
    const decimalNumber = parseInt(prompt("Inserisci un numero decimale non negativo: "));
    
    if (isNaN(decimalNumber) || decimalNumber < 0) {
      console.log("Errore: Inserire un numero decimale non negativo valido.");
    } else {
      const binaryNumber = decimalToBinary(decimalNumber);
      console.log(`Il numero binario corrispondente a ${decimalNumber} è: ${binaryNumber}`);
    }
  } catch (error) {
    console.log(error.message);
  }
}

main();