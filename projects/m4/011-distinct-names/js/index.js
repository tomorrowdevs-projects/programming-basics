// Import custom utils
const customUtils = require('./custom-utils-class');

// Global vars
const dir = '../../009-names-that-reachned-number-one/babynames/';

// Run script
main();

/* FUNCTIONS */
async function main() {
    // Retrieve files list
    const fileList = await customUtils.getFilesList(dir, ['.txt']);

    // Parse each file
    let babynamesData = {};
    let fileCounter = 0;

    fileList.files.forEach( async file => {
        babynamesData = await customUtils.formatBabynamesDataFromFile(dir + file, babynamesData);
    
        // Show progress
        fileCounter++;
        console.log(`${customUtils.progress(fileCounter, fileList.files.length)} %`);
    });

    // Show final output
    console.log(babynamesData);
}