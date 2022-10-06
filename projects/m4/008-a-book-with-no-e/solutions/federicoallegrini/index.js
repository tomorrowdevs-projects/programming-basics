const fs = require("fs");

const argsFilePath = process.argv.slice(2);

if (checkArgsLength(argsFilePath)) {
  lettersProportion(argsFilePath[0]);
}

function lettersProportion(filePath = "") {
  if (isValidPath(filePath) && fileExists(filePath)) {
    const fileContent = readFileContent(filePath);
    if (fileContent) {
      const words = removeNewLine(fileContent).split(" ");
      const alphabetLetters = alphabetLetterProportionInWordsList(words);
      // Proportion of letters for each word
      displayProportion(alphabetLetters);
      // Calculate percentage of presence of each letter in all words
      const lowProportionLetter = lowLetterPercentagePresence(
        alphabetLetters,
        words.length
      );
      // Letter with lower percentage presence in all text
      displayLessPresentWord(lowProportionLetter);
    }
  }
}

function alphabetLetterProportionInWordsList(words = "") {
  const alphabetLetters = generateAlphabetLetters();
  words.forEach((word) =>
    removePunctuation(word)
      .toLowerCase()
      .split("")
      .forEach((letter, index, letterList) => {
        alphabetLetters[letter].totalTimes++;
        // Check if the letter is already present in the current word
        if (!alphabetLetters[letter].alreadyInWord) {
          // If not increment the word counter and set the already value to true
          alphabetLetters[letter].inWords++;
          alphabetLetters[letter].alreadyInWord = true;
        }
        // If this is the last letter of the word
        if (index + 1 === letterList.length) {
          // Reset the already value for all letters of the word
          letterList.forEach(
            (letterOfWord) =>
              (alphabetLetters[letterOfWord].alreadyInWord = false)
          );
        }
      })
  );
  return alphabetLetters;
}

function generateAlphabetLetters() {
  return Object.fromEntries(
    [...Array(26).keys()].map((n) => [
      String.fromCharCode(n + 97),
      { totalTimes: 0, inWords: 0, alreadyInWord: false },
    ])
  );
}

function displayProportion(alphabetLetters) {
  const lettersProportion = Object.entries(alphabetLetters)
    .map(
      ([letter, { totalTimes, inWords }]) =>
        `- Letter "${letter.toUpperCase()}" is present ${totalTimes} in ${inWords} words.\n`
    )
    .join("");
  console.log(
    `[Result] Proportion of the letters in current text:\n${lettersProportion}`
  );
}

function lowLetterPercentagePresence(
  alphabetLetters,
  numberOfWords,
  calculatedPercentage = 0
) {
  return Object.entries(alphabetLetters).reduce(
    ({ lowLetter, percentrage }, [letter, { totalTimes }]) => {
      calculatedPercentage = (totalTimes / numberOfWords) * 100;
      if (calculatedPercentage < percentrage) {
        return {
          lowLetter: letter,
          percentrage: calculatedPercentage,
        };
      }
      return { lowLetter, percentrage };
    },
    {
      lowLetter: "",
      percentrage: 100,
    }
  );
}

function displayLessPresentWord(lowProportionLetter) {
  console.log(
    `[Result] The letter "${lowProportionLetter.lowLetter.toUpperCase()}" is less present, only in ${lowProportionLetter.percentrage.toFixed(
      2
    )}% of words.`
  );
}

function removeNewLine(text = "") {
  return text.replaceAll("\n", " ").replaceAll("\r", " ");
}

function removePunctuation(word) {
  return word
    .split("")
    .filter((char) => /[a-zA-Z]/gim.test(char))
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

module.exports = {
  generateAlphabetLetters,
  removeNewLine,
  removePunctuation,
  checkArgsLength,
  isValidPath,
  fileExists,
  readFileContent,
};
