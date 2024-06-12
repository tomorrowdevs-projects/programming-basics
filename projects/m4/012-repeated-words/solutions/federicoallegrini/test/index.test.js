process.argv = ["node", "index.js", "test\\test.txt"];

const {
  empty,
  noRepetitions,
  multipleRepetitions,
  multipleRepetitionsObject,
} = require("./testValues");
const { cleanText, mapRepeatedWords } = require("../index");

test(`[mapRepeatedWords] `, () =>
  expect(mapRepeatedWords(cleanText(empty))).toStrictEqual({}));

test(`[mapRepeatedWords] `, () =>
  expect(mapRepeatedWords(cleanText(noRepetitions))).toStrictEqual({}));

test(`[mapRepeatedWords] `, () =>
  expect(mapRepeatedWords(cleanText(multipleRepetitions))).toStrictEqual(
    multipleRepetitionsObject
  ));
