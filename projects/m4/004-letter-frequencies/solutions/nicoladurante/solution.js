const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//regex pattern
const pattern = /[a-zA-Z]/;
const frequencies = {};

//function to check if a character is a letter
function isLetter(car) {
  return pattern.test(car);
}

function displayLetterFrequencies(file) {
  for (let car of file) {
    if (isLetter(car)) {
      car = car.toLowerCase();
      !frequencies.hasOwnProperty(car)
        ? (frequencies[car] = 1)
        : frequencies[car]++;
    }
  }

  console.log(frequencies);

  for (let property of Object.keys(frequencies)) {
    console.log(`Letter ${property} occurs ${frequencies[property]} times!`);
  }
}

function main() {
  rl.question("$ ", (answer) => {
    let parameters = answer.split(" ");

    if (parameters.length > 1) {
      console.log("You have provided the wrong number of parameters!");
      rl.close();
      return;
    }

    fs.open(parameters[0], "r", (err, fd) => {
      try {
        if (err) {
          throw new Error(`Cannot open ${parameters[0]} file!`);
        }

        fs.readFile(fd, "utf-8", (err, data) => {
          if (err) {
            throw err;
          }

          displayLetterFrequencies(data);
          rl.close();
        });
      } catch (error) {
        console.log(`${error.name}: ${error.message}`);
        rl.close();
      }
    });
  });
}

main();
