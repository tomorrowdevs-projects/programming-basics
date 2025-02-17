const prompt = require('prompt-sync')({sigint: true});

const fs = require("fs/promises");

function getFileTale(fileName) {
    const file = fs.readFile(fileName, "utf-8");
    file
    .then( text => {
        const lines = text.split("\r\n");

        if (lines.length < 10) console.log(lines);
        else {
            const fileTale = lines.slice(-10); 
            console.log(fileTale);
        }
    })
    .catch( () => console.log("Parsing failed"));
}

const fileName = prompt("Enter file name: ");

const cachedFiles = ["file1.txt"];

if (!cachedFiles.includes(fileName)) {
    console.log("Such file is not in memory");
} 
else {
    getFileTale(fileName);
}