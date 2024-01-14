const {askFileName, readTheFile, calculateLettersFrequencies} = require( '../../../lib/files-promises-modules.js' ); // For CommonJS environment


function init(){
    const fileName = askFileName();

    if (fileName){
        readTheFile(fileName).then(response => {
            if (response){
                const lettersFrequencies = calculateLettersFrequencies(response);

                for (const letter in lettersFrequencies) {
                    console.log(letter, lettersFrequencies[letter]);
                }
            }
        }).catch(error => {
            console.log('The following error occurred: ', error.message);
        });
    }

    return;
} 
init();