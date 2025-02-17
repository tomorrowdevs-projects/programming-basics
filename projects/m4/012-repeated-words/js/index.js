const prompt = require("prompt-sync")({ sigint: true}) ;
const {readTheFile, generateWords} = require( '../../../lib/files-promises-modules.js' ); // For CommonJS environment
/**
 * Find duplicate words in a single line
 * @param {Array} words the word list to search for duplicates
 * @returns {Array} the list of duplicate words
 */
function findRepeatedWordsInLine(words){
    const repeatedWords = []

    if (words.length > 1){
        for (let i = 1; i < words.length; i++) {
            const word = words[i];

            if (word === words[i-1]){
                repeatedWords.push(word);
            }
        }
    }

    return repeatedWords;
}
/**
 * Find duplicate words in a given file
 * @param {string} fileName the file to search for duplicate words
 * @returns {Object} the list of duplicate words and the line numbers where they were found
 */
async function findRepeatedWords(fileName){
    const repeatedWords = {};

    try {
        const response = await readTheFile(fileName);
        if (response){
            let lines = response.split(/\r?\n/);
            let lastWord = '';

            if (lines.length > 0){
                for (let i = 0; i < lines.length; i++) {
                    const words = generateWords(lines[i]);
                    const repeatedWordsInLine = findRepeatedWordsInLine(words);

                    if (i > 0 && words[0] === lastWord){
                        repeatedWords[i] = [lastWord];
                    }

                    if (repeatedWordsInLine.length > 0){
                        if (repeatedWords.hasOwnProperty(i)){
                            repeatedWords[i].push(...repeatedWordsInLine);
                        } else {
                            repeatedWords[i] = repeatedWordsInLine;
                        }
                    }

                    lastWord = words[words.length - 1];
                }
    
            }
        }
    } catch (error) {
        console.log('The following error occurred: ', error.message);
    }

    return repeatedWords;
}


async function init(){
    const fileName = prompt('Please enter the name of a file, including the extension: ');
    const repeatedWords = await findRepeatedWords(fileName);

    if ( Object.keys(repeatedWords).length > 0){
        for (let key in repeatedWords) {
            console.log(`Found repeated word/s at line ${key}: ${repeatedWords[key].join(', ')}.`);
        }
    }

    return;
} 
init();