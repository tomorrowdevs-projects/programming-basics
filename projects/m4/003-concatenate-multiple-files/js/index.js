const fs = require('fs');
const { get } = require('http');
const prompt = require('prompt-sync')();

const getCommands = () => {
    const commandLine = prompt(`Please, insert your command (cat) and the name of the files you'd like to merge (eg. cat text1.txt text2.txt): `);
    let userLines = commandLine.trim().split(/\s+/);

    if (!userLines.includes(`cat`)) return console.error(`Please, enter a valid command!`), process.exit()
    else  userLines.splice(userLines.indexOf(`cat`), 1);   

    return userLines;
};

const getFiles = (file) => {

    return new Promise ((resolve, reject) => {

        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) reject (err);
            resolve (data);
        })
    });
};

const getData = () => {
    getCommands().forEach(element => {
        
        getFiles(element)
        .then((element) => console.log(element))
        .catch((err) => console.log(`The file named ${element} does not exist!`));

    });
};

console.log(getData());