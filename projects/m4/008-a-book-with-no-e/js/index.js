const { readFile } = require('fs/promises');
const filePath = './example1.txt';

const getLettersWords = (data) => {
    const arr = data.toLowerCase().split(/\s+/);
    const deleteDuplicates = [...arr].map((item) =>
        [...new Set(item)].join('')
    );

    console.log(deleteDuplicates);
    const alphabetLetters = [...'abcdefghijklmnopqrstuvwxyz']; // Lettere dell'alfabeto
    let count = {}; // Oggetto per memorizzare il conteggio delle lettere

    alphabetLetters.forEach((letter) => {
        count[letter] = 0; // Inizializza il contatore a 0 per ogni lettera
    });

    // Conta le occorrenze di ciascuna lettera
    deleteDuplicates.forEach((word) => {
        word.split('').forEach((char) => {
            if (alphabetLetters.includes(char)) {
                count[char] = (count[char] || 0) + 1; // Incrementa il conteggio della lettera
            }
        });
    });

    // Calcola la somma totale delle lettere contate
    const totalSumLetters = Object.values(count).reduce(
        (sum, num) => sum + num,
        0
    );

    // Calcola la percentuale di ciascuna lettera
    let proportionEachLetter = {};
    for (let [letter, num] of Object.entries(count)) {
        proportionEachLetter[letter] =
            ((num / totalSumLetters) * 100).toFixed(2) + '%';
    }

    // Restituisce sia il conteggio che le percentuali
    return { count, proportionEachLetter };
};

readFile(filePath, 'utf8')
    .then((data) => {
        const { count, proportionEachLetter } = getLettersWords(data);
        console.log(count);
        console.log(proportionEachLetter);
    })
    .catch((err) => {
        console.error('Errore nella lettura del file:', err); // Gestisce eventuali errori
    });
