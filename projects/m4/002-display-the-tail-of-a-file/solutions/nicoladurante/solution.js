//Use the readline module to accept user input from NodeJS console
const readline = require("readline");
//Fs module for operations with files
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ROWS_NUMBER = 10;

rl.question("$ ", displayHead);

function displayHead(input) {
  let inputArray = input.split(" ", 2);

  let cmd = inputArray[0].toLowerCase();
  let filename = inputArray[1];

  // Handling errors
  try {
    if (cmd !== "tail") {
      throw new Error("Command not found!");
    }

    if (filename == undefined || filename == "") {
      throw new Error(`You have omitted the second parameter!`);
    }

    if (!fs.existsSync(filename)) {
      throw new Error(
        `File with name ${filename} doesn't exists in this directory!`
      );
    }

    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      let arr = data.split("\n");
      let start_index = 0;
      if (arr.length > ROWS_NUMBER) {
        start_index = arr.length - ROWS_NUMBER;
      }
      for (let i = start_index; i < arr.length; i++) {
        console.log(arr[i]);
      }
      rl.question("$ ", displayHead);
    });
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
    rl.question("$ ", displayHead);
  }
}
