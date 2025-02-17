const prompt = require('prompt-sync')();
const yearsCheck = parseInt(prompt('Inserisci un anno a quattro cifre: '), 10);

if (yearsCheck % 400 == 0 || yearsCheck % 4 == 0 && yearsCheck % 100 != 0) {
    console.log("L\'anno indicato è bisestile");
} else {
    console.log("L\'anno indicato non è bisestile");
}