const hexadecimal = prompt("Enter a hexadecimal digit between 0 and F");
const decimal = parseInt(prompt("Enter an integer between 0 and 15"));
const numberHexadecimalToDecimal = hex2int(hexadecimal);
const numberDecimaltoHexadecimal = int2hex(decimal);

alert(numberHexadecimalToDecimal ? "Number in decimal : " + numberHexadecimalToDecimal : "The entered value is not between 0 and F" );
alert(numberDecimaltoHexadecimal ? "Number in hexadecimal : " + numberDecimaltoHexadecimal : "The entered value is not between 0 and 15");

// It is responsible for converting a string containing a single hexadecimal digit into a base 10 integer.
function hex2int(number){

  // Converts a string representing a base 16 number to a base 10 integer
  number = parseInt(number, 16)

  if(number < 0 || number > 15){
    return false;
  }

  return number;

}

// It is responsible for converting an integer between 0 and 15 into a single hexadecimal digit.
function int2hex(number){

  if(number < 0 || number > 15){
    return false;
  }

  // Converts a base 10 integer to a string representing a base 16 number.
  number = parseInt(number).toString(16).toUpperCase();

  return number;

}