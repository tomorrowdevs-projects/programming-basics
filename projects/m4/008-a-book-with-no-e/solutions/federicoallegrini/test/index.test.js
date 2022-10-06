// Import test values
const {
  testPath,
  invalidPath,
  emptyFilePath,
  aphabetLettersObject,
  newLineText,
  noNewLineText,
  testText,
  punctuationWord,
  noPunctuationWord,
} = require("./testValues");

// Execute main program with the test file
process.argv = ["node", "index.js", testPath];

// Import function to test
const {
  generateAlphabetLetters,
  removeNewLine,
  removePunctuation,
  checkArgsLength,
  isValidPath,
  fileExists,
  readFileContent,
} = require("../index");

// Test generation of alphabet letters object function
test("[generateAlphabetLetters] Verify that the function generate an object with all 26 letters as key and object as value", () =>
  expect(generateAlphabetLetters()).toStrictEqual(aphabetLettersObject));

// Test deletion of new line in a text function
test("[removeNewLine] Verify that the fuction return a text without new line characters", () =>
  expect(removeNewLine(newLineText)).toBe(noNewLineText));

// Test deletion all punctuation in a text function
test("[removePunctuation] Verify that the fuction return a word without any punctuation", () =>
  expect(removePunctuation(punctuationWord)).toBe(noPunctuationWord));

// Test check args length function
test("[checkArgsLength] Verify that the function return true when there is only one element in array", () =>
  expect(checkArgsLength(["test\\test.txt"])).toBe(true));

test("[checkArgsLength] Verify that the function return false when there isn't element in array", () =>
  expect(checkArgsLength([])).toBe(false));

test("[checkArgsLength] Verify that the function return false when there are more than one element in array", () =>
  expect(checkArgsLength(["1", "2"])).toBe(false));

// Test valid path function
test(`[isValidPath] Verify that the path provided is valid "${testPath}"`, () =>
  expect(isValidPath(testPath)).toBe(true));

test(`[isValidPath] Verify that the path provided isn't valid "${invalidPath}"`, () =>
  expect(isValidPath(invalidPath)).toBe(false));

test(`[isValidPath] Verify that an empty path isn't valid`, () =>
  expect(isValidPath("")).toBe(false));

// Test file existstance function
test(`[fileExists] Verify that the file "${testPath}" exists`, () =>
  expect(fileExists(testPath)).toBe(true));

test(`[fileExists] Verify that the file "${invalidPath}" doesn't exists`, () =>
  expect(fileExists(invalidPath)).toBe(false));

// Test read file function
test(`[readFileContent] Verify that the file "${testPath}" is readed in correct way and the content is equal to test text`, () =>
  expect(readFileContent(testPath)).toBe(testText));

test(`[readFileContent] Verify that the function return a false value when the file "${invalidPath}" doesn't exists`, () =>
  expect(readFileContent(invalidPath)).toBe(false));

test(`[readFileContent] Verify that the function return a false value when the file content is empty`, () =>
  expect(readFileContent(emptyFilePath)).toBe(false));
