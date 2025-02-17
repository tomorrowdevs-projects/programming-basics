const fs = require("fs");

const argsFilePath = process.argv.slice(2);

if (checkArgsLength(argsFilePath)) {
  repeatedWords(argsFilePath[0]);
}

function repeatedWords(filePath = "") {
  if (isValidPath(filePath) && fileExists(filePath)) {
    const fileContent = cleanText(readFileContent(filePath));
    if (fileContent || fileContent === "") {
      const mappedWords = mapRepeatedWords(fileContent);
      displayrepeatedWords(mappedWords, filePath);
    }
  }
}

function mapRepeatedWords(text = "") {
  const words = text.split(" ");
  const _ = {
    wordsIndex: -1,
    previousWord: "",
    lineCounter: 0,
    lineIndex: 0,
    mappedWord: {},
  };
  for (let word of words) {
    _.wordsIndex++;
    if (word === "\n") {
      _.lineCounter++;
      continue;
    }
    if (isEmpty(word)) continue;
    word = cleanWord(word);
    _.previousWord = _.wordsIndex > 0 ? cleanWord(words[_.wordsIndex - 1]) : "";
    if (word !== _.previousWord) continue;
    _.lineIndex = `line${_.lineCounter}`;
    if (_.mappedWord[word]?.hasOwnProperty(_.lineIndex)) {
      _.mappedWord[word][_.lineIndex]++;
    } else {
      _.mappedWord[word] = {
        ..._.mappedWord[word],
        [_.lineIndex]: 2,
      };
    }
  }
  return _.mappedWord;
}

function cleanText(text) {
  return text.replaceAll("\r", "").replaceAll("\n", " \n ").trim();
}

function cleanWord(word) {
  return removePunctuation(word).trim().toLowerCase();
}

function removePunctuation(word) {
  return word.replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/gim, "");
}

function displayrepeatedWords(mappedWords = {}, filePath = "") {
  const mappedWordsList = Object.entries(mappedWords);
  if (mappedWordsList.length > 0) {
    const repeatedWordsString = mappedWordsList
      .map(([word, lineObj]) => {
        const lineRepetitionsList = Object.entries(lineObj).map(
          ([lineNumber, repetitionsCounter]) =>
            `- Repeated ${repetitionsCounter} times in line ${
              parseInt(lineNumber.split("line")[1]) + 1
            }`
        );
        return `Word "${word}" \n${lineRepetitionsList.join("\n")}`;
      })
      .join("\n\n");
    console.log(`\n\n--{Repeated words in the file "${filePath}"}--\n\n`);
    console.log(repeatedWordsString);
  } else {
    console.error(`[Error] No repeated words found in the file "${filePath}"!`);
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
    if (showError) {
      console.log(`[Warning] Not empty word "${word}"!`);
    }
    return true;
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

module.exports = { cleanText, mapRepeatedWords };
