/**
 * given a list of words, the function return a list of consecutive duplicates
 * @param {Array<string>} arg of words to check; 
 * @return {Array<string>} List of words to check; 
 */ 

 function errorCheck(wordList){

    if (!Array.isArray(wordList)){
        throw new Error("You have to use an array of words as input!");
    }
    /**  the function isStringArray is necessary to check if array contains just strings
        * @param {Array<>} arg array to check; 
        * @return {Bool} true: array contains just strings, false otherwise; 
    */
    const isStringsArray = arr => arr.every(i => typeof i === "string")

    if (!isStringsArray(wordList)){
        throw new Error("You could use just an array of words!");
    }

 }

 function checkForDuplicates(wordList){

    /** Error check */
    errorCheck(wordList);

    /** List to store duplicates
     * @type {Array<string>}
     */
    let duplilcates = [];

    wordList = wordList.map(word => word.toLowerCase());
    
    wordList.forEach( word => {
        /** checking for consecutive duplicates */
        
        if (wordList.indexOf(word) + 1 == wordList.lastIndexOf(word)){
            /** if the word is not in duplicates it will be pushed in it */
            if (!duplilcates.includes(word)){
                duplilcates.push(word);    
            }                  
        }
    })

    return duplilcates;
}

module.exports = checkForDuplicates;