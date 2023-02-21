// Modules
const readline = require('readline');
const fs = require('fs');

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
     * Parse a file and return a promise with an array of tested word against the given regex
     * @param {string} file 
     * @param {regex} regex 
     * @returns {array}
     */
    async wordSearcher(file, regex) {

        return new Promise( (resolve, reject) => {
            const output = [];
    
            const stream = readline.createInterface({
                input: fs.createReadStream(file),
            });
    
            stream.on('line', line => {
                if(line.trim().match(regex) != null) {
                    if(line.trim().match(regex).includes(line.trim())) output.push(line);
                }
            });
    
            stream.on('close', () => resolve(output));
    
            stream.on('error', err => reject(err));
        });
    
    }
    
    /**
     * Print a line for each element of input array
     * @param {array} array 
     * @returns void
     */
    arrayPrinter(array) {
        array.forEach( e => console.log(e) );
    }
}

module.exports = new CustomUtils();