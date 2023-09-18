const fs = require('fs');
const readline = require('readline');
const path = require('path');

let nomiRagazziPopolari = {};
let nomiRagazzePopolari = {};

function processFile(file) {
    return new Promise((resolve) => {
        let rl = readline.createInterface({
            input: fs.createReadStream(path.join('./data', file)),
            terminal: false
        });

        let nomiMaschili = [];
        let nomiFemminili = [];
        let year = file.slice(3, 7);

        rl.on('line', (line) => {
            let [nome, genere, conteggio] = line.split(',');
            conteggio = parseInt(conteggio);

            if (genere === 'M') {
                nomiMaschili.push({ name: nome, count: conteggio });
            } else if (genere === 'F') {
                nomiFemminili.push({ name: nome, count: conteggio });
            }
        });

        rl.on('close', () => {
            nomiMaschili.sort((a, b) => b.count - a.count);
            if (nomiMaschili.length > 10) {
                nomiMaschili = nomiMaschili.slice(0, 10);
            }
            nomiRagazziPopolari[year] = nomiMaschili.map(({ name }) => name);

            nomiFemminili.sort((a, b) => b.count - a.count);
            if (nomiFemminili.length > 10) {
                nomiFemminili = nomiFemminili.slice(0, 10);
            }
            nomiRagazzePopolari[year] = nomiFemminili.map(({ name }) => name);

            resolve();
        });
    });
}

Promise.all(fs.readdirSync('./data').map(processFile)).then(() => {
    console.log("Nomi più popolari per i ragazzi:");
    for (let year in nomiRagazziPopolari) {
        console.log(`${year}: ${nomiRagazziPopolari[year].join(', ')}`);
    }
    console.log("Nomi più popolari per le ragazze:");
    for (let year in nomiRagazzePopolari) {
        console.log(`${year}: ${nomiRagazzePopolari[year].join(', ')}`);
    }
});
