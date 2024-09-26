// Import Modules
const { pipeline } = require('stream/promises');
const fs = require('fs');

// Input files args
const filesArray = process.argv.slice(2);

// Run concatenate function
concat(filesArray).catch(console.error);


/* FUNCTIONS */
async function stream(fileInputName, fileOutputName = 'output.txt') {
  await pipeline(
    fs.createReadStream(fileInputName),
    fs.createWriteStream(fileOutputName, {
        flags: 'a',
    }),
  );
  console.log(`Merging ${fileInputName} into ${fileOutputName}`);
}

function* filesInput(files) {
    for(let i = 0; i < files.length; i++) {
        yield files[i];
    }
}

async function concat(files) {
    let i = 0;
    for (const file of filesInput(files)) {
        await stream(file);
        i++;
    }
    if(i === 0) return Promise.reject('Missing command arguments: no input files!');
}