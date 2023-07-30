function compress(string) {
    if (string.length === 0) {
        return [];
    }
  
    let i = 0;
    while (i < string.length && string[i] === string[0]) {
        i++;
    }
  
    return [string[0], i].concat(compress(string.slice(i)));
}

const prompt = require('prompt-sync')();
let inputString = prompt("Inserisci una stringa: ");
console.log("Stringa compressa:", compress(inputString));