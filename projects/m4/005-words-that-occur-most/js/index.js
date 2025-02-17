const fs = require('fs');
const readline = require('readline');

const nomeFile = process.argv[2];

if (!nomeFile) {
    console.error('Per favore, inserisci il nome del file come argomento da riga di comando.');
    process.exit(1);
}

try {
    let frequenzeParole = {};

    let rl = readline.createInterface({
        input: fs.createReadStream(nomeFile),
        output: process.stdout,
        terminal: false
    });

    rl.on('line', (linea) => {
        let parole = linea.toLowerCase().split(' ');

        parole.forEach((parola) => {
            parola = parola.replace(/^[.,/#!$%^&*;:{}=\-_`~()]+|[.,/#!$%^&*;:{}=\-_`~()]+$/g, '');
            
            if (parola in frequenzeParole) {
                frequenzeParole[parola]++;
            } else {
                frequenzeParole[parola] = 1;
            }
        });
    });

    rl.on('close', () => {
        let parolePiuFrequenti = Object.keys(frequenzeParole).reduce((a, b) => frequenzeParole[a] > frequenzeParole[b] ? a : b);
        console.log(`Le parole più frequenti nel file sono: ${parolePiuFrequenti}`);
    });

} catch (errore) {
    console.error(`Si è verificato un errore durante la lettura del file: ${errore.message}`);
}
