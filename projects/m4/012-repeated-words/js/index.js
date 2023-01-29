const fsPromises = require("fs").promises;
const path = require("path");
const input = path.join(__dirname, "inputo.txt");

// MAIN FUNCTION
function findRepeatedWords(inputFile) {
  return fsPromises
    .readFile(inputFile, "utf8")
    .then((data) => {
      const repeatedWords = [];
      const lines = data.split("\n");
      let tempWord = "";
      let lineNumber = 1;

      lines.forEach((line) => {
        const arrayLine = getArray(line);
        arrayLine.forEach((word) => {
          if (word === tempWord) {
            const repetition = {};
            repetition.word = word;
            repetition.line = lineNumber;
            repeatedWords.push(repetition);
          } else {
            tempWord = word;
          }
        });
        lineNumber++;
      });
      return repeatedWords;
    })
    .catch((err) => Promise.reject(err));
}

findRepeatedWords(input)
  .then((data) => {
    for (const repetition of data) {
      console.log(
        `The word "${repetition.word}" was repeated twice on line ${repetition.line}`
      );
    }
  })
  .catch((err) => console.log(catchErr(err)));

// HELPER FUNCTIONS
// Transform a sentence into an array of words, where the punctuation marks at the beginning and at the end of the sentence are removed.
function getArray(input) {
  const array = input.toLowerCase().split(/[\r\n]+| /g);
  array.forEach((element, index) => {
    array[index] = element
      .replace(/^[^A-Za-z]+/g, "")
      .replace(/[^A-Za-z]+$/g, "");
    if (array[index] === "") {
      array.splice(index, 1);
    }
  });
  return array;
}

function catchErr(err) {
  const errorPath = err.path.split("/");
  const notFoundFile = errorPath[errorPath.length - 1];
  return `Cannot find the file "${notFoundFile}"`;
}
