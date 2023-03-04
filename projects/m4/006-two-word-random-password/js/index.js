const fsPromises = require("fs").promises;
const fileName = "input.txt";

// SOLUTION
fsPromises
  .readFile(fileName, "utf8")
  .then((data) => {
    data = getArray(data);
    const first = random(
      data.filter((word) => word.length >= 3 && word.length < 7)
    );
    const second = random(
      data.filter(
        (word) =>
          first.length + word.length >= 8 &&
          first.length + word.length <= 10 &&
          word.length >= 3
      )
    );
    return capitalize(first) + capitalize(second);
  })
  .then((data) =>
    console.log("The following password has been generated:", data)
  );

// HELPER FUNCTIONS
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getArray(input) {
  const array = input.split(/[\r\n]+| /g);
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

function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}
