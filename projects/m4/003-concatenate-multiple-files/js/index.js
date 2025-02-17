const fs = require('fs');


function readFileFunction(filename) {
    return fs.promises.readFile(filename, "utf-8")
        .then(content => {
            console.log(`Read ${filename} successfully.`);
            return content;
        })
        .catch(error => {
            console.error(`Error reading ${filename}: ${error}`);
            throw error;
        });
}

const file1 = "file1.txt";
const file2 = "file2.txt";

Promise.all([readFileFunction(file1), readFileFunction(file2)])
    .then(results => {
        const concatenatedContent = results.join('\n');
        console.log(concatenatedContent);
    })
    .catch(error => {
        console.log(error);
    });