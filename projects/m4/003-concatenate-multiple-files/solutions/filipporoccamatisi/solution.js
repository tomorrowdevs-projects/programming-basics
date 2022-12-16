const prompt = require("prompt-sync")();
const fs = require("fs/promises");

// concatenates files recursively
const concatFiles = async function (fileNames) {
    try {
        //base case
        if (fileNames.length === 0) return;

        // read file 
        const result = await fs.readFile(fileNames[0]);
        const data = result.toString();
        console.log(data);

        //recall the function
        concatFiles(fileNames.slice(1));
    } catch (err) {
        // customize the error message
        if(err.code === "ENOENT") err.message = `file does not exist : ${fileNames[0]}`
        // display the error
        console.log('\n', err.message, '\n')
        //recall the function
        concatFiles(fileNames.slice(1));
    }
};

// reads filenames recursively
const readFileNames = function () {
    const fileNames = [];
    const enteredValue = prompt("Enter a file name or a blank line to abort the program:");

    // base case
    if (!enteredValue) {
        return fileNames;
    }
    
    fileNames.push(enteredValue);
    return fileNames.concat(readFileNames());
};


const fileNames = readFileNames();
concatFiles(fileNames)