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
     * Redact the inputText hiding the redactedWords
     * @param {string} inputText 
     * @param {array} redactedWords 
     * @returns {string} the redacted text
     */
    redacter(inputText, redactedWords) {
        let output = inputText;
    
        redactedWords.forEach( redWord => {
            const substitute = this.genSubstitute(redWord.length);
            const redWordAsRegex = new RegExp(redWord, 'gmi');
            output = output.replace(redWordAsRegex, substitute);
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
        return Array.from({ length }, _ => substitute).join('');
    }
}

module.exports = new CustomUtils();