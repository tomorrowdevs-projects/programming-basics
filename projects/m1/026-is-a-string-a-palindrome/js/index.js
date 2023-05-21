let word = prompt("Inserisci una parola:");

word = word.toLowerCase();

word = word.replace(/ /g,'');

let reversedWord = '';

for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

if (word === reversedWord) {
    console.log("La parola inserita è un palindromo.");
} else {
    console.log("La parola inserita non è un palindromo.");
    }

