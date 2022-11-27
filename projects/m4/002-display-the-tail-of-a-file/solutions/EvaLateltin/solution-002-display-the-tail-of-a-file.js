const fs = require("fs");

const readLines = function (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", function (err, data) {
      if (err) {
        reject("The file does not exists");
      } else {
        resolve(data);
      }
    });
  });
};

const tailOfFile = function (path, number) {
  return new Promise((resolve, reject) => {
    readLines(path)
      .then((data) => {
        const lines = data.split("\n");
        const result = [];
        if (number === 0 || number === undefined) {
          reject("Enter a number greater than zero.");
        } else if (lines.length < number) {
          number = lines.length;
          result.push(`The file only has ${lines.length} lines.`);
        } else {
          result.push(`Displaying the last ${number} lines of the file.`);
        }
        result.push(...lines.slice(number * -1));
        resolve(result.join("\n"));
      })
      .catch((err) => console.log(err));
  })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
};

tailOfFile("text.txt", 5);
