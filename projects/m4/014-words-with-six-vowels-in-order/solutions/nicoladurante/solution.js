let rd = require("readline");
let fs = require("fs");

/**
 * Check if a word contains the letters A, E, I, O, U, Y in this order
 * and one occurence by letter
 * @param {string} word
 * @returns {boolean}
 */
function validWord(word) {
  let letters = ["a", "e", "i", "o", "u", "y"];
  let carIndex = word.indexOf(letters[0]);
  let index = carIndex - 1;

  //search if there is one "extra" letter
  //before starting "a" letter. If there is the word
  //is not valid
  while (index > 0) {
    if (letters.indexOf(word[index])) {
      return false;
    }
    index--;
  }

  let previousIndex = -1;

  //check if the current letter is in the word and
  // if the order of characters is correct
  while (carIndex > -1 && previousIndex < carIndex) {
    let position = carIndex + 1;
    //search if there are other occurrences of the same letter
    while (position < word.length) {
      if (word.indexOf(letters[0], position) > -1) {
        return false;
      }
      position++;
    }

    previousIndex = carIndex;
    letters.shift();
    carIndex = word.indexOf(letters[0]); //, position
  }

  return letters.length === 0;
}

let itf = rd.createInterface({
  input: process.stdin,
  output: process.stdout,
});

itf.question("Insert filename: ", (answer) => {
  fs.readFile(answer, "utf-8", (err, data) => {
    try {
      if (err) throw new Error("Error in file reading");

      data = data.replace(/[^a-zA-Z0-9 ]/g, " ");

      //split and filter not empty words
      let words = data.split(" ").filter((word) => word);

      words.forEach((word) => {
        if (validWord(word)) {
          console.log(word);
        }
      });

      itf.close();
    } catch (error) {
      console.log("Error: " + error.message);
      itf.close();
    }
  });
});
