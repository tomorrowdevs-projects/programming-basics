const stringOfWords = require("../utils");

test("Simple text", () => {
    const result = stringOfWords("This is an example of text.");
    expect(result).toEqual(["This", "is", "an", "example", "of", "text"]);
});

test("Void text", () => {
    const result = stringOfWords("   ");
    expect(result).toEqual([]);
});

test("Just symbols", () => {
    const result = stringOfWords(",. , . ! $");
    expect(result).toEqual([]);
});

test("Single word", () => {
    const result = stringOfWords("  ! word ) ");
    expect(result).toEqual(["word"]);
});