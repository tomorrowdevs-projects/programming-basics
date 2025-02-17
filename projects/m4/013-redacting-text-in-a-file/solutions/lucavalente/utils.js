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

module.exports = stringOfWords;
