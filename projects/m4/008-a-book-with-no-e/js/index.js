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

// Global object that contains the word counters for each letter of alphabet
const lettersCounter = {};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach( l => lettersCounter[l] = 0 );

// Total words counter
let wordsCounter = 0;

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
    // Counts for each word in input file how many times are used each letter
    line.toLowerCase().split(' ').forEach( w => {
        wordsCounter++;

        w.split('')
            .filter( char => /[a-z]/.test(char) )       // Takes only letters
            .filter( (c, i, s) => s.indexOf(c) === i )  // Takes only unique values
            .forEach( c => lettersCounter[c]++ );
    })
});

// Stream end event
stream.on('close', () => {
    // Calculate letters proportions
    const lettersProportions = {};
    Object.keys(lettersCounter).forEach( l => {
        lettersProportions[l] = Math.round((lettersCounter[l] / wordsCounter) * 10000) / 100;
    });

    // Find the least used letter
    let letterWithSmallestProportion = [];
    Object.entries(lettersProportions).forEach( keyValuePairs => {
        if(letterWithSmallestProportion[1] === keyValuePairs[1]) {
            letterWithSmallestProportion[0] += `, ${keyValuePairs[0]}`;
        }

        if(letterWithSmallestProportion.length == 0 || letterWithSmallestProportion[1] > keyValuePairs[1]) {
            letterWithSmallestProportion = keyValuePairs;
        }
    });

    // Prepare statement for least used letter
    const onlyOneSmallest = letterWithSmallestProportion[0].length === 1;
    const outputString = `The letter${onlyOneSmallest ? '' : 's'} used with the smallest proportion ${onlyOneSmallest ? 'is' : 'are'} ${letterWithSmallestProportion[0]} (${letterWithSmallestProportion[1]} %)`;

    // Prints results
    console.table(lettersProportions);
    console.log(outputString);
});