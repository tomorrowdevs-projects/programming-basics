// Import custom utils
const customUtils = require('./custom-utils-class');

// Check input existence
const inputExists = customUtils.checkInputExistance({
    2: 'Missing original text file path.',
    3: 'Missing sensitive words file path.',
    4: 'Missing redacted file path.',
});

if(!inputExists) return;

// Modules
const fs = require('fs');

// Global vars
const inputFile = process.argv[2];
const redactedWordsListFile = process.argv[3];
const outputFile = process.argv[4];

// Script logic
const contentToRedact = fs.readFileSync(inputFile, {encoding:'utf8', flag:'r'});
const redactedWords = fs.readFileSync(redactedWordsListFile, {encoding:'utf8', flag:'r'}).replace(/\r\n/g, ' ').split(' ');

fs.writeFile(outputFile, customUtils.redacter(contentToRedact, redactedWords), err => {
    if(err) console.log(err)
});
console.log(`Generated redacted file in ${outputFile}.`);