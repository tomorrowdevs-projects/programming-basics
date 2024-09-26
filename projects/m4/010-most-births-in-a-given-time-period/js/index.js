// Import custom utils
const customUtils = require('./custom-utils-class');

// Check input existence
const inputExists = customUtils.checkInputExistance({
    2: 'Missing starting year.',
    3: 'Missing ending year.',
});

if(!inputExists) return;

// Global vars
const dataDir       = '../../009-names-that-reachned-number-one/babynames/';
const startingYear  = parseInt(process.argv[2]);
const endingYear    = parseInt(process.argv[3]);

// Run the main function
main();


/* FUNCTIONS */
/**
 * Main Function
 */
async function main() {
    const fileList = await customUtils.getFilesList(dataDir, ['.txt']);

    // Check years existence in data files
    try {
        for(let sy = startingYear; sy <= endingYear; sy++) {
            if(!fileList.files.includes(`yob${sy}.txt`)) throw `Missing ${sy} year in dataset`;
        }
    } catch(err) {
        return err;
    }

    // Generate file list for the requested years
    const requiredFiles = Array.from({ length: endingYear - startingYear + 1 }, (_, i) => `${dataDir}yob${startingYear + i}.txt`);

    // Calc all births for each name for each requested year
    const totalBabynames = await customUtils.sumBabynamesForEachYear(requiredFiles);

    // Prints the most common names for each gender
    customUtils.mostCommonNamesPrinter(totalBabynames).forEach( resultString => console.log(resultString) );
}