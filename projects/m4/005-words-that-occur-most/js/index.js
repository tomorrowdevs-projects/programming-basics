const {askFileName, readTheFile, calculateWordsFrequencies} = require( '../../../lib/files-promises-modules.js' ); // For CommonJS environment


function init(){
    const fileName = askFileName();

    if (fileName){
        readTheFile(fileName).then(response => {
            if (response){
                const wordsFrequencies = calculateWordsFrequencies(response);

                for (const word in wordsFrequencies) {
                    console.log(word, wordsFrequencies[word]);
                }
            }
        }).catch(error => {
            console.log('The following error occurred: ', error.message);
        });
    }

    return;
} 
init();