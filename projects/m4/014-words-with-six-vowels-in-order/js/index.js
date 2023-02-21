// Import custom utils
const customUtils = require('./custom-utils-class');

// Check input existence
const inputExists = customUtils.checkInputExistance({
    2: 'Missing input file path.',
});

if(!inputExists) return;

// Global vars
const dir = '../';
const filePath = process.argv[2];

// Script
main();


/* FUNCTIONS */
async function main() {
    const regex = new RegExp('[^aeiouy]*a[^aeiouy]*e[^aeiouy]*i[^aeiouy]*o[^aeiouy]*u[^aeiouy]*y[^aeiouy]*', 'i');
    const wordsWithSixVowelsInOrder = await customUtils.wordSearcher(dir + filePath, regex);
    customUtils.arrayPrinter(wordsWithSixVowelsInOrder);
}