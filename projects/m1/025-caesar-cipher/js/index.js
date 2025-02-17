const prompt = require("prompt-sync")();

const string = prompt("insert string: ");
const shift = prompt("insert number to shift: ");

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const newArray = [];

for (let i = 0; i < string.length; i++) {
    let index = alphabet.indexOf(string[i]);
    let newIndex = parseFloat(index) + parseFloat(shift);
    let moduleTest = newIndex % alphabet.length;
    let newString = alphabet[moduleTest];
    newArray.push(newString);
}

console.log(newArray.join(""));

