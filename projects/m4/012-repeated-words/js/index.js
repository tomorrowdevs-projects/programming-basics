// Import custom utils
const customUtils = require('./custom-utils-class');

// Check input existence
const inputExists = customUtils.checkInputExistance({
    2: 'Missing input file path.',
});

if(!inputExists) return;


// Global vars
const filePath = process.argv[2];

// Run the script
main();


/* FUNCTIONS */
async function main() {
    // Parse the file and searches repeated words
    const repeatedWords = await customUtils.searchRepeatedWords(filePath);

    // Print the results
    Object.keys(repeatedWords).forEach( (nRow, i) => {
        if(i === 0) console.log('Repeated words:');
        console.log(`Line ${nRow}: ${repeatedWords[nRow].join(', ')}`);
    });
}