// In a particular jurisdiction, taxi fares consist of a base fare of €4.00, plus €0.25 for every 140 meters travelled. Write a function that takes the distance travelled (in kilometers) as its only parameter and returns the total fare as its only result. Write a main program that demonstrates the function.

const prompt = require("prompt-sync")();

const km = parseFloat(prompt("How many kilometer: "));

function taxCalc() {
    const baseFare = 4.00;
    const addFare = 0.25;
    let calc = parseFloat((km / 140) * addFare + baseFare).toFixed(2);
    return "Total taxes are: " + calc + "€";
}

console.log(taxCalc());