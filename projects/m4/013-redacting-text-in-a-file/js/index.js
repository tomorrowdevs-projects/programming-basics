const fs = require('fs');

function redactText(originalText, sensitiveWords) {
    let redactedText = originalText;

    for (let word of sensitiveWords) {
        const regex = new RegExp(word, 'gi');
        redactedText = redactedText.replace(regex, '*'.repeat(word.length));
    }

    return redactedText;
}

if (process.argv.length !== 5) {
    console.log("Usage: node redact.js <originalFile> <sensitiveWordsFile> <redactedFile>");
    process.exit(1);
}

const originalFile = process.argv[2];
const sensitiveWordsFile = process.argv[3];
const redactedFile = process.argv[4];

fs.readFile(originalFile, 'utf8', (err, originalText) => {
    if (err) {
        console.error(`Errore nella lettura del file originale: ${err.message}`);
        process.exit(1);
    }

    fs.readFile(sensitiveWordsFile, 'utf8', (err, wordsText) => {
        if (err) {
            console.error(`Errore nella lettura del file delle parole sensibili: ${err.message}`);
            process.exit(1);
        }

        const sensitiveWords = wordsText.split('\n').filter(word => word.trim().length > 0);

        const redacted = redactText(originalText, sensitiveWords);

        fs.writeFile(redactedFile, redacted, (err) => {
            if (err) {
                console.error(`Errore nella scrittura del file redatto: ${err.message}`);
                process.exit(1);
            }
            console.log(`File redatto salvato come ${redactedFile}`);
        });
    });
});
