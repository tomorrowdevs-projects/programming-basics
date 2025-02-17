const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function concatFiles(files) {
  let data = "";

  for (let file of files) {
    if (!fs.existsSync(file)) {
      console.log(`File ${file} doesn't exists!`);
      continue;
    }

    //If the current file isn't the first, make a new line and concat the file
    if (files.indexOf(file) > 0) {
      data += "\n";
    }

    data += fs.readFileSync(file, "utf-8");
  }

  return data;
}

function main() {
  rl.question("$ ", (command) => {
    let array = command.split(" ");

    try {
      let cmd = array[0];

      if (cmd == "") {
        throw new Error("Command is empty");
      }

      if (cmd.toLowerCase() !== "cat") {
        throw new Error(`${cmd} is not a valid command!`);
      }

      let cmdArgs = array.slice(1);

      if (cmdArgs.every((value) => value === "")) {
        throw new Error("No arguments have been specified!");
      }

      let concatenation = concatFiles(cmdArgs);
      console.log(concatenation);
    } catch (err) {
      console.log(`${err.name}: ${err.message}`);
    }

    rl.close();
  });
}

main();
