/*
|   C4   |    261.63      |
|   D4   |    293.66      |
|   E4   |    329.63      |  
|   F4   |    349.23      |  
|   G4   |    392.00      |  
|   A4   |    440.00      |  
|   B4   |    493.88      | 
*/

const prompt = require('prompt-sync')();

let note = prompt('Insert Note: ');
let letter = note[0];
let number = note[1];

function calculateFrequency(freq, oct) {
    let frequency = freq / 2 ** (4 - oct);
    frequency.toFixed(2);
    console.log(`The frequency is ${frequency} Hz`);
}


if (letter.toUpperCase() === 'C') {
    calculateFrequency(261.63, number)
} else if (letter.toUpperCase() === 'D') {
    calculateFrequency(293.66, number)
} else if (letter.toUpperCase() === 'E') {
    calculateFrequency(329.63, number)
} else if (letter.toUpperCase() === 'F') {
    calculateFrequency(349.23, number)
} else if (letter.toUpperCase() === 'G') {
    calculateFrequency(392.00, number)
} else if (letter.toUpperCase() === 'A') {
    calculateFrequency(440.00, number)
} else if (letter.toUpperCase() === 'B') {
    calculateFrequency(493.88, number)
}