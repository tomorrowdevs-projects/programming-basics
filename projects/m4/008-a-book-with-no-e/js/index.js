const prompt = require('prompt-sync')();

const arr = ['alessandro', 'ciao', 'come', 'stai', 'stai'];
const set = [...arr].map((item) => [...new Set(item)].join('')); // Rimuove duplicati senza spazi

const alphabetLetters = [...'abcdefghijklmnopqrstuvwxyz']; // Lettere dell'alfabeto
let count = {}; // Oggetto per memorizzare il conteggio delle lettere

alphabetLetters.forEach((letter) => {
    count[letter] = 0; // Inizializza il contatore a 0 per ogni lettera
});

set.forEach((word) => {
    word.split('').forEach((char) => {
        if (alphabetLetters.includes(char)) {
            count[char] = (count[char] || 0) + 1; // Incrementa il conteggio della lettera
        }
    });
});

console.log(count);
