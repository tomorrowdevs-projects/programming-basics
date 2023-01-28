const fsPromises = require("fs").promises;
const path = require("path");

// TEXT FILE
const inputText = path.join(__dirname, "input.txt");

// MAIN FUNCTION

function getWordsSixWovels(input) {
  return fsPromises
    .readFile(input, "utf8")
    .then((list) => {
      const words = getArray(list).filter(Boolean);
      const filteredWords = [];
      for (const word of words) {
        if (word.replace(/[^a, e, i, o, u, y]/gi, "") === "aeiouy") {
          filteredWords.push(word);
        }
      }
      return filteredWords;
    })
    .catch((err) => {
      return catchErr(err);
    });
}

getWordsSixWovels(inputText)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// HELPER FUNCTIONS
// Transform a sentence into an array of words, and remove the punctuation marks at the beginning and at the end of the sentence.
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
