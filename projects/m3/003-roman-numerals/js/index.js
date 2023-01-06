/*
I numeri romani sono costituiti dalle lettere M, D, C, L, X, V e I che rappresentano rispettivamente 1000, 500, 100, 
50, 10, 5 e 1. I numeri romani sono generalmente scritti a partire dal più grande dei numeri.
If a smaller value precedes a larger value then the smaller value is subtracted from the larger value that it 
immediately precedes, and that difference is added to the value of the number.
Create a recursive function that converts a Roman numeral to an integer.
{*/

function convertRomansInteger(romanNumber) {
  /*
  * the function converts a Roman numeral to an integer with recursion (base recursion romanNumber.length = 1)
  Ex MCD (1400)
  I call romanNumber.length = 3 sum = M (1000)  romanNumber.slice(1) = CD
  II call romanNumber.length = 2 (CD) sum = C (100)  romanNumber.slice(1) = D
  III call romanNumber.length = 1 (D) sum = D (500) 
  I call 500
  II call 500 - 100
  III call 400 + 1000
  * @param {romanNumber} arg (string)
  * @object {objRomanNumerals} Key Roman Numeral value Integer number
  * @param {sum} variable index for key object
  */
  const objRomanNumerals = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
  }
  
  const sum = objRomanNumerals[romanNumber[0]];
  
  if (romanNumber.length === 1) {
    
    return sum;
    
  } else if (objRomanNumerals[romanNumber[0]] > objRomanNumerals[romanNumber[1]]) {
    
    return sum + convertRomansInteger(romanNumber.slice(1));
    
  } else if (objRomanNumerals[romanNumber[0]] < objRomanNumerals[romanNumber[1]]) {
    
    return convertRomansInteger(romanNumber.slice(1)) - sum;
    
  }
  
}

// main program
const userRomanNumeral = prompt("Type in the Roman numeral you wish to convert").toUpperCase()
alert(`The number is: ${convertRomansInteger(userRomanNumeral)}`)
