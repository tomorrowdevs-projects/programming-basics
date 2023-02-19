// Import custom utils
const customUtils = require('./custom-utils-class');

// Modules
const readline = require('readline');
const fs = require('fs');

// Global vars
const dir = '../../009-names-that-reachned-number-one/babynames/';

// Run script
main();

/* FUNCTIONS */
async function main() {
    // Retrieve files list
    const fileList = await customUtils.getFilesList(dir, ['.txt']);

    let babynamesData = {};
    let fileCounter = 0;
    for(const file of customUtils.generatorFileFromArray(fileList.files)) {
        babynamesData = await formatBabynamesDataFromFile(dir + file, babynamesData);

        // Show progress
        fileCounter++;
        console.log(`${customUtils.progress(fileCounter, fileList.files.length)} %`);
    }

    // Show final output
    console.log(babynamesData);
}

function formatBabynamesDataFromFile(file, input) {

    return new Promise( (resolve, reject) => {
        const output = input;

        const stream = readline.createInterface({
            input: fs.createReadStream(file),
        });
    
        stream.on('line', line => {
            const a = line.split(',');
    
            if(!output.hasOwnProperty(a[1])) output[a[1]] = [];
            if(!output[a[1]].includes(a[0])) output[a[1]].push(a[0]);
        });
    
        stream.on('close', () => resolve(output));
        stream.on('error', err => reject(err));
    });

}