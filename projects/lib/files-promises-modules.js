const prompt = require("prompt-sync")({ sigint: true}) ;
// import {promises as fs} from 'fs';
const fs = require('fs').promises;
/**
 * Asks the user for the name of a file
 * @returns {string} the name of the file
 */
function askFileName(){
    const fileName = prompt('Please enter the name of a file, including the extension: ');

    if( /\s/.test(fileName.trim()) ){
        console.log('You have entered more than one file name');
        return false;
    }

    return fileName;
}
/**
 * Determines and displays the frequencies of all of the letters in a file
 * @param {string} content the content of a file
 * @returns {Object} list of letters and their frequencies
 */
function calculateLettersFrequencies(content){
    const lettersFrequencies = {};
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < content.length; i++) {
        let letter = content[i].toLowerCase();

        if(alphabet.includes(letter)){
            if( Object.keys(lettersFrequencies).includes(letter) ){
                lettersFrequencies[letter]++;
            } else {
                lettersFrequencies[letter] = 1;
            }
        }
    }

    return lettersFrequencies;
}
/**
 * Determines and displays the frequencies of all of the words in a file
 * @param {string} content the content of a file
 * @returns {Object} list of words and their frequencies
 */
function calculateWordsFrequencies(content){
    const wordsFrequencies = {};
    const lines = content.split(/\r?\n/);

    lines.forEach(line => {
        const words = line.split(/\W+/);

        words.forEach(word => {
            word = word.trim().toLowerCase();

            if(word !== ''){
                if( Object.keys(wordsFrequencies).includes(word) ){
                    wordsFrequencies[word]++;
                } else {
                    wordsFrequencies[word] = 1;
                }
            }
        })
    });

    return wordsFrequencies;
}
/**
 * Check if a name for a new file fits
 * @param {string} fileName the name to check
 * @returns 
 */
function checkNewFileName(fileName){
    if(fileName === ''){
        console.log('You entered an empty name for the file to create.');
        return false;
    } else if (! /^[a-zA-Z0-9]+\.[a-z]+$/.test(fileName)){
        console.log('You did not enter a valid name, use only numbers, letters plus the extension.');
        return false;
    }

    return fileName;
}
/**
 * Display a list of names and a contextual message
 * @param {Set} names the list to display
 * @param {string} text the name of the list items
 * @returns 
 */
function displayNames(names, text){
    if(names instanceof Set && names.size > 0){
        if(typeof text === 'string' && text !== '' ){
            console.log(text);
        }
    
        names.forEach(name => {
            console.log(name);
        });
    }

    return;
}
/**
 * Creates the list of all the words contained in a string
 * @param {string} content the content of a file
 * @returns {Array} list of words 
 */
function generateWords(content){
    if(typeof content === 'string' && content.trim() !== ''){
        return content.split(/\W+/)
    }

    return [];
}
/**
 * Identify names in a file
 * @param {string} fileName the file to use
 * @param {boolean} popular If true, only the popular names will be saved
 * @returns 
 */
async function getNames(fileName, popular = false){
    const popularNames = {};

    try {
        const response = await readTheFile(fileName);
        if(response){
            const lines = response.split(/\r?\n/);

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                
                if (/,/.test(line)){
                    const values = line.split(',');

                    if (values[1] === 'M' && ! popularNames.hasOwnProperty('boys')){
                        popularNames.boys = values[0];                    
                    } else if(values[1] === 'F' && ! popularNames.hasOwnProperty('girls')){
                        popularNames.girls = values[0];
                    }

                    if (popularNames.hasOwnProperty('boys') && popularNames.hasOwnProperty('girls') && popular){
                        break;
                    }
                }
            };

        }

    } catch (error) {
        console.log('The following error occurred: ', error.message);
    }

    return popularNames;
}
/**
 * Reads the contents of a text file
 * @param {string} filePath the path of the file to read
 * @returns the contents of the text file
 */
async function readTheFile(filePath){
    try {
        return await fs.readFile(filePath, 'utf-8');
    } catch (error) {
        if(error.errno === -4058){
            if(error.path === ''){
                console.log('A file name was not entered');
                return false;
            }
            console.log(`The file ${filePath} does not exist`);
            return false;
        }
    }
}
/**
 * Reads the contents of a text file
 * @param {string} filesPath the path of the file to read
 * @returns the content of the text file
 */
async function readDirectoryFiles(filesPath){
    try {
        return await fs.readdir(filesPath, 'utf-8');
    } catch (error) {
        if(error.errno === -4058){
            if(error.path === ''){
                console.log('A file name was not entered');
                return false;
            }
            console.log('The file does not exist');
            return false;
        }
    }
}
/**
 * Write the content in a text file
 * @param {string} filePath the path of the file to write
 * @param {string} content the content to write
 * @returns 
 */
function writeTheFile(filePath, content){
    try {
        return fs.writeFile(filePath, content);
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
module.exports = { // For CommonJS environment
// export { // For ES module environment. In addition for Visual Studio Code two package.json files must be created, one in this file folder, the other one in the application file folder, they must contain the following code { "type": "module" }
    askFileName,
    checkNewFileName,  
    calculateLettersFrequencies,
    calculateWordsFrequencies,
    displayNames,
    generateWords,
    getNames,
    readTheFile,
    readDirectoryFiles,
    writeTheFile
}