const prompt = require('prompt-sync')();

let letter = prompt("Insert Letter: ");
let vowel = "aeiou";


if (vowel.split('').includes(letter) === true) {
    console.log(`The letter ${letter} is a vowel`);
} else if (letter === 'y') {
    console.log(`The letter ${letter} sometimes is a vowel and sometimes is a consonant`);
} else {
    console.log(`The letter ${letter} is a consonant`);
}