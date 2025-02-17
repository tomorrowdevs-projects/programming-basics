process.argv = ["node", "index.js", "2000", "2020"];

const { calculateBirthNumber, getMostBirthsName } = require("../index");
const {
  genderFemale,
  genderMale,
  rows,
  femaleMaxBirthNumber,
  maleMaxBirthNumber,
  femaleAllBirthNumber,
  maleAllBirthNumber,
  femaleMostBirthNumber,
  maleMostBirthNumber,
} = require("./testValues");

test(`[calculateBirthNumber] Verify that the function extracts from an array of names / gender / number of births, only the name of the chosen gender (female) with the highest number of births`, () =>
  expect(calculateBirthNumber(genderFemale, {}, rows)).toStrictEqual(
    femaleMaxBirthNumber
  ));

test(`[calculateBirthNumber] Verify that the function extracts from an array of names / gender / number of births, only the name of the chosen gender (male) with the highest number of births`, () =>
  expect(calculateBirthNumber(genderMale, {}, rows)).toStrictEqual(
    maleMaxBirthNumber
  ));

test(`[getMostBirthsName] Verify that the function extracts from an object of names / number of births, only the name of the gender (female) chosen with the highest number of births`, () =>
  expect(getMostBirthsName(femaleAllBirthNumber)).toStrictEqual(
    femaleMostBirthNumber
  ));

test(`[getMostBirthsName] Verify that the function extracts from an object of names / number of births, only the name of the gender (male) chosen with the highest number of births`, () =>
  expect(getMostBirthsName(maleAllBirthNumber)).toStrictEqual(
    maleMostBirthNumber
  ));
