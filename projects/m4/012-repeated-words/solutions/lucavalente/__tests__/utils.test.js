const checkForDuplicates = require("../utils");

test("Consecutive duplicates found.", () => {
    const result = checkForDuplicates(["Separate", "entrance", "welcomed", "sensible", "sensible", "laughing", "laughing", "why", "one", "moderate", "shy"]);
    expect(result).toEqual(["sensible", "laughing"]);
});

test("Consecutive duplicates not found.", () => {
    const result = checkForDuplicates(["Separate", "entrance", "sensible","welcomed", "sensible", "laughing","welcomed", "laughing", "why", "one", "moderate", "shy"]);
    expect(result).toEqual([]);
});

test("Void input list.", () => {
    const result = checkForDuplicates([]);
    expect(result).toEqual([]);
});

test("Lower & Upper.", () => {
    const result = checkForDuplicates(["SepaRate", "sEparAte"]);
    expect(result).toEqual(["separate"]);
});

test("Just strings into array.", () => {
    expect(() => checkForDuplicates([1, "separate"])).toThrow("You could use just an array of words!");
});

test("Array of string necessary.", () => {
    expect(() => checkForDuplicates("separate")).toThrow("You have to use an array of words as input!");
    expect(() => checkForDuplicates(1)).toThrow("You have to use an array of words as input!");
});
