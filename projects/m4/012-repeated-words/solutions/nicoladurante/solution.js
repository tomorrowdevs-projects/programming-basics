let rd = require("readline");
let fs = require("fs");

let interface = rd.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Function that detects repeated words in a text file
 * and print line number and word that repeats
 * @param {string} fileContent
 */
function processFile(fileContent) {
  let rows = fileContent.split("\r\n");

  let lastWordInRow = null;

  for (let row of rows) {
    //split row in words
    let words = row.split(" ");

    let i = 0;

    let rowNumber = rows.indexOf(row) + 1; //row starts from 1 not 0

    //while word is equal to lastWordInRow
    while (words[i] === lastWordInRow) {
      i++;
    }

    //there is at least one word equal to lastWordInRow
    if (i > 0) {
      console.log(`Line: ${rowNumber}, Repeated word: ${words[i - 1]}`);
      lastWordInRow = null;
    }

    while (i < words.length) {
      let j = i + 1;
      while (words[i] === words[j]) {
        j++;
      }

      //if the two words are equal and are not the same word
      if (i != j - 1) {
        console.log(`Line: ${rowNumber}, Repeated word: ${words[i]}`);
      }

      if (i == words.length - 1 && words[i] !== "") {
        lastWordInRow = words[i];
      }

      i = j;
    }
  }
}

interface.question("Insert a filename: ", (filename) => {
  try {
    if (!filename) throw new Error("The command line argument is empty!");
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) throw new Error("Error in file reading");
      processFile(data);
      interface.close();
    });
  } catch (err) {
    console.log(err);
    interface.close();
  }
});
