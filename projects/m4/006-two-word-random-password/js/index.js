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
const validWordList = [];

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
    // Reads the file with words list, save in script memory only words with at least three letters
    if(line.length >= 3) validWordList.push(line);
});

// Stream end event
stream.on('close', () => {
    console.log('Generated password: ', passwordGenerator(validWordList));
});


/** FUNCTIONS */

/**
 * Returns a password from a wordList, with length between minLenght and maxLength: each word from wordList is capitalized and concatenated
 * @param {array} wordList - Words to use for the generation process
 * @param {integer} [minLength = 8] - password min length
 * @param {integer} [maxLength = 10] - password max length
 * @param {integer} [nWord = 2] - words to concatenate
 * @returns {string} the generated password
 */
function passwordGenerator(wordList, minLength = 8, maxLength = 10, nWords = 2) {
    let password = '';

    while(password.length < minLength || password.length > maxLength) {
        password = '';
        for(const word of wordsSelector(wordList, nWords)) {
            password += word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
        }
    }

    return password;
}

/**
 * Returns a randomly generated word list array from an array word list input 
 * @param {array} wordList - input word list
 * @param {integer} [n = 2] number of requested words
 * @returns {array of strings} the words selected from the wordList input array
 */
function wordsSelector(wordList, n = 2) {
    const wordsSelectedIndexes = [];
    const wordsSelected = [];

    // Check wordList length is compatible with parameter n, otherwise n must be at least equals to wordList length
    n = wordList.length < n ? wordList.length : n;

    for(let i = 0; i < n; i++) {
        wordsSelectedIndexes.push(rand(0, wordList.length - 1, wordsSelectedIndexes));
    }

    wordsSelectedIndexes.forEach( index => wordsSelected.push(wordList[index]) );

    return wordsSelected;
}

/**
 * Returns a random integer
 * @param {integer} min - min value
 * @param {integer} max - max value
 * @param {array} [exceptions = null] - undesidered values
 * @returns {integer} random number
 */
function rand(min, max, exceptions = null) {
    let random;

    if(exceptions != null) {
        do {
            random = Math.floor(Math.random() * (max - min) + min);
        } while(exceptions.includes(random))
    } else {
        random = Math.floor(Math.random() * (max - min) + min);
    }

    return random;
}