const fs = require("fs").promises;
const inputFiles = ["file1.txt", "file2.txt", "file3.txt"]; // insert in the array the files that will be concatenated

// The fist paramether is the array of the files that will be concatenated, the second paramether is the file where all the contented will be concatenated.
function concatenateFiles(array, output) {
  array.forEach((file) => {
    fs.readFile(file, "utf8")
      .then((data) => fs.appendFile(output, data))
      .catch((err) => console.log(err));
  });
}

concatenateFiles(inputFiles, "output.txt");
