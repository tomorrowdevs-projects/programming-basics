const prompt = require('prompt-sync')();
const originalPhrase = prompt("Inserisci una frase: ");

const dictionary = {
  'A': '.-',
  'B': '-...',
  'C': '-.-.',
  'D': '-..',
  'E': '.',
  'F': '..-.',
  'G': '--.',
  'H': '....',
  'I': '..',
  'J': '.---',
  'K': '-.-',
  'L': '.-..',
  'M': '--',
  'N': '-.',
  'O': '---',
  'P': '.--.',
  'Q': '--.-',
  'R': '.-.',
  'S': '...',
  'T': '-',
  'U': '..-',
  'V': '...-',
  'W': '.--',
  'X': '-..-',
  'Y': '-.--',
  'Z': '--..',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----',
  'Á': '.--.-',
  'Ä': '.-.-',
  'É': '..-..',
  'Ñ': '--.--',
  'Ö': '---.',
  'Ü': '..--',
};

const letters = originalPhrase.toUpperCase().split("");

const translatePhrase = (letters) => {
  let morseCode = '';
  for (let letter of letters) {
    if (dictionary[letter]) {
      morseCode += dictionary[letter] + ' ';
    }
  }
  return morseCode.trim();
};

console.log(translatePhrase(letters));
