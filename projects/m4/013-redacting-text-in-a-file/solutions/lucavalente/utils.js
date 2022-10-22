
 /**
  * given a text, the function return the list of words contained
  * @param {string} arg of words to check; 
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
 
function stringOfWords(text){

  /** words into the text
     * @type {Array<string>}
    */
  const result = [];

  /** list of lines contained into the text
     * @type {Array<string>}
    */
  let lineList = [];  

  lineList = text.toString().split("\n");  
  lineList.forEach(line => {
    line.split(" ").forEach(word => {
            word = word.replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/gim, "").replace("\r", "");   
            if (word != ""){
              result.push(word); 
            }            
        })  
    });

    return result;

}

module.exports = stringOfWords;
