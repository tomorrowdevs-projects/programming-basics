const prompt = require("prompt-sync")();
const wordsSet = new Set();

function addWords() {
  let valueChoice = "valore";

  while (valueChoice !== "") {
    valueChoice = prompt("Inserisci una parola. Inserisci una riga vuota per concludere: ");

    if (valueChoice !== "") {
      wordsSet.add(valueChoice);
    }
  }

  return Array.from(wordsSet);
}

const newWordsArray = addWords();

for (let x = 0; x < newWordsArray.length; x++) {
  const myWords = newWordsArray[x];
  console.log(myWords);
}