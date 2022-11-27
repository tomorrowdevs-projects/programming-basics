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

const headOfFile = function (path, number) {
  return new Promise((resolve, reject) => {
    readLines(path)
      .then((data) => {
        const lines = data.split("\n");
        const result = [];
        if (lines.length < number) {
          number = lines.length;
          result.push(`The file only has ${lines.length} lines.`);
        } else {
          result.push(`Displaying the first ${number} lines of the file.`);
        }
        for (let i = 0; i < number; i++) {
          result.push(lines[i]);
        }
        resolve(result);
      })
      .catch((err) => console.log(err));
  })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
};

headOfFile("text.txt", 10);
