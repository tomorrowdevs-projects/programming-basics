const prompt = require("prompt-sync")();
let wordsArray = [];

const addWords = () => {
  let valueChoice = "valore";

  while (valueChoice !== "") {
    valueChoice = prompt("Inserisci una parola. Inserisci una riga vuota per concludere: ");

    if (valueChoice !== "") {
      wordsArray.push(valueChoice);
    }
  }

  return wordsArray;
}

const newWordsArray = addWords();

let cap = newWordsArray.shift();
newWordsArray.unshift(cap.charAt(0).toUpperCase() + cap.substring(1).toLowerCase());

const removed = newWordsArray.splice(newWordsArray.length -1, 1);

if (newWordsArray.length > 1) {
  const newItems = newWordsArray.join(', ');
  console.log(`${newItems}, e ${removed[0]}.`);
} else if (newWordsArray.length == 1) {
  console.log(`${newWordsArray[0]} e ${removed[0]}.`);
} else {
  console.log(`La lista è vuota.`);
}