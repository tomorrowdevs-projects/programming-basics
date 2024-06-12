
const totalInput = require("./totalInput");

test("summing 2 times 2 to equal 4", () => { expect(totalInput(2, 2)).toBe(4) } );
test("summing 6 times 4 to equal 24", () => { expect(totalInput(4, 6)).toBe(24) } );

console.log(totalInput());