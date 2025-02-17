const prompt = require("prompt-sync")({ sigint: true}) ;
const {readTheFile, generateWords} = require( '../../../lib/files-promises-modules.js' ); // For CommonJS environment
/**
 * Find in a given file a list of words that contains each of the vowels A, E, I, O, U and Y exactly once and in order
 * @param {string} fileName the file to search for words that meet the previous constraint
 * @returns {Array} the list of words that meet the previous constraint
 */
async function findSixVowelsInOrder(fileName){
    const sixVowelsInOrderWords = [];

    try {
        const response = await readTheFile(fileName);
        if (response){
            const words = generateWords(response);

            words.forEach(word => {
                if (/aeiouy/i.test(word)){
                    sixVowelsInOrderWords.push(word);
                }
            })
        }
    } catch (error) {
        console.log('The following error occurred: ', error.message);
    }

    return sixVowelsInOrderWords;
}


async function init(){
    const fileName = prompt('Please enter the name of a file, including the extension: ');
    const sixVowelsInOrderWords = await findSixVowelsInOrder(fileName);

    if(sixVowelsInOrderWords.length > 0){
        console.log('Words containing ')
        sixVowelsInOrderWords.forEach(word => {
            console.log(word);
        });
    }

    return;
} 
init();