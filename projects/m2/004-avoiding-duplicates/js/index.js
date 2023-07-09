const prompt = require("prompt-sync")();
let wordsArray = [];

function addWords() {
  let valueChoice = "valore";

  while (valueChoice !== "") {
    valueChoice = prompt("Inserisci una parola. Inserisci una riga vuota per concludere: ");

    if (valueChoice !== "") {
      wordsArray.push(valueChoice);
    }
  }

  return avoidingDuplicates(wordsArray);
}

function avoidingDuplicates(wordsArray) {
  let newWordsArray = [];
  wordsArray.forEach(element => {
      if (!newWordsArray.includes(element)) {
          newWordsArray.push(element);
      }
  });
  return newWordsArray;
}

let newWordsArray = addWords();

for (let x = 0; x < newWordsArray.length; x++) {
  let myWords = newWordsArray[x];
  console.log(myWords);
}