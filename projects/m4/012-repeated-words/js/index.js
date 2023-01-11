const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const input = path.join(__dirname, "input.txt");

// MAIN FUNCTION
function findRepeatedWords(inputFile) {
  fsPromises.readFile(inputFile, "utf8").then((data) => {
    const lines = data.split("\n");
    let tempWord = "";
    let lineNumber = 1;

    lines.forEach((line) => {
      const arrayLine = getArray(line);
      arrayLine.forEach((word) => {
        if (word === tempWord) {
          console.log(
            `The word "${word}" was repeated twice on line ${lineNumber}`
          );
        } else {
          tempWord = word;
        }
      });
      lineNumber++;
    });
  });
}

findRepeatedWords(input);

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
const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const input = path.join(__dirname, "input.txt");

// MAIN FUNCTION
function findRepeatedWords(inputFile) {
  fsPromises.readFile(inputFile, "utf8").then((data) => {
    const lines = data.split("\n");
    let tempWord = "";
    let lineNumber = 1;

    lines.forEach((line) => {
      const arrayLine = getArray(line);
      arrayLine.forEach((word) => {
        if (word === tempWord) {
          console.log(
            `The word "${word}" was repeated twice on line ${lineNumber}`
          );
        } else {
          tempWord = word;
        }
      });
      lineNumber++;
    });
  });
}

findRepeatedWords(input);

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
