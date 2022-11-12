const prompt = require("prompt-sync")();

let humanYears = prompt("Insert human years to convert in dog years: ");
let dogYear;

if (humanYears > 0 && humanYears <= 2) {
    dogYear = humanYears * 10.5;
    console.log(`Dog year: ${dogYear}`);
} else if (humanYears > 2) {
    dogYear = (2 * 10.5) + ((humanYears - 2) * 4);
    console.log(`Dog year: ${dogYear}`);
} else if (humanYears <= 0) {
    console.log(`Insert a valid number`)
}