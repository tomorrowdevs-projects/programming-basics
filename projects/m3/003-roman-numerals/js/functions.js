function romanToInteger(roman) {
  const romanNumerals = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  };

  if (roman === '') {
    return 0;
  }

  const firstChar = roman[0];
  const value = romanNumerals[firstChar];

  if (roman.length === 1) {
    return value;
  }

  const secondChar = roman[1];
  const nextValue = romanNumerals[secondChar];

  if (value < nextValue) {
    return (nextValue - value) + romanToInteger(roman.slice(2));
  } else {
    return value + romanToInteger(roman.slice(1));
  }
}

module.exports = {
  romanToInteger
};



