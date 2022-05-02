/**
 * Take an array of selectors and returns an
 * array of values. Each value is taken by the DOM using
 * document.querySelector method. If selectors is not an array,
 * returns empty array
 * @param {string[]} selectors
 * @returns {string[]} arrayOfValues
 */
export const getFieldsValues = (selectors) => {
  if (!Array.isArray(selectors)) return [];

  return selectors.map((selector) => document.querySelector(selector).value);
};

/**
 * Take two numbers as parameters and returns an array of numbers
 * between minValue and maxValue (inclusive)
 * @param {number} minValue
 * @param {number} maxValue
 * @returns an array of numbers from minValue to maxValue
 */
export const getNumbers = (minValue, maxValue) => {
  let numbers = [];

  if (!Number(minValue) || !Number(maxValue)) {
    throw new Error(
      "getNumbers was executed with parameters of type not equal to number!"
    );
  }
  for (let i = minValue; i <= maxValue; i++) {
    numbers.push(i);
  }
  return numbers;
};
