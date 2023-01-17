const fsPromises = require("fs").promises;

const tailOfFile = (path, number) => {
  fsPromises
    .readFile(path, "utf8")
    .then((data) => {
      const lines = data.split("\n");
      let result = "";

      if (lines.length < number) {
        number = lines.length;
        result += `The file only has ${lines.length} lines.\n`;
      }

      result += `Displaying the last ${number} lines of the file.`;

      for (let i = lines.length - number; i < lines.length; i++) {
        result += `\n${lines[i]}`;
      }
      return result;
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(`Cannot find the entered file: ${err.path}`));
};

tailOfFile("text.txt", 10);
