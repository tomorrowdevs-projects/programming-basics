const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");

// TEXT FILES
const inputText = path.join(__dirname, "input-text.txt");
const outputText = path.join(__dirname, "output-text.txt");
const sensitiveWords = path.join(__dirname, "sensitive-words.txt");

// MAIN FUNCTION
Promise.all([readFile(inputText), readFile(sensitiveWords)])
  .then((values) => {
    const text = values[0];
    const words = values[1];
    redactText(words, text).then((text) => {
      fsPromises.writeFile(outputText, text);
    });
  })
  .catch((err) => logErr(err));

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

function readFile(file) {
  return fsPromises.readFile(file, "utf8", (err) => {
    throw new Error();
  });
}

function redactText(words, text) {
  const wordList = words.split("\n");
  let modifiedText = text;
  for (word of wordList) {
    const regexWord = new RegExp(word, "gi");
    const newWord = "*".repeat(word.length);
    modifiedText = modifiedText.replaceAll(regexWord, newWord);
  }
  return new Promise((resolve, reject) => {
    resolve(modifiedText);
  });
}

function logErr(err) {
  const errorPath = err.path.split("/");
  const notFoundFile = errorPath[errorPath.length - 1];
  console.log(`Cannot find the file "${notFoundFile}"`);
}
