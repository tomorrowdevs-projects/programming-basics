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

// MaxLines param (default: 10)
const maxLines = !isNaN(parseInt(process.argv[3])) ? parseInt(process.argv[3]) : 10;

// Selected rows array
const rows = [];

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
    if(rows.length == maxLines) rows.shift();
    rows.push(line);
});

// Stream end event
stream.on('close', () => {
    rows.forEach( row => console.log(row) );
});