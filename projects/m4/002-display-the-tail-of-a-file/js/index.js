const prompt = require("prompt-sync")({ sigint: true}) ;
const {readTheFile} = require( '../../../lib/files-promises-modules.js' );
/**
 * Displays the last 10 lines of a file
 * @param {string} file The file from which to print the last 10 lines
 */
function displayFileTail(fileName){
    readTheFile(fileName).then(response => {
        if (response){
            let lines = response.split(/\r?\n/);

            if (lines.length > 10){
                lines = lines.splice(lines.length-10,lines.length);
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
    
    displayFileTail(fileName);

    return;
} 
init();