const fsPromises = require("fs").promises;

// COUNT HOW MANY WORDS INCLUDE EACH LETTER
function countLetters(inputFile) {
  fsPromises
    .readFile(inputFile, "utf8")
    .then((data) => {
      const dataArray = getArray(data);
      const letterObject = createObject("abcdefghijklmnopqrstuvwxyz");

      // POPULATE THE OBJECT OF LETTERS WITH THE NUMBER OF EACH LETTER THAT APPEARS IN THE TEXT
      Object.keys(letterObject).forEach((letter) => {
        dataArray.forEach((word) => {
          if (word.includes(letter)) {
            letterObject[letter]++;
          }
        });
      });

      const result = {};
      result.object = letterObject;
      result.minValue = Math.min(...Object.values(result.object));
      result.lessFrequentLetters = getKeyByValue(
        result.object,
        result.minValue
      );

      // RESOLVE
      return result;
    })
    .then((result) => {
      console.log("The percentages of each letter are:", result.object);
      console.log("The less frequent letters are:", result.lessFrequentLetters);
    })
    .catch((err) => console.log("The file you entered does not exists."));
}

countLetters("input.txt");

// HELPER FUNCTIONS

// Get an array of words cleaned from any punctuation marks
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

// Get the object keys from its value
function getKeyByValue(object, value) {
  return Object.keys(object).filter((key) => object[key] === +value);
}

// Create an object of letters with value 0
function createObject(string) {
  const letters = string.split("");
  const outputObject = {};
  for (key of letters) {
    outputObject[key] = 0;
  }
  return outputObject;
}
