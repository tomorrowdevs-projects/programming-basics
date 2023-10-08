let humanYears = 0;
let dogYears = 0;
const firstYear = 10.5;
const secondYear = 10.5;
const newYear = 4;

const prompt = require('prompt-sync')();
while (humanYears < 1) {
    humanYears = parseInt(prompt('Quanti anni umani ha il tuo cane?: '), 10);
    if (humanYears < 1) {
        console.log("Il numero deve essere maggiore o uguale a 1. Inserisci di nuovo.");
    }
}

if (humanYears === 1) {
    dogYears = firstYear;
    console.log("Il tuo cane ha " + dogYears + " anni canini");
} else if (humanYears === 2) {
    dogYears = firstYear + secondYear;
    console.log("Il tuo cane ha " + dogYears + " anni canini");
} else {
    dogYears = 2 * firstYear + (humanYears - 2) * newYear;
    console.log("Il tuo cane ha " + dogYears + " anni canini");
}


