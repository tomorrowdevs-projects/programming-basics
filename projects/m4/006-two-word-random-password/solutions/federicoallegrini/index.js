const fs = require("fs");

const argsFilePath = process.argv.slice(2);

if (checkArgsLength(argsFilePath)) {
  twoWordRandomPassword(argsFilePath[0]);
}

function twoWordRandomPassword(filePath = "", maxSearch = 1000) {
  if (isValidPath(filePath) && fileExists(filePath)) {
    const fileContent = readFileContent(filePath);
    if (fileContent) {
      const wordsList = removeNewLine(fileContent)
        .split(" ")
        .filter((w) => w !== "");
      let [casualWord1, casualWord2] = ["", ""];
      let maxSearchCounter = 0;
      while (
        maxSearchCounter < maxSearch &&
        (casualWord1.length < 3 ||
          casualWord2.length < 3 ||
          casualWord1.length + casualWord2.length < 8 ||
          casualWord1.length + casualWord2.length > 10)
      ) {
        maxSearchCounter++;
        const [casualIndex1, casualIndex2] = [
          Math.trunc(Math.random() * wordsList.length),
          Math.trunc(Math.random() * wordsList.length),
        ];
        [casualWord1, casualWord2] = [
          removeTrailingPunctuation(wordsList[casualIndex1]),
          removeTrailingPunctuation(wordsList[casualIndex2]),
        ];
      }
      if (maxSearchCounter >= maxSearch) {
        console.error(
          `[Error] Words for password not found after ${maxSearch} times word search`
        );
      }
      const password = capitalize(casualWord1) + capitalize(casualWord2);
      console.log(`[Result] Your random password is: "${password}"`);
    }
  }
}

function capitalize(word = "") {
  word = word.padEnd(2, " ");
  return (
    word[0].toUpperCase().trim() +
    word.substring(1, word.length).toLowerCase().trim()
  );
}

function removeNewLine(text = "") {
  return text.replaceAll("\n", " ").replaceAll("\r", " ");
}

function removeTrailingPunctuation(word) {
  return word
    .split("")
    .filter((char, index, word) => {
      const regexPunctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
      const regexLetter = /[a-zA-Z]/gim;
      const isPunctuation = regexPunctuation.test(char);
      const wordStartFromIndex = word.slice(index + 1, word.length).join("");
      const wordEndAtIndex = word.slice(0, index).join("");
      // If the char is a puntuation
      // If the sub-word after and before this char includes at least one letter
      // Do not remove punctuation because is in the mid of the word
      if (
        isPunctuation &&
        regexLetter.test(wordStartFromIndex) &&
        regexLetter.test(wordEndAtIndex)
      ) {
        return true;
      }
      return !isPunctuation;
    })
    .join("");
}

function checkArgsLength(argsFilePath = "") {
  const length = argsFilePath.length;
  if (length === 1) {
    return true;
  }
  console.error(
    `[Error] You have provided ${length} arguments, you must provide only one path!`
  );
  return false;
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
    const fileContent = fs.readFileSync(path, "utf8");
    if (fileContent.trim() === "") {
      console.error(`[Error] The file "${path}" is empty!`);
      return false;
    }
    return fileContent;
  } catch (err) {
    console.error(`[Error] Cannot read the file "${path}"!`);
    return false;
  }
}
