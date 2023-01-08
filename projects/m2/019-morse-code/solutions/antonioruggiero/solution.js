const morseTable = {
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

const copiedRegex = /^[A-Za-z0-9]/;
let wordFromUser = prompt("Insert word to translate in morse code");

while (!wordFromUser.match(copiedRegex)) {
    wordFromUser = prompt("Insert word to translate in morse code");
}

console.log(wordFromUser);







