/*
LOGIC
Create an object that stores the Morse Alphabet
Create a prompt function that gets from the user the sentence that needs to be translated.
The endered sentence should be converted to uppercase and then split into an array. 

Loop through the array with map, and convert each letter to Morse. 
Before the conversion, check if the letter is included in the Morse Alphabet. If not, ignore the letter.
*/

const morseAlphabet = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  Á: ".--.-",
  É: "..-..",
  Ö: "---.",
  Ä: ".-.-",
  Ñ: "--.--",
  Ü: "..--",
};

const enteredSentence = prompt(
  "Enter a sentence to translate it to Morse Code."
)
  .toUpperCase()
  .split("");

const translatedSentence = enteredSentence
  .map((letter) => {
    if (Object.keys(morseAlphabet).includes(letter)) {
      return morseAlphabet[letter];
    }
  })
  .join(" ");

console.log(translatedSentence);
