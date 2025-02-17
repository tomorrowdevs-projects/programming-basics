const readline = require('readline');
const fs = require('fs');
const path = require('path');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Inserisci l\'anno iniziale: ', (annoIniziale) => {
    rl.question('Inserisci l\'anno finale: ', (annoFinale) => {

        let nomiRagazziPopolari = {};
        let nomiRagazzePopolari = {};

        fs.readdirSync('./data').forEach(file => {
            let year = file.slice(3, 7);
            
            if (year >= annoIniziale && year <= annoFinale) {
                let fileRl = readline.createInterface({
                    input: fs.createReadStream(path.join('./data', file)),
                    terminal: false
                });

                let nomiMaschili = [];
                let nomiFemminili = [];

                fileRl.on('line', (line) => {
                    let [nome, genere, conteggio] = line.split(',');
                    conteggio = parseInt(conteggio);

                    if (genere === 'M') {
                        nomiMaschili.push({ name: nome, count: conteggio });
                    } else if (genere === 'F') {
                        nomiFemminili.push({ name: nome, count: conteggio });
                    }
                });

                fileRl.on('close', () => {
                    for (let nomeObj of nomiMaschili) {
                        if (nomiRagazziPopolari[nomeObj.name]) {
                            nomiRagazziPopolari[nomeObj.name] += nomeObj.count;
                        } else { 
                            nomiRagazziPopolari[nomeObj.name] = nomeObj.count;
                        }
                    }

                    for (let nomeObj of nomiFemminili) {
                        if (nomiRagazzePopolari[nomeObj.name]) {
                            nomiRagazzePopolari[nomeObj.name] += nomeObj.count;
                        } else { 
                            nomiRagazzePopolari[nomeObj.name] = nomeObj.count;
                        }
                    }
                });
            }
        });

        process.on('exit', () => {
            let nomiRagazzi = Object.entries(nomiRagazziPopolari);
            let nomiRagazze = Object.entries(nomiRagazzePopolari);

            nomiRagazzi.sort((a, b) => b[1] - a[1]);
            nomiRagazze.sort((a, b) => b[1] - a[1]);

            console.log("Nome maschile più popolare tra il " + annoIniziale + " e il " + annoFinale + ": " + nomiRagazzi[0][0]);
            console.log("Nome femminile più popolare tra il " + annoIniziale + " e il " + annoFinale + ": " + nomiRagazze[0][0]);
        });

        rl.close();
    });
});
