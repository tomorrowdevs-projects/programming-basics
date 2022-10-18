const fs = require("fs");

const argsFilePath = process.argv.slice(2);

if (checkArgsLength(argsFilePath)) {
  wordsWithSixVowelsInOrder(argsFilePath[0]);
}

function wordsWithSixVowelsInOrder(filePath = "") {
  if (isValidPath(filePath) && fileExists(filePath)) {
    const fileContent = readFileContent(filePath);
    if (fileContent || fileContent === "") {
      const words = fileContent.split(",");
      const vowels = ["a", "e", "i", "o", "u", "y"];
      const vowelsWords = [
        ...new Set(words.filter((word) => wordWithAllVowels(word, vowels))),
      ];
      if (vowelsWords.length > 0) {
        displayVowelsWords(vowelsWords);
      } else {
        displayNoVowelsWordsFoundError(filePath);
      }
    }
  }
}

function wordWithAllVowels(word, vowels) {
  for (vowel of vowels) {
    if (!cleanWord(word).includes(vowel)) return false;
  }
  return JSON.stringify(vowels) === JSON.stringify(vowelsInWord(word, vowels));
}

function vowelsInWord(word, vowels) {
  return cleanWord(word)
    .split("")
    .filter((letter) => vowels.includes(letter));
}

function cleanWord(word) {
  return removePunctuation(word).trim().toLowerCase();
}

function removePunctuation(word) {
  return word.replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/gim, "");
}

function capitalize(word = "") {
  word = word.padEnd(2, " ");
  return (
    word[0].toUpperCase().trim() +
    word.substring(1, word.length).toLowerCase().trim()
  );
}

function displayVowelsWords(vowelsWords) {
  console.log(`\n[Result] Vowels words:\n\n`);
  vowelsWords.forEach((word) =>
    console.log(`- "${capitalize(cleanWord(word))}"\n`)
  );
}
function displayNoVowelsWordsFoundError(path) {
  console.error(`\n[Error] No vowels words found in the list of file ${path}!`);
}

function checkArgsLength(argsFilePath = "", argsLength = 1) {
  const length = argsFilePath.length;
  if (length === argsLength) {
    return true;
  }
  console.error(
    `[Error] You have provided ${length} arguments, you must provide ${argsLength} path${
      argsLength > 1 ? "s" : ""
    }!`
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
    return fs.readFileSync(path, "utf8");
  } catch (err) {
    console.error(`[Error] Cannot read the file "${path}"!`);
    return false;
  }
}
