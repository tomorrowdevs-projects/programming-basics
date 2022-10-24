const checkWords = require("../utils").checkWords;

test("No words respect rule", () => {
    const result = checkWords(["This", "is", "an", "example", "of", "text"]);
    expect(result).toEqual([]);
});

test("Rule respected", () => {
    const result = checkWords(["abstemiously", "abstenious", "abstemiously"]);
    expect(result).toEqual(["abstemiously", "abstemiously"]);
});

test("Vowels and Y not in order", () => {
    const result = checkWords(["abstenious", "bstemaiously"]);
    expect(result).toEqual([]);
});

test("Not all vowels in order", () => {
    const result = checkWords(["abstimeously", "bstemaiously"]);
    expect(result).toEqual([]);
});

