const prompt = require('prompt-sync')();
const originalPhrase = prompt("Inserisci una frase: ");

let extractLetters = phrase => phrase.toUpperCase().split("");

const letters = extractLetters(originalPhrase);

let dictionary = {};

const associateLetters = (letter, code) => {
  dictionary[letter] = code;
}

associateLetters('A', '.-');
associateLetters('B', '-...');
associateLetters('C', '-.-.');
associateLetters('D', '-..');
associateLetters('E', '.');
associateLetters('F', '..-.');
associateLetters('G', '--.');
associateLetters('H', '....');
associateLetters('I', '..');
associateLetters('J', '.---');
associateLetters('K', '-.-');
associateLetters('L', '.-..');
associateLetters('M', '--');
associateLetters('N', '-.');
associateLetters('O', '---');
associateLetters('P', '.--.');
associateLetters('Q', '--.-');
associateLetters('R', '.-.');
associateLetters('S', '...');
associateLetters('T', '-');
associateLetters('U', '..-');
associateLetters('V', '...-');
associateLetters('W', '.--');
associateLetters('X', '-..-');
associateLetters('Y', '-.--');
associateLetters('Z', '--..');
associateLetters('1', '.----');
associateLetters('2', '..---');
associateLetters('3', '...--');
associateLetters('4', '....-');
associateLetters('5', '.....');
associateLetters('6', '-....');
associateLetters('7', '--...');
associateLetters('8', '---..');
associateLetters('9', '----.');
associateLetters('0', '-----');
associateLetters('Á', '.--.-');
associateLetters('Ä', '.-.-');
associateLetters('É', '..-..');
associateLetters('Ñ', '--.--');
associateLetters('Ö', '---.');
associateLetters('Ü', '..--');

let translatePhrase = phrase => {
  let numbers = [];
  for (let letter of phrase) {
    if (dictionary[letter]) {
      numbers.push(dictionary[letter]);
    }
  }
  return numbers.join(" ");
}

console.log(translatePhrase(letters));
