const prompt = require("prompt-sync")({ sigint: true}) ;
const {readTheFile} = require( '../../../lib/files-promises-modules.js' ); // For CommonJS environment
/**
 * Displays the first 10 lines of a file
 * @param {string} file The file from which to print the first 10 lines
 */
function displayFileHead(fileName){
    readTheFile(fileName).then(response => {
        if (response){
            let lines = response.split(/\r?\n/);

            if (lines.length > 10){
                lines = lines.splice(0,10);
            }
    
            lines.forEach(line => {
                console.log(line);
            });
        }
    }).catch(error => {
        console.log('The following error occurred: ', error.message);
    });

    return;
}


function init(){
    const fileName = prompt('Please enter the name of a file, including the extension: ');
    
    displayFileHead(fileName);

    return;
} 
init();