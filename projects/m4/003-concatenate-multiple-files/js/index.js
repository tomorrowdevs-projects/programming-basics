const prompt = require('prompt-sync')({sigint: true});
const fs = require('fs/promises');

function getConcatenateFiles(file1, file2) {
    fs.readFile(file1, "utf-8")

    .then( text1 => {
        fs.readFile(file2, "utf-8")

        .then( text2 => {
            console.log( [text1, text2].join("\n") );
        })
        .catch( () => console.log(`Failed to read ${file2}`));
        
    })
    .catch( () => console.log(`Failed to read ${file1}`));
}

const file1 = prompt("Enter first file name: ");
const file2 = prompt("Enter second file name: ");

getConcatenateFiles(file1, file2);