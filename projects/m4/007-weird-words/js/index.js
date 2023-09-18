const fs = require('fs');
const readline = require('readline');

const nomeFile = process.argv[2];

if (!nomeFile) {
    console.error('Per favore, inserisci il nome del file come argomento da riga di comando.');
    process.exit(1);
}

async function analizzaFile(nomeFile) {
    let paroleCorrette = new Set();
    let paroleErrate = new Set();

    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: fs.createReadStream(nomeFile),
            terminal: false
        });

        rl.on('line', (linea) => {
            let parole = linea.trim().split(/\s+/);
            parole.forEach((parola) => {
                if (/ei/.test(parola) && !/cei/.test(parola) || /ie/.test(parola) && /cie/.test(parola)) {
                    paroleErrate.add(parola);
                } else if (/ei/.test(parola) || /ie/.test(parola)) {
                    paroleCorrette.add(parola);
                }
            });
        });

        rl.on('close', () => {
            resolve({ paroleCorrette, paroleErrate });
        });

        rl.on('error', (err) => {
            reject(err);
        });
    });
}

async function main() {
    try {
        const { paroleCorrette, paroleErrate } = await analizzaFile(nomeFile);

        console.log(`Parole corrette secondo la regola "I prima di E eccetto dopo C":\n${[...paroleCorrette].join(', ')}\n`);
        console.log(`Parole errate secondo la regola "I prima di E eccetto dopo C":\n${[...paroleErrate].join(', ')}\n`);
        console.log(`Numero totale di parole corrette: ${paroleCorrette.size}`);
        console.log(`Numero totale di parole errate: ${paroleErrate.size}`);
    } catch (errore) {
        console.error(`Si è verificato un errore durante la lettura del file: ${errore.message}`);
    }
}

main();
