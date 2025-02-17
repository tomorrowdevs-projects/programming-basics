
const getBinary = require("./getBinary");

test("convert 2 to 10", () => {expect(getBinary(2)).toBe("10")});
test("convert 10 to 1010", () => {expect(getBinary(10)).toBe("1010")});
test("result is not a number", () => {expect(getBinary(10)).not.toBeNaN()});