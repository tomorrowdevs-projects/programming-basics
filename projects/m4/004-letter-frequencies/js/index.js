// Missing args error (no file path)
if(process.argv.length <= 2) {
    console.log('Error: missing file path.');
    return;
}

// Modules
const readline = require('readline');
const fs = require('fs');

// File path from args
const filePath = process.argv[2];

// Lines counter
const letterFrequencies = {};

// Create readline stream
const stream = readline.createInterface({
    input: fs.createReadStream(filePath),
});

// Stream error event
stream.on('error', () => {
    console.log('Error: invalid file path.');
});

// Stream eventEmitter
stream.on('line', line => {
    line.toLowerCase().split('').forEach( char => {
        if(/[a-z]/g.test(char)) {
            letterFrequencies[char] = typeof letterFrequencies[char] == 'undefined' ? 1 : letterFrequencies[char] + 1;
        }
    });
});

// Stream end event
stream.on('close', () => {
    console.table(letterFrequencies);
});