// Modules
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