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
    if (cmd !== "head") {
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

    const readableStream = fs.createReadStream(filename, { encoding: "utf8" });

    readableStream.on("error", function (error) {
      console.log(`error: ${error.message}`);
    });

    readableStream.on("data", (chunk) => {
      let rows = chunk.split("\n");
      let rowsNumber = rows.length;

      // if total rows is greater than ROWS_NUMBER (10), set rowsNumber to 10. So
      // I print out at most 10 rows
      if (rowsNumber > ROWS_NUMBER) {
        rowsNumber = ROWS_NUMBER;
      }

      for (let i = 0; i < rowsNumber; i++) {
        console.log(rows[i]);
      }
      //new command
      rl.question("$ ", displayHead);
    });
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
    rl.question("$ ", displayHead);
  }
}
