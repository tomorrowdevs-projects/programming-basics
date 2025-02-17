const {askFileName, readTheFile} = require( '../../../lib/files-promises-modules.js' ); // For CommonJS environment
/**
 * Generates a list of all words contained in a file
 * @param {string} content the content of a file
 * @returns {Object} list of words and their frequencies
 */
function generateWords(content){
    const words = content.split(/\W+/);

    for (let i = 0; i < words.length; i++) {
        if (words[i].trim() === ''){
            words.splice(i, 1);
        }
    }

    return words;
}
/**
 * Randomly selects two words from a list and concatenates them to produce a new password
 * @param {Array} words list of words
 * @returns the generated password
 */
function createPasswordByWords(words){
    if (Array.isArray(words) && words.length > 1 ){
        return words[Math.floor(Math.random() * words.length)] + words[Math.floor(Math.random() * words.length)];
    }

    return false;
}


function init(){
    const fileName = askFileName();

    if (fileName){
        readTheFile(fileName).then(response => {
            if (response){
                const words = generateWords(response);
                const password = createPasswordByWords(words);

                if (password){
                    console.log(password);
                } else {
                    console.log('The password was not generated correctly');
                }
            }
        }).catch(error => {
            console.log('The following error occurred: ', error.message);
        });
    }

    return;
} 
init();