const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");

// TEXT FILE
const input = path.join(__dirname, "input.txt");

// MAIN FUNCTION

readFile(input)
  .then((list) => {
    const words = getArray(list).filter(Boolean);
    const filteredWords = [];
    for (const word of words) {
      if (word.replace(/[^a, e, i, o, u, y]/gi, "") === "aeiouy") {
        filteredWords.push(word);
      }
    }
    console.log(filteredWords);
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

function logErr(err) {
  const errorPath = err.path.split("/");
  const notFoundFile = errorPath[errorPath.length - 1];
  console.log(`Cannot find the file "${notFoundFile}"`);
}
