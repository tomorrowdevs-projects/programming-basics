const prompt = require("prompt-sync")({ sigint: true}) ;
const {checkNewFileName, generateWords, readTheFile, writeTheFile} = require( '../../../lib/files-promises-modules.js' ); // For CommonJS environment
/**
 * Redact sensitive words in a file generating a new one redacted
 * @param {string} fileName the file in which to search for the redacted words 
 * @param {string} sensitiveWordsFileName the file containing the list of words to redact
 * @param {string} redactedFileName the name of the file into which to place the redacted content
 * @returns
 */
async function redactSensitiveWords(fileName, sensitiveWordsFileName, redactedFileName){
    try {
        if(! checkNewFileName(redactedFileName)){
            return false;
        }

        let content = await readTheFile(fileName);

        if(content){
            const words = await readTheFile(sensitiveWordsFileName);

            if(words){
                generateWords(words).forEach(word => {
                    const regexWord = new RegExp(word, 'gi');
                    content = content.replaceAll(regexWord, '*'.repeat(word.length));
                });

                writeTheFile(redactedFileName, content);
            }
        }
        

    } catch (error) {
        console.log('The following error occurred: ', error.message);
    }

    return;
}


function init(){
    const fileName = prompt('Please enter the name of the file from which to redact sensitive words, including the extension: ');
    const sensitiveWordsFileName = prompt('Please enter the name of the file containing the words to redact, including the extension: ');
    const redactedFileName = prompt('Please enter the name of the redacted file, including the extension: ');

    redactSensitiveWords(fileName, sensitiveWordsFileName, redactedFileName);

    return;
} 
init();