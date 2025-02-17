const prompt = require("prompt-sync")({ sigint: true}) ;
const {readTheFile} = require( '../../../lib/files-promises-modules.js' );
/**
 * Concatenation one or more files
 * @param {string} The files list
 */
function catFiles(filesName){
    if (typeof filesName === 'string'){
        let filesList = [];

        filesName.split(' ').forEach(fileName => {
            filesList.push(readTheFile(fileName));
        });

        Promise.all(filesList).then((files) => {
            files.forEach(file => {
                if (file){
                    console.log(file);
                }
            });
        }).catch(error => {
            console.log('The following error occurred: ', error.message);
        });
    }

    return;
}


function init(){
    const filesName = prompt('Please enter one or more files to concatenate, separate them using a space: ');

    catFiles(filesName);

    return;
} 
init();