// Modules
const readline = require('readline');
const fs = require('fs');
const fsp = require('node:fs/promises');
const path = require('path');

class CustomUtils {
    /**
     * Check the existance of required args
     * @param {object} requiredArgsObj
     * An object where the keys are the process.args indexes required 
     * and the values are the error messages
     * @returns {bool} - false if validation fails, true otherwise
     */
    checkInputExistance(requiredArgsObj) {
        try {
            for(const argIndex in requiredArgsObj) {
                if(typeof process.argv[argIndex] == 'undefined') throw requiredArgsObj[argIndex];
            }
        } catch (err) {
            console.log(err);
            return false;
        }
        return true;
    }

    /**
     * Returns the files list in the requested directory
     * @param {string} dir - The path of the directory
     * @param {array} [exceptions = null] - retrieve only files with the desired extensions
     * @returns {object} 
     */
    async getFilesList(dir, extensions = null) {
        let files = await fsp.readdir(dir);
        if(Array.isArray(extensions)) files = files.filter( f => extensions.includes(path.extname(f)) );
        return {
            dir,
            files
        };
    }

    formatBabynamesDataFromFile(file, input) {

        return new Promise( (resolve, reject) => {
            const output = input;
    
            const stream = readline.createInterface({
                input: fs.createReadStream(file),
            });
        
            stream.on('line', line => {
                const lineAsArr = line.split(',');
        
                if(!output.hasOwnProperty(lineAsArr[1])) output[lineAsArr[1]] = [];
                if(!output[lineAsArr[1]].includes(lineAsArr[0])) output[lineAsArr[1]].push(lineAsArr[0]);
            });
        
            stream.on('close', () => resolve(output));
            stream.on('error', err => reject(err));
        });
    
    }

    /**
     * Generator function for files paths
     * @param {array} files 
     * @yields file path from files list
     */
    * generatorFileFromArray(files) {
        for(let i = 0; i < files.length; i++) {
            yield files[i];
        }
    }

    /**
     * Return the current progress
     * @param {int} counter 
     * @param {int} length 
     * @returns {float} - the percentage
     */
    progress(counter, length) {
        return parseFloat(((counter / length) * 100).toFixed(2));
    }
}

module.exports = new CustomUtils();