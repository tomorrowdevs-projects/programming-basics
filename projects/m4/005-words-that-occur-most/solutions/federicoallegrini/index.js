const fs = require("fs");

const argsFilePath = process.argv.slice(2);

if (checkArgsLength(argsFilePath)) {
  wordsThatOccurMost(argsFilePath[0], 2);
}

function wordsThatOccurMost(filePath = "", minimumNumberOfOccurrence = 1) {
  if (isValidPath(filePath) && fileExists(filePath)) {
    const fileContent = readFileContent(filePath);
    if (fileContent || fileContent.trim() === "") {
      const mappedWords = fileContent.split(" ").reduce(mapWords, {});
      const mostOccurredWord = filterByOccurrence(
        mappedWords,
        minimumNumberOfOccurrence
      );
      displayWordsThatOccurMost(mostOccurredWord, minimumNumberOfOccurrence);
    }
  }
}

function mapWords(mapObject, word) {
  word = word.trim().toLowerCase();
  word = removeTrailingPunctuation(word);
  if (!isEmpty(word, false)) {
    if (mapObject[word]) {
      mapObject[word]++;
    } else {
      mapObject[word] = 1;
    }
  }
  return mapObject;
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

function filterByOccurrence(mappedWords, minimumNumberOfOccurrence = 1) {
  return Object.fromEntries(
    Object.entries(mappedWords).filter(
      ([word, occurrence]) => occurrence >= minimumNumberOfOccurrence
    )
  );
}

function displayWordsThatOccurMost(mappedWords, minimumNumberOfOccurrence = 1) {
  const mappedWordsList = Object.entries(mappedWords);
  if (mappedWordsList.length > 0) {
    const wordOccurrenceString = mappedWordsList
      .map(([word, occurrence]) => `- ${occurrence} X ${word}`)
      .join("\n");
    console.log(
      `\n\n--{Word that occurrs ${minimumNumberOfOccurrence} or more times in the file}--\n\n`
    );
    console.log(wordOccurrenceString);
  } else {
    console.error(
      `[Error] No word with more than ${minimumNumberOfOccurrence} occurrence found!`
    );
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

function isEmpty(word = "", showError = true) {
  if (word.trim() === "") {
    return true;
  }
  if (showError) {
    console.log(`[Warning] Not empty word "${char}"!`);
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
