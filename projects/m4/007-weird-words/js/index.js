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

// Valid words list from input file
const wordWithEIorIE = [];

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
    line.split(' ').forEach( word => {
        word = word.toLowerCase().replace(/[^a-z]/g, '');
        if(!wordWithEIorIE.includes(word) && /ei|ie/g.test(word)) wordWithEIorIE.push(word);
    });
});

// Stream end event
stream.on('close', () => {
    const wordExceptions = [];
    const wordFollowingRule = wordWithEIorIE.filter( w => {
        const bool = /ie|cei/g.test(w);
        if(!bool) wordExceptions.push(w);
        return bool;
    });
    const totalWords = wordFollowingRule.length + wordExceptions.length;

    console.table(wordFollowingRule);
    console.table(wordExceptions);
    console.log('Total words with IE or EI:', totalWords);
    console.log('Word following the “I before E except after C” rule:', wordFollowingRule.length, `(${Math.round((wordFollowingRule.length / totalWords) * 100)}%)` );
    console.log('Exception words:', wordExceptions.length, `(${Math.round((wordExceptions.length / totalWords) * 100)}%)` );
});