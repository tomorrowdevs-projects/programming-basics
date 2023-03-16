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
     * Parse a file and search repeated words
     * @param {string} filePath 
     * @returns {object} - An object with n line as key, array of repeated word as values
     */
    searchRepeatedWords(filePath) {

        return new Promise( (resolve, reject) => {
            const output = {};
            let prevRow = [];
            let row = 1;
    
            const stream = readline.createInterface({
                input: fs.createReadStream(filePath),
            });
    
            stream.on('line', line => {
                // Format current line as array of word
                const wordsInRow = line.toLowerCase().split(' ').map( word => word.replace(/[^a-z|0-9]/gi, '')).filter( el => el != '');
    
                // Check repeated words
                const repeatedWords = [];
    
                wordsInRow.forEach( (word, wordIndex, wordList) => {
                    // If i'm controlling the first word of the row
                    // and there are words in the previous row
                    // and the last word of the previous row is the same of the first word of the current row
                    // then it is a repeated word between the two lines
                    if(
                        wordIndex === 0 
                        && prevRow.length > 0 
                        && prevRow[prevRow.length - 1] === word
                    ) {
                        output.hasOwnProperty(row - 1) ? output[row - 1].push(word) : output[row - 1] = [word];
                    }
    
                    // If word is the same of the previous word (row[wordIndex - 1])
                    // then it is a repeated word
                    if(word === wordList[wordIndex - 1] && !repeatedWords.includes(word)) {
                        repeatedWords.push(word);
                    }
                });
    
                // If repeated words are found, add them to the output obj
                if(repeatedWords.length > 0) output[row] = repeatedWords;
    
                // Save current row as prevRow for next iteration
                prevRow = wordsInRow;
    
                // Increase row counter
                row++;
            });
    
            stream.on('close', () => resolve(output));
            stream.on('error', err => reject(err));
        });
        
    }
}

module.exports = new CustomUtils();