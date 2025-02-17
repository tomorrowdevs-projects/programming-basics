"use strict";

const {promises: {readFile}} = require("fs");
const file = "./textFiles/words.txt"
const utils = require("./utils");

readFile(file).then(content => {

  /** List of words into the file
  * @type {Array<string>}
  */
  const wordList = utils.stringOfWords(content);

  /** for each word contained into result of the function there will be a log for the user*/
  utils.checkWords(wordList).map(word => console.log(" -> " + word));

}).catch(error => {
  console.error(error.message);
  process.exit(1);
});

module.exports = {readFile: readFile}