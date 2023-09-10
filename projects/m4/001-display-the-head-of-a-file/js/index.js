const fs = require('fs');

const prompt = require('prompt-sync')();
const command = prompt("Insert your command line: ");
const fileName = prompt("Insert the name of the file you want to open: ");
    
fs.promises.readFile(fileName, 'utf8')
.then((data) => {
    if (command == 'head') {
        console.log(data.split('\n').slice(0, 10).join(`\n`));
    } else {
        console.error("The selected command line doesn't exist.")
    };
})
.catch((error) => console.log(`There is no file name ${fileName}!`));




