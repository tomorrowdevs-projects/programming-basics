const fs = require('fs');
const readline = require('readline');

const nomeFile = process.argv[2];

if (!nomeFile) {
    console.error('Per favore, inserisci il nome del file come argomento da riga di comando.');
    process.exit(1);
}

try {
    let conteggioLettere = new Array(26).fill(0);
    let totalWords = 0;

    let rl = readline.createInterface({
        input: fs.createReadStream(nomeFile),
        output: process.stdout,
        terminal: false
    });

    rl.on('line', (linea) => {
        let parole = linea.toLowerCase().trim().split(/\s+/);
        totalWords += parole.length;

        parole.forEach((parola) => {
            let lettere = new Set(parola.split(''));
            lettere.forEach((lettera) => {
                if (lettera >= 'a' && lettera <= 'z') {
                    conteggioLettere[lettera.charCodeAt(0) - 'a'.charCodeAt(0)]++;
                }
            });
        });
    });

    rl.on('close', () => {
        let minLetter = 'a';
        let minCount = totalWords;

        for (let i = 0; i < 26; i++) {
            let letter = String.fromCharCode('a'.charCodeAt(0) + i);
            let percentuale = (conteggioLettere[i] / totalWords) * 100;
            
            if (conteggioLettere[i] < minCount) {
                minCount = conteggioLettere[i];
                minLetter = letter;
            }
            
            console.log(`La lettera ${letter} appare nel ${percentuale.toFixed(2)}% delle parole.`);
        }

        console.log(`La lettera che appare nel minor numero di parole è ${minLetter}.`);
    });

} catch (errore) {
    console.error(`Si è verificato un errore durante la lettura del file: ${errore.message}`);
}
