const fs = require('fs');
const readline = require('readline');

const nomeFile = process.argv[2];

if (!nomeFile) {
    console.error('Per favore, inserisci il nome del file come argomento da riga di comando.');
    process.exit(1);
}

try {
    let parole = [];

    let rl = readline.createInterface({
        input: fs.createReadStream(nomeFile),
        output: process.stdout,
        terminal: false
    });

    rl.on('line', (linea) => {
        let parola = linea.trim();
        if (parola.length >= 3) {
            parole.push(parola);
        }
    });

        rl.on('close', () => {
            let password = '';
    
            do {
                let parola1 = parole[Math.floor(Math.random() * parole.length)];
                let parola2 = parole[Math.floor(Math.random() * parole.length)];
                
                password = parola1.charAt(0).toUpperCase() + parola1.slice(1) + parola2.charAt(0).toUpperCase() + parola2.slice(1);
            } while (password.length < 8 || password.length > 10);
            
            console.log(`La password generata è: ${password}`);
        });
    

} catch (errore) {
    console.error(`Si è verificato un errore durante la lettura del file: ${errore.message}`);
}
