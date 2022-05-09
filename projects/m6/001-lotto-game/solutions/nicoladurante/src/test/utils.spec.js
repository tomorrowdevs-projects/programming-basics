import { getFieldsValues, getNumbers, printSpaces } from "../app/utils";

test("getFieldsValues should return an array of two values if selectors parameter is a 2-length array", () => {
  document.body.innerHTML = `
    <input type="text" id="test-input" value="test"/>
    <br>
    <input type="text" id="test-input-2" value="test2"/>
    `;
  const selector = "#test-input";
  const secondSelector = "#test-input-2";
  const result = getFieldsValues([selector, secondSelector]);

  expect(result).toBeInstanceOf(Array);
  expect(result).toHaveLength(2);
  expect(result).toEqual(["test", "test2"]);
});

test("getFieldsValues should return an array with null value, if a selector is not valid", () => {
  document.body.innerHTML = `
      <input type="text" id="test-input" value="test"/>
      <br>
      <input type="text" id="test-input-2" value="test2"/>
      `;
  const selector = "invalid";
  const secondSelector = "#test-input-2";
  const result = getFieldsValues([selector, secondSelector]);

  expect(result).toBeInstanceOf(Array);
  expect(result).toHaveLength(2);
  expect(result).toEqual([null, "test2"]);
});

test("getFieldsValues should return an empty array if selectors parameter is not of array type", () => {
  document.body.innerHTML = `<input type="text" id="test-input" value="test"/>`;
  const selector = "test-input";
  const result = getFieldsValues(selector);

  expect(result).toBeInstanceOf(Array);
  expect(result).toHaveLength(0);
});

test("getNumbers should return an array from minValue to maxValue", () => {
  const minValue = 5;
  const maxValue = 12;

  const numbers = getNumbers(minValue, maxValue);
  expect(numbers).toBeInstanceOf(Array);
  expect(numbers).toHaveLength(8);
  expect(numbers).toEqual([5, 6, 7, 8, 9, 10, 11, 12]);
});

test("getNumbers should return an empty array if minValue > maxValue", () => {
  const minValue = 12;
  const maxValue = 5;

  const numbers = getNumbers(minValue, maxValue);
  expect(numbers).toBeInstanceOf(Array);
  expect(numbers).toHaveLength(0);
  expect(numbers).toEqual([]);
});

test("getNumbers should throw an error if minValue or maxValue is not a number", () => {
  const minValue = 2;
  const maxValue = "5a";

  expect(() => {
    getNumbers(minValue, maxValue);
  }).toThrow(
    "getNumbers was executed with parameters of type not equal to number!"
  );
});

test("printSpaces should return a string of &nbsp;", () => {
  const num = 5;

  const spaces = printSpaces(num);

  expect(spaces).toBe("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
});

test("printSpaces should return an empty string, if num is negative", () => {
  const num = -1;

  const spaces = printSpaces(num);

  expect(spaces).toBe("");
});
