let readline = require("readline");
let fs = require("fs");

let int = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Insert three file names: \n1 - original file, \n2 - file with sensitive words, \n3 - output file"
);

int.question("\n$ ", (answer) => {
  let parameters = answer.split(" ");
  try {
    if (parameters.length < 3) {
      throw new Error("One or more parameters are missing!");
    }

    let originalFile = readFile(parameters[0]);
    let wordsFile = readFile(parameters[1]);

    Promise.all([originalFile, wordsFile]).then(
      (values) => {
        //parse words file removing special car
        values[1] = values[1].replace(/[^a-zA-Z0-9 ]/g, " ");
        let words = values[1].split(" ").filter((w) => w != "");

        for (let word of words) {
          values[0] = values[0].replaceAll(
            new RegExp(word, "gi"),
            getAsterisks(word.length)
          );
        }

        fs.writeFile(parameters[2], values[0], () => {
          console.log("File is written");
          int.close();
        });
      },
      (error) => {
        console.log(error.message);
        int.close();
      }
    );
  } catch (error) {
    console.log("Error: " + error.message);
    int.close();
  }
});

/**
 * Read file and returns a promise
 * @param {string} filename
 * @returns a new promise
 */
function readFile(filename) {
  return new Promise(function executor(resolve, reject) {
    fs.readFile(filename, "utf-8", function (err, data) {
      if (err) {
        reject(new Error(`There was an errore in reading file ${filename}`));
      }
      resolve(data);
    });
  });
}

/**
 * Return a concatenation of asterisks
 * @param {integer} wordLength
 * @returns
 */
function getAsterisks(wordLength) {
  let asterisks = "";
  for (let i = 0; i < wordLength; i++) {
    asterisks += "*";
  }
  return asterisks;
}
