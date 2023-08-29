const fs = require('fs');
const readline = require('readline');
const path = require('path');

let nomiRagazziUnici = new Set();
let nomiRagazzeUnici = new Set();

let files = fs.readdirSync('./data');

let filesRead = 0;

files.forEach(file => {
    let rl = readline.createInterface({
        input: fs.createReadStream(path.join('./data', file)),
        terminal: false
    });

    rl.on('line', (line) => {
        let [nome, genere] = line.split(',');

        if (genere === 'M') {
            nomiRagazziUnici.add(nome);
        } else if (genere === 'F') {
            nomiRagazzeUnici.add(nome);
        }
    });

    rl.on('close', () => {
        filesRead++;

        if (filesRead === files.length) {
            let sortedBoysNames = [...nomiRagazziUnici].sort();
            let sortedGirlsNames = [...nomiRagazzeUnici].sort();

            console.log("Nomi unici per i ragazzi:");
            console.log(sortedBoysNames.join(','));

            console.log("\n"); 

            console.log("Nomi unici per le ragazze:");
            console.log(sortedGirlsNames.join(','));
        }
    });
});
