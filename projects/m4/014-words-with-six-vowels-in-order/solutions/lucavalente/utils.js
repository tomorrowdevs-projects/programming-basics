
 /** List of vowels and 'y' in order
  * @type {Array<char>}
  */
const vowelsAndY = ['a', 'e', 'i', 'o', 'u', 'y'];

/** Count is a counter that helps to track the use of vowels and 'y' into a word
 * @type {int}
 */
let count = 0;

/**
 * given a list of of string, the function return another list with those that comply with the following rule:
 *  - each vowels and 'y' contained in order -
 * @param {Array<string>} arg text; 
 * @return {Array<string>} List of words into text; 
 */ 

function checkWords(wordList){
    const result = [];
    wordList.forEach(word => {
        for (let i = 0; i < word.length; i++){
            if (word[i] == vowelsAndY[count]){
                count++;
            }
        }
        if (count == 6){
            result.push(word);            
        }
        count = 0;
    });
    return result;
}

/**
 * given a text, the function return the list of word contained
 * @param {string} arg text; 
 * @return {Array<string>} List of words into text; 
 */ 

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

  module.exports = {
    checkWords: checkWords,
    stringOfWords: stringOfWords 
};

