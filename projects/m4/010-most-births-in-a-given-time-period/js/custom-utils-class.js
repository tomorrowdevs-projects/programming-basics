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

    /**
     * Reads a file line by line and returns a formatted data object
     * @param {string} file - the file path to read
     * @returns {object} - baby names data from file
     */
    formatBabynamesDataFromFile(file) {

        return new Promise( (resolve, reject) => {
            const output = {};
        
            const stream = readline.createInterface({
                input: fs.createReadStream(file),
            });
        
            stream.on('line', line => {
                const lineAsArr = line.split(',');
        
                if(!output.hasOwnProperty(lineAsArr[1])) output[lineAsArr[1]] = {};
                output[lineAsArr[1]][lineAsArr[0]] = lineAsArr[2];
            });
        
            stream.on('close', () => resolve(output));

            stream.on('error', err => reject(err));
        });

    }

    /**
     * Pass the array of data file and returns and object with the sum for each year of baby names, divided by genders
     * @param {array} fileList 
     * @returns {object}
     */
    async sumBabynamesForEachYear(fileList) {
        const output = {};

        await Promise.all(    
            fileList.map( async file => {
                const dataYear = await this.formatBabynamesDataFromFile(file);
                Object.keys(dataYear).forEach( gender => Object.keys(dataYear[gender]).forEach( name => {
                    if(!output.hasOwnProperty(gender)) output[gender] = {};
                    !output[gender].hasOwnProperty(name) ? output[gender][name] = parseInt(dataYear[gender][name]) : output[gender][name] += parseInt(dataYear[gender][name]); 
                }));
            })
        );

        return output;
    }

    /**
     * Pass an object with genders as key, object with the list of baby names as value, 
     * and outputs a string with the most common names for each gender
     * @param {object} totalBabynames
     * @returns {array} stringList - an array of string, the result for each gender
     */
    mostCommonNamesPrinter(totalBabynames) {
        const stringsList = [];

        Object.keys(totalBabynames).forEach( gender => {
            let mostUsedName = [];
            let nBabies = 0;
            Object.keys(totalBabynames[gender]).forEach( name => {
                if(nBabies <= totalBabynames[gender][name]) {
                    mostUsedName.push(name);
                    nBabies = totalBabynames[gender][name];
                }
            });
    
            const plural = mostUsedName.length > 1;
            stringsList.push(`Most common name${plural ? 's' : ''} for ${gender == 'F' ? 'females' : 'males'} ${plural ? 'are' : 'is'} ${mostUsedName.join(', ')} (${nBabies} babies).`);
        });
        
        return stringsList;
    }

}

module.exports = new CustomUtils();