const prompt = require('prompt-sync')();
const originalPhrase = prompt("Inserisci una frase: ");

let extractLetters = phrase => phrase.toUpperCase().split("");

const letters = extractLetters(originalPhrase);

let dictionary = {};

const associateLetters = (letters, number) => {
  for (let i = 0; i < letters.length; i++) {
    let letter = letters.charAt(i).toUpperCase();
    dictionary[letter] = number.toString().repeat(i+1);
  }
}

associateLetters(',?!:', 1);
associateLetters('ABC', 2);
associateLetters('DEF', 3);
associateLetters('GHI', 4);
associateLetters('JKL', 5);
associateLetters('MNO', 6);
associateLetters('PQRS', 7);
associateLetters('TUV', 8);
associateLetters('WXYZ', 9);
associateLetters(' ', 0);

let translatePhrase = phrase => {
  let numbers = [];
  for (let letter of phrase) {
    if (dictionary[letter]) {
      numbers.push(dictionary[letter]);
    }
  }
  return numbers.join("");
}

console.log(translatePhrase(letters));
