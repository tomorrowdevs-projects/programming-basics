const fs = require("fs");

const argsFilesPath = process.argv.slice(2);

/**
 * Array for test
    [
    "",
    "C|:invalid-path",
    "C:\\not-exists-test.txt",
    "C:\\test.txt",
    ];
*/

concatenateMultipleFiles(argsFilesPath);

function concatenateMultipleFiles(filesPath = []) {
  if (filesPath.length > 0) {
    const filesContent = [];
    filesPath.forEach((path) => {
      if (isValidPath(path) && fileExists(path)) {
        const fileContent = readFileContent(path);
        if (fileContent) {
          filesContent.push(fileContent);
        }
        return;
      }
    });
    if (filesContent.length > 0) {
      console.log("\n\n{FILES CONTENT}\n\n");
      console.log(filesContent.join(""));
    }
  } else {
    console.error("[Error] You must provide at least one path!");
  }
}

function isValidPath(path = "") {
  const regexValidPath =
    /^(?:[a-z]:)?[\/\\]{0,2}(?:[.\/\\ ](?![.\/\\\n])|[^<>:"|?*.\/\\ \n])+$/gim;
  if (regexValidPath.test(path)) {
    return true;
  }
  console.error(`[Error] Invalid path ${path}!`);
  return false;
}

function fileExists(path = "") {
  try {
    const exists = fs.existsSync(path);
    if (exists) {
      return true;
    }
    console.error(`[Error] File "${path}" doesn't exists!`);
    return false;
  } catch (err) {
    console.error(`[Error] File "${path}" doesn't exists!`);
    return false;
  }
}

function readFileContent(path) {
  try {
    return fs.readFileSync(path, "utf8");
  } catch (err) {
    console.error("[Error] Cannot read the file!");
    return false;
  }
}
