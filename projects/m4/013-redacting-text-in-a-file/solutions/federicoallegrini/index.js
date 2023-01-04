const fs = require("fs");

const argsFilePath = process.argv.slice(2);

if (checkArgsLength(argsFilePath, 3)) {
  const [sourcePath, substitutionsPath, outputPath] = argsFilePath;
  redactingTextInAFile(sourcePath, substitutionsPath, outputPath);
}

function redactingTextInAFile(
  sourcePath = "",
  substitutionsPath = "",
  outputPath = ""
) {
  if (
    isValidPath(sourcePath) &&
    fileExists(sourcePath) &&
    isValidPath(substitutionsPath) &&
    fileExists(substitutionsPath) &&
    isValidPath(outputPath)
  ) {
    const sourceText = readFileContent(sourcePath);
    const substitutionsText = readFileContent(substitutionsPath);
    if (
      (sourceText || sourceText === "") &&
      (substitutionsText || substitutionsText === "")
    ) {
      const substituionsCounterMap = {};
      let thereAreSubstitutions = false;
      let asterisksSubstituion = "";
      let startSubstituionIndex = 0;
      let substitutedText = sourceText;
      let lowerSubstitutedText = substitutedText.toLowerCase();
      // There is a need to order the substitutions list from longest to shortest
      // This to avoid error in substitutions: smaller words replaced first with asterisks hide the longer words
      const substitutionsList = substitutionsText
        .split(",")
        .sort((a, b) => b.length - a.length);
      substitutionsList.forEach((substitution) => {
        substitution = cleanWord(substitution);
        while (lowerSubstitutedText.includes(substitution)) {
          if (!thereAreSubstitutions) thereAreSubstitutions = true;
          if (substituionsCounterMap?.[substitution]) {
            substituionsCounterMap[substitution]++;
          } else {
            substituionsCounterMap[substitution] = 1;
          }
          asterisksSubstituion = "".padEnd(substitution.length, "*");
          startSubstituionIndex = lowerSubstitutedText.indexOf(substitution);
          substitutedText = replaceAt(
            substitutedText,
            startSubstituionIndex,
            asterisksSubstituion
          );
          lowerSubstitutedText = replaceAt(
            lowerSubstitutedText,
            startSubstituionIndex,
            asterisksSubstituion
          );
        }
      });
      if (thereAreSubstitutions) {
        generateOutputFile(outputPath, substitutedText);
        displaySubstitutedText(substitutedText);
        displaySubstitutions(substituionsCounterMap);
      } else {
        displayNoSubstitutionError();
      }
    }
  }
}

function cleanWord(word) {
  return removePunctuation(word).trim().toLowerCase();
}

function removePunctuation(word) {
  return word.replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/gim, "");
}

function replaceAt(text, index, replacement) {
  return (
    text.substring(0, index) +
    replacement +
    text.substring(index + replacement.length)
  );
}
function generateOutputFile(outputPath, substitutedText) {
  try {
    fs.writeFileSync(outputPath, substitutedText);
  } catch (err) {
    console.error(
      `[Error] Cannot write output file "${path}"!`,
      `[Details] ${err.message}`
    );
  }
}
function displaySubstitutedText(substitutedText) {
  console.log(`[Result] Replaced text:\n${substitutedText}\n\n`);
}
function displaySubstitutions(substituionsCounterMap) {
  console.log(`[Result] Replaced words:\n`);
  Object.entries(substituionsCounterMap).forEach(([word, counter]) =>
    console.log(`The word "${word}" has been replaced ${counter} times.\n`)
  );
}
function displayNoSubstitutionError() {
  console.error(
    `[Error] No words to replace found in the text. No replacement occurred!`
  );
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
