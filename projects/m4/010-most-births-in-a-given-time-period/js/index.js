// Check input existence
try {
    if(typeof process.argv[2] == 'undefined') throw 'Missing starting year.';
    if(typeof process.argv[3] == 'undefined') throw 'Missing ending year.';
} catch (err) {
    console.log(err);
    return;
}

// Modules
const readline = require('readline');
const fs = require('fs');
const fsp = require('node:fs/promises');
const path = require('path');

// Global vars
const dataDir = '../../009-names-that-reachned-number-one/babynames/';
const startingYear = process.argv[2];
const endingYear = process.argv[3];

// Run the main function
main();


/* FUNCTIONS */
async function main() {
    const fileList = await getFilesList(dataDir, ['.txt']);
    
    // Check years existence in data files
    try {
        for(let sy = startingYear; sy <= endingYear; sy++) {
            if(!fileList.files.includes(`yob${sy}.txt`)) throw `Missing ${sy} year in dataset`;
        }
    } catch(err) {
        return err;
    }

    // Generate file list for the requested years
    const requiredFiles = [];
    for(let sy = startingYear; sy <= endingYear; sy++) {
        requiredFiles.push(`${dataDir}yob${sy}.txt`);
    }

    // Calc all births for each name for each requested year
    const namesData = {};
    for(const file of generatorFileFromArray(requiredFiles)) {
        const namesYearData = await formatBabynamesDataFromFile(file);

        for(const gender in namesYearData) {

            if(!namesData.hasOwnProperty(gender)) namesData[gender] = {};

            for(const name in namesYearData[gender]) {

                if(typeof namesData[gender][name] === 'undefined') {
                    namesData[gender][name] = parseInt(namesYearData[gender][name]);
                } else {
                    namesData[gender][name] += parseInt(namesYearData[gender][name]);
                }

            }
        }
    }

    // Determine the boy’s name and the girl’s name given to the most children during the indicated years
    for(const gender in namesData) {
        let mostUsedName = [];
        let nBabies = 0;
        for(const name in namesData[gender]) {
            if(nBabies <= namesData[gender][name]) {
                mostUsedName.push(name);
                nBabies = namesData[gender][name];
            }
        }
        const plural = mostUsedName.length > 1;
        console.log(`Most common name${plural ? 's' : ''} between ${startingYear} and ${endingYear} for ${gender} ${plural ? 'are' : 'is'} ${mostUsedName.join(', ')} (${nBabies} babies).`);
    }

}

/**
 * @param {string} dir - The path of the directory
 * @param {array} [exceptions = null] - retrieve only files with the desired extensions
 * @returns {array} files - the list files in the directory
 */
async function getFilesList(dir, extensions = null) {
    let files = await fsp.readdir(dir);
    if(Array.isArray(extensions)) files = files.filter( f => extensions.includes(path.extname(f)) );
    return {
        dir,
        files
    };
}

function* generatorFileFromArray(files) {
    for(let i = 0; i < files.length; i++) {
        yield files[i];
    }
}

function formatBabynamesDataFromFile(file) {

    return new Promise( (resolve, reject) => {
        const output = {};
    
        const stream = readline.createInterface({
            input: fs.createReadStream(file),
        });
    
        stream.on('line', line => {
            const a = line.split(',');
    
            if(!output.hasOwnProperty(a[1])) output[a[1]] = {};
            output[a[1]][a[0]] = a[2];
        });
    
        stream.on('close', () => resolve(output));

        stream.on('error', err => reject(err));
    });

}