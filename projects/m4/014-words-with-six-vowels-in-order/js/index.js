const fs = require('fs');

function findWordsWithVowels(data) {
    const words = data.split('\n');
    const vowelPattern = /a.*e.*i.*o.*u.*y/i;

    const matchingWords = words.filter(word => vowelPattern.test(word));

    if (matchingWords.length > 0) {
        console.log('Parole trovate con tutte le vocali in ordine:');
        matchingWords.forEach(word => console.log(word));
    } else {
        console.log('Nessuna parola trovata con tutte le vocali in ordine.');
    }
}

if (process.argv.length !== 3) {
    console.log("Uso: node findVowels.js <nomefile>");
    process.exit(1);
}

const filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error(`Errore nella lettura del file: ${err.message}`);
        process.exit(1);
    }

    findWordsWithVowels(data);
});
