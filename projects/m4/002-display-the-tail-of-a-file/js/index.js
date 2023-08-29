const fs = require('fs');

const nomeFile = process.argv[2];

if (!nomeFile) {
    console.error('Per favore, inserisci il nome del file come argomento da riga di comando.');
    process.exit(1);
}

try {
    const contenuto = fs.readFileSync(nomeFile, 'utf-8');
    const righe = contenuto.split('\n');
    const ultime10Righe = righe.slice(Math.max(righe.length - 10, 0));
    console.log(ultime10Righe.join('\n'));
} catch (errore) {
    console.error(`Si è verificato un errore durante la lettura del file: ${errore.message}`);
}