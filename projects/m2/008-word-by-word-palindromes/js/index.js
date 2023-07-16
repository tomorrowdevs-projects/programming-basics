const prompt = require("prompt-sync")();
let wordsArray = [];

const onlyWords = inputString => {
  if (inputString && typeof inputString === "string") {
    const regex = /[^\p{L}\s]+|\d+/gu;
    const cleanedString = inputString.toLowerCase().replace(regex, ' ');
    return cleanedString.split(" ").filter(word => word.length > 0); 
  } else {
    return [];
  }
};

const verifyPalindromes = wordsArray => {
  if (!wordsArray || wordsArray.length <= 2) {
    return false;
  }

  let start = 0;
  let end = wordsArray.length - 1;

  while (start < end) {
    if (wordsArray[start] !== wordsArray[end]){
      return false;
    }
    start++;
    end--;
  }

  return true;
};

const newString = prompt("Inserisci una stringa di più parole");
if (newString) {
  wordsArray = onlyWords(newString);
} else {
  console.log("Stringa di input non valida");
}

if (verifyPalindromes(wordsArray) == true) {
  console.log("La frase inserita è palindroma");
} else {
  console.log("La frase che hai inserito non è palindroma");
}









