const prompt = require("prompt-sync")({ sigint: true}) ;
const {generateWords, readTheFile} = require( '../../../lib/files-promises-modules.js' ); // For CommonJS environment
/**
 * Determines what proportion of the words use each letter of the alphabet
 * @param {Array} words the words list to check
 * @returns {Object} proportion of the words for each letter of the alphabet
 */
function calculateLettersProportion(words){
    const lettersProportion = {};
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
        lettersProportion[alphabet[i]] = 0;
    }

    words.forEach(word => {
        const alphabetCopy = alphabet;
    
        for (let i = 0; i < word.length; i++) {
            const letter = word[i].toLowerCase();
    
            if (alphabetCopy.includes(letter)){
                lettersProportion[letter]++;
                alphabetCopy.splice(i,1);
            }
        }
    });

    return lettersProportion;
}
/**
 * Display the proportion of words (in percent) that use each letter of the alphabet and a message that identifies the letter that is used in the smallest proportion of the words
 * @param {*} lettersProportion proportion of the words for each letter of the alphabet
 * @param {*} totalWords number of words
 */
function displayLettersProportion(lettersProportion, totalWords){
    if (Object.keys(lettersProportion).length > 0 && totalWords > 0){
        let smallestProportionWordValue = Infinity;
        let smallestProportionWordLetter = '';

        console.log('Percentage of words in which the letter appears');

        for (const letter in lettersProportion) {
            const lettersProportionPercentage = (lettersProportion[letter]/totalWords)*100;
            console.log(letter, lettersProportionPercentage.toFixed(2) + '%');

            if (lettersProportionPercentage < smallestProportionWordValue){
                smallestProportionWordValue = lettersProportionPercentage;
                smallestProportionWordLetter = letter;
            }
        }

        console.log('The letter that is used in the smallest proportion of the words is ' + smallestProportionWordLetter + ': ' + smallestProportionWordValue.toFixed(2) + '%');
    } else {
        console.log('No Percentage of words to display');
    }
}


function init(){
    const fileName = prompt('Please enter the name of a file, including the extension: ');

    if (fileName){
        readTheFile(fileName).then(response => {
            if (response){
                const words = generateWords(response);
                const totalWords = words.length;
                const lettersProportion = calculateLettersProportion(words);
                displayLettersProportion(lettersProportion, totalWords);
            }
        }).catch(error => {
            console.log('The following error occurred: ', error.message);
        });
    }

    return;
} 
init();