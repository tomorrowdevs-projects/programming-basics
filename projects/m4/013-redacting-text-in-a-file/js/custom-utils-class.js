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
     * Redact the inputText hiding the redactedWods
     * @param {string} inputText 
     * @param {array} redactedWords 
     * @returns {string} the redacted text
     */
    redacter(inputText, redactedWords) {
        let output = inputText;
    
        redactedWords.forEach( rw => {
            const substitute = this.genSubstitute(rw.length);
            const rwAsRegex = new RegExp(rw, 'gmi');
            output = output.replace(rwAsRegex, substitute);
        })
    
        return output;
    }

    /**
     * Return a string of asterisks (or other chars) with the input length
     * @param {integer} length - the desired length
     * @param {string} substitute - the substitute string
     * @returns {string}
     */
    genSubstitute(length, substitute = '*') {
        let output = ''
        for(let i = 0; i < length; i++) {
            output += substitute;
        }
        return output;
    }
}

module.exports = new CustomUtils();