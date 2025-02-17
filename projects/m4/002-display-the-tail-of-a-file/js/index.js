const fs = require('fs');
const prompt = require('prompt-sync')();

const command  = prompt(`Enter your command (tail): `)
const fileName = prompt(`Please, enter the name of the file to open: `)

const getFile = (fileName) => {
    return new Promise  ((resolve, reject) => {

        fs.readFile (fileName, 'utf-8', function read(err, data) {
            resolve (data)
            reject (`Your file doesn't exist!`)
        });
    });
};

getFile(fileName)
.then((data) => {
    if (command == `tail`) console.log(data.split(`\n`).slice(- 10))
    else (console.error(`Please, enter a valid command line!`));
})
.catch((err) => console.log(err));