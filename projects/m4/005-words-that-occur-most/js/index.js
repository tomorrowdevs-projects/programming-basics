const fsPromises = require("fs").promises;

function checkFrequencies(inputFile) {
  fsPromises
    .readFile(inputFile, "utf8")
    .then((data) => {
      const array = getArray(data);
      const set = new Set(array);
      const result = {};
      set.forEach((letter) => {
        result[letter] = array.filter((x) => x == letter).length;
      });
      return sortObject(result);
    })
    .then((result) => console.log(result))
    .catch((err) => console.log("The file you entered does not exists."));
}

checkFrequencies("input.txt");

// FUNCTIONS

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

function sortObject(input) {
  const keysSorted = Object.keys(input).sort(function (a, b) {
    return input[b] - input[a];
  });
  const sortedObject = {};
  keysSorted.forEach((key) => {
    sortedObject[key] = input[key];
  });
  return sortedObject;
}

/*
Replace first character
element.replace(/^[^A-Za-z0-9]/g, "")
Replace last character
element.replace(/[^A-Za-z0-9]$/g, "")
*/
