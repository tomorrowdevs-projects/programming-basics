function toDecimal(roman) {
  let romanNumbers = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
  }
  if (romanNumbers[roman[0]] >= romanNumbers[roman[1]] || roman.length == 1) {
    return romanNumbers[roman[0]] + toDecimal(roman.slice(1))
  } else if (romanNumbers[roman[0]] < romanNumbers[roman[1]]) {
    return romanNumbers[roman[1]] - romanNumbers[roman[0]] + toDecimal(roman.slice(2))
  } else return 0
}

alert(toDecimal(prompt("roman?")))