
const getEditDistance = require("./getEditDistance");


test(`"ciao" and "cia" edit distance to be 1`, () => { expect(getEditDistance("ciao", "cia")).toBe(1)});
test(`"sitting" and "kitten" edit distance to be 3`, () => { expect(getEditDistance("sitting", "kitten")).toBe(3)});
test(`"" and "kitten" edit distance to be 6`, () => { expect(getEditDistance("", "kitten")).toBe(6)});
test(`"sitting" and "" edit distance to be 7`, () => { expect(getEditDistance("sitting", "")).toBe(7)});
test(`"ciao" and "cia" not to be undefined`, () => { expect(getEditDistance("ciao", "cia")).not.toBeUndefined()});