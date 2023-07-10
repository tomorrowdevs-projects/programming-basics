const prompt = require("prompt-sync")();
let wordsArray = [];

function onlyWords(inputString) {
  if (inputString && typeof inputString === "string") {
    const regex = /[^\p{L}'\s]+/gu; // permette parole accentate e apostrofi, ma rimuove altri segni
    const cleanedString = inputString.toLowerCase().replace(regex, '');
    return cleanedString.split(" ");
  } else {
    return [];
  }
}

function verifyPalindromes(wordsArray) {
if (!wordsArray || wordsArray.length < 2) {
  return true;
}

let start = 0;
let end = wordsArray.length -1;

while (start < end) {
  if (wordsArray[start] !== wordsArray[end]){
    return false
  }
  start++
  end--
}

return true;
}

const newString = prompt("Inserisci una stringa di più parole");
if (newString) {
  wordsArray = onlyWords(newString);
} else {
  console.log("Stringa di input non valida");
}

if (verifyPalindromes(wordsArray) == true) {
  console.log("La frase inserita è palindroma");
} else {
  console.log("La frase che hai inserito non è palindroma")
}









