const fsPromises = require("fs").promises;
const getArray = require("./functions").getArray;
const sortObject = require("./functions").sortObject;

function checkFrequencies(inputFile) {
  fsPromises
    .readFile(inputFile, "utf8")
    .then((data) => {
      new Promise((resolve, reject) => {
        const array = getArray(data);
        const set = new Set(array);
        const result = {};
        set.forEach((letter) => {
          result[letter] = array.filter((x) => x == letter).length;
        });
        resolve(sortObject(result));
      }).then((result) => console.log(result));
    })
    .catch((err) => console.log("The file you entered does not exists."));
}

checkFrequencies("input.txt");
