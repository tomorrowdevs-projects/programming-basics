const prompt = require('prompt-sync')();
const letter = prompt('Inserisci una lettera: ').toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];
let isVowel = false;

for (let i = 0; i < vowels.length; i++) {
    if (letter === vowels[i]) {
        isVowel = true;
        break;
    }
}

if (isVowel) {
    console.log("La lettera inserita è una vocale!");
} else if (letter === 'y') {
    console.log("La lettera y può essere una vocale o una consonante in base al contesto");
} else {
    console.log("La lettera inserita è una consonante");
}
