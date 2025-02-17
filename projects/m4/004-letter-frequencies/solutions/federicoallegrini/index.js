const fs = require("fs");

const argsFilePath = process.argv.slice(2);

if (checkArgsLength(argsFilePath)) {
  letterFrequencies(argsFilePath[0]);
}

function letterFrequencies(filePath = "") {
  if (isValidPath(filePath) && fileExists(filePath)) {
    const fileContent = readFileContent(filePath);
    if (fileContent || fileContent.trim() === "") {
      const mappedLetters = fileContent.split("").reduce(mapLetters, {});
      displayLettersFrequencies(mappedLetters);
    }
  }
}

function mapLetters(mapObject, char) {
  char = char.toLowerCase();
  if (isLetter(char, false)) {
    if (mapObject[char]) {
      mapObject[char]++;
    } else {
      mapObject[char] = 1;
    }
  }
  return mapObject;
}

function displayLettersFrequencies(mappedLetters) {
  const mappedLettersList = Object.keys(mappedLetters);
  if (mappedLettersList.length > 0) {
    const letterFrequenciesString = mappedLettersList
      .map((letter) => `- ${mappedLetters[letter]} X ${letter}`)
      .join("\n");
    console.log("\n\n--{Frequencies of letter in the file}--\n\n");
    console.log(letterFrequenciesString);
  } else {
    console.error(`[Error] No letters found!`);
  }
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

// The function is case insensitive
function isLetter(char = "", showError = true) {
  const regexValidLetter = /[a-zA-Z]/gim;
  if (regexValidLetter.test(char)) {
    return true;
  }
  if (showError) {
    console.error(`[Error] Not a letter "${char}"!`);
  }
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
