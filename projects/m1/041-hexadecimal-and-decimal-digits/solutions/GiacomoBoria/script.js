/*Write two functions, hex2int and int2hex, that convert between hexadecimal digits (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E and F) and decimal (base 10) integers. The hex2int function is responsible for converting a string containing a single hexadecimal digit to a base 10 integer, while the int2hex function is responsible for converting an integer between 0 and 15 to a single hexadecimal digit. Each function will take the value to convert as its only parameter and return the converted value as its only result. Ensure that the hex2int function works correctly for both uppercase and lowercase letters. Your functions should display a meaningful error message and end the program if the parameter’s value is outside of the expected range.*/

function int2hex(deNum) {
    return deNum.toString(16);
  }
  
  
  function hex2int(hexNum) {
    const convert = (parseInt(hexNum, 16));
    return convert;
  }
  
  const choiceConvert = prompt("Type D if you want to convert a decimal number to hexadecimal\nType H if you want to convert a hexadecimal number to decimal").toUpperCase()
  
  if(choiceConvert === "D") {
    const userInput = Number(prompt("Insert your number: "));
    alert(int2hex(userInput));
    
  } else if (choiceConvert === "H") {
    const userInput = prompt("Insert your number: ");
    alert(hex2int(userInput));
  }