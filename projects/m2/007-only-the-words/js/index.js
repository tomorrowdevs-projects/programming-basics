const prompt = require("prompt-sync")();
let wordsArray = [];

function onlyWords(inputString) {
  if (inputString && typeof inputString === "string") {
    const regex = /[^\p{L}'\s]+/gu; 
    const cleanedString = inputString.replace(regex, '');
    return cleanedString.split(" ");
  } else {
    return [];
  }
}

const newString = prompt("Inserisci una stringa di più parole");
if (newString) {
  wordsArray = onlyWords(newString);
} else {
  console.log("Stringa di input non valida");
}
console.log(wordsArray);