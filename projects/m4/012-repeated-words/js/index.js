// Import custom utils
const customUtils = require('./custom-utils-class');

// Check input existence
const inputExists = customUtils.checkInputExistance({
    2: 'Missing input file path.',
});

if(!inputExists) return;

// Modules
const readline = require('readline');
const fs = require('fs');

// Global vars
const filePath = process.argv[2];

// Run the script
main();


/* FUNCTIONS */
async function main() {
    const repeatedWordsList = await parseFile(filePath);
    repeatedWordsPrinter(repeatedWordsList);
}

function parseFile(filePath) {
    return new Promise( (resolve, reject) => {
        const output = {};
        let prevRow = [];
        let row = 1;

        const stream = readline.createInterface({
            input: fs.createReadStream(filePath),
        });

        stream.on('line', line => {
            // Format current line as array of word
            const a = line.toLowerCase().split(' ').map( w => w.replace(/[^a-z|0-9]/gi, '')).filter( e => e != '');

            // Check repeated words
            const repeatedWords = [];
            for(let i = 0; i < a.length - 1; i++) {
                // Check the first word with the last word of the previous row
                const repeatedBetweenLines = i == 0 && prevRow.length > 0 && prevRow[prevRow.length - 1] === a[i];

                if(repeatedBetweenLines) {
                    output[row - 1].push(a[i]);
                }

                // Check repeated words in line
                if(a[i] === a[i + 1] && !repeatedWords.includes(a[i]) || repeatedBetweenLines) {
                    repeatedWords.push(a[i]);
                }
            }

            // If repeated words are found, add them to the output obj
            if(repeatedWords.length > 0) output[row] = repeatedWords;

            // Save current row as prevRow for next iteration
            prevRow = a;

            // Increase row counter
            row++;
        });

        stream.on('close', () => resolve(output));
        stream.on('error', err => reject(err));
    });
}

function repeatedWordsPrinter(repeatedWords) {
    for(const row in repeatedWords) {
        if(row == '1') console.log('Repeated words:');
        if(repeatedWords[row].length > 0) console.log(`Line ${row}: ${repeatedWords[row].join(', ')}`);
    }
}