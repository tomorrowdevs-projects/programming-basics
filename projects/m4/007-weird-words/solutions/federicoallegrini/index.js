const fs = require("fs");

const argsFilePath = process.argv.slice(2);

if (checkArgsLength(argsFilePath)) {
  weirdWords(argsFilePath[0]);
}

function weirdWords(filePath = "") {
  if (isValidPath(filePath) && fileExists(filePath)) {
    const fileContent = readFileContent(filePath);
    if (fileContent) {
      const regexContainsIeEi = /ie|ei/gim;
      const words = removeNewLine(fileContent)
        .split(" ")
        .filter((w) => w !== "" && regexContainsIeEi.test(w));
      const [wordsFollowRule, wordsViolateRule] = [{}, {}];
      words.forEach((word) =>
        removeTrailingPunctuation(word)
          .toLowerCase()
          .split("")
          .forEach((letter, index, wordList) => {
            if (index + 1 < wordList.length) {
              if (letter === "e" && wordList[index + 1] === "i") {
                if (index > 0 && wordList[index - 1] === "c") {
                  // Use the wordList array with join for insert lowercase word and avoid duplicate words
                  wordsFollowRule[wordList.join("")] = true;
                } else if (index > 0 && index - 1 !== "c") {
                  wordsViolateRule[wordList.join("")] = true;
                }
              } else if (letter === "i" && wordList[index + 1] === "e") {
                if (index > 0 && wordList[index - 1] === "c") {
                  wordsViolateRule[wordList.join("")] = true;
                } else if (index > 0 && index - 1 !== "c") {
                  wordsFollowRule[wordList.join("")] = true;
                }
              }
            }
          })
      );

      console.log(
        `[Result] Number of words that follow the rule: "${
          Object.keys(wordsFollowRule).length
        }"
        List: ${Object.keys(wordsFollowRule)
          .map((w) => `\n         - ${capitalize(w)}`)
          .join("")}`
      );
      console.log(
        `[Result] Number of words that violate the rule: "${
          Object.keys(wordsViolateRule).length
        }"
        List: ${Object.keys(wordsViolateRule)
          .map((w) => `\n         - ${capitalize(w)}`)
          .join("")}`
      );
    }
  }
}

function removeNewLine(text = "") {
  return text.replaceAll("\n", " ").replaceAll("\r", " ");
}

function capitalize(word = "") {
  word = word.padEnd(2, " ");
  return (
    word[0].toUpperCase().trim() +
    word.substring(1, word.length).toLowerCase().trim()
  );
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
