const { addInfoToGenderList } = require("../index");
const {
  genderFemale,
  genderMale,
  name,
  years,
  year,
  rows,
  maleListWithNewYear,
  maleListWithoutNewYear,
} = require("./testValues");

test(`[addInfoToGenderList] Verify that the function adds a year to the list of years already present for the male list`, () => {
  const outputList = addInfoToGenderList(genderMale, [{ name, years }], {
    year,
    rows,
  });
  expect(outputList).toStrictEqual(maleListWithNewYear);
});

test(`[addInfoToGenderList] Verify that the function returns a list without additions in case there is an error (pass the wrong genre in the list)`, () => {
  const outputList = addInfoToGenderList(genderFemale, [{ name, years }], {
    year,
    rows,
  });
  expect(outputList).toStrictEqual(maleListWithoutNewYear);
});
