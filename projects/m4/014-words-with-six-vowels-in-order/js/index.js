const fs = require('fs').promises;

function findWordsWithVowels(data) {
    const words = data.split('\n');
    const vowelPattern = /a.*e.*i.*o.*u.*y/i;

    const matchingWords = words.filter(word => vowelPattern.test(word));

    if (matchingWords.length > 0) {
        return matchingWords;
    } else {
        return [];
    }
}

const filenames = process.argv.slice(2);

if (filenames.length === 0) {
    console.error('Per favore, fornisci almeno un nome di file.');
    process.exit(1);
}

const fileReadPromises = filenames.map(filename => fs.readFile(filename, 'utf8'));

Promise.all(fileReadPromises)
    .then(filesData => {
        const allMatchingWords = filesData.map(data => findWordsWithVowels(data)).flat();

        if (allMatchingWords.length > 0) {
            console.log('Parole trovate con tutte le vocali in ordine:');
            allMatchingWords.forEach(word => console.log(word));
        } else {
            console.log('Nessuna parola trovata con tutte le vocali in ordine.');
        }
    })
    .catch(err => {
        console.error(`Errore nella lettura del file: ${err.message}`);
    });
