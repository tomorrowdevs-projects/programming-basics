const fs = require("fs").promises;
const inputFiles = ["file1.txt", "file2.txt", "file3.txt"];

async function concatenateFiles(array, output) {
  for (const file of array) {
    const fileContent = await fs.readFile(file, "utf8");
    await fs.appendFile(output, fileContent + "\n");
  }
}

concatenateFiles(inputFiles, "output.txt");
