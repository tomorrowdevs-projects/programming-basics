const fsPromises = require("fs").promises;

const headOfFile = (path, number) => {
  fsPromises
    .readFile(path, "utf8")
    .then((data) => {
      const lines = data.split("\n");
      let result = "";

      if (lines.length < number) {
        number = lines.length;
        result += `The file only has ${lines.length} lines.\n`;
      }

      result += `Displaying the first ${number} lines of the file.`;

      for (let i = 0; i < number; i++) {
        result += `\n${lines[i]}`;
      }
      return result;
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(`Cannot find the entered file: ${err.path}`));
};

headOfFile("text.txt", 10);
