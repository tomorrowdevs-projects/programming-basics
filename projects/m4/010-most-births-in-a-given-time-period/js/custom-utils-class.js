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

    sumBabynamesForEachYear(fileList) {

        return new Promise( resolve => {

            let namesData = {};
    
            fileList.forEach( async file => {
                const namesYearData = await this.formatBabynamesDataFromFile(file);
        
                if(Object.keys(namesData).length === 0) {
                    namesData = namesYearData;
                    return;
                }
        
                Object.keys(namesData).forEach( gender => {
                    if(!namesData.hasOwnProperty(gender)) namesData[gender] = {};
        
                    Object.keys(namesYearData[gender]).forEach( name => {
                        if(typeof namesData[gender][name] === 'undefined') {
                            namesData[gender][name] = parseInt(namesYearData[gender][name]);
                        } else {
                            namesData[gender][name] += parseInt(namesYearData[gender][name]);
                        }
                    })
                });
        
            });

            console.log(Object.keys(namesData).length);

            resolve(namesData);
        })
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

}

module.exports = new CustomUtils();