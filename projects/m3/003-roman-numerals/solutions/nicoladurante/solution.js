let dictionary = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

/*
  Converts value to the respective integer by searching on the dictionary.
  If the value isn't found, return 0
  */
function getIntegerRappr(numeralPart) {
  return dictionary[numeralPart] ?? 0;
}

function convertRomanNumeralToInteger(numeral) {
  let result;
  let index = 0;

  if (numeral === "") {
    return 0;
  }

  let num1 = getIntegerRappr(numeral[index]);
  let num2 = getIntegerRappr(numeral[index + 1]);

  if (num1 >= num2) {
    result = num1 + convertRomanNumeralToInteger(numeral.slice(index + 1));
  } else {
    result =
      num2 - num1 + convertRomanNumeralToInteger(numeral.slice(index + 2));
  }

  return result;
}

function main() {
  while (true) {
    let value = prompt("Enter a numeral: ");
    alert("The converted number is: " + convertRomanNumeralToInteger(value));
  }
}

main();
