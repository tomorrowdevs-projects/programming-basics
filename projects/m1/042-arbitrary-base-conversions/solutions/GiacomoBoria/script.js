/*Write a program that allows the user to convert a number from one base to another. 
Your program should support bases between baseNumber and 16 for both the input number and the result number. 
If the user chooses a base outside of this range then an appropriate error message should be displayed and the program should exit. 
Divide your program into several functions, including a function that converts from an arbitrary base to base 10, a function that converts from base 10 to an arbitrary base, and a main program that reads the bases and input number from the user.*/

// Converting different base numbers to base 10
function calcConvertDecimal(number, baseNumber) {
    number = parseInt(number, baseNumber);
    return number;
  }
  // Conversion numbers base 10 to other base
  function calcConvertNumber(number, baseNumber) {
    number = number.toString(baseNumber);
    return number;
  }
  
  function CalcArbitraryConversion(number, baseNumber, baseEnd) {
    
    if (baseNumber < 2 || baseNumber > 16 || baseEnd < 2 || baseEnd > 16) {
      alert("The base you entered or output is invalid.\nEnter a number from 2 to 16.");
      
      // If the user wants a conversion from base 10 to other
    } else if (baseNumber == 10 || baseEnd == 10) {
      alert(`Your number (${number}) in base 10 convert to base ${baseEnd} is: ${calcConvertNumber(number, baseEnd)}`);
      
    // if the user Conversion from base other than 10
    } else if (baseNumber != 10) {
  
      // Convert the number to base 10 for the conversion function to base other than 10
      let numberInBaseDecimal = calcConvertDecimal(number, baseNumber);
  
      alert(`Your number (${number}) in base ${baseNumber} converted to base 10 is: ${calcConvertDecimal(number, baseNumber)}`);
      
      alert(`Your number (${number}) in base ${baseNumber} converted to base ${baseEnd} is: ${calcConvertNumber(number, baseEnd)}`);
    }
   
  }
  
  const number = Number(prompt("Type the number you wish to convert:"))
  const baseNumber = prompt("Type the starting base of your number\n(Insert number from 2 to 17")
  const baseEnd = Number(prompt("Type in the conversion base you want\n(Insert number from 2 to 17"))
  
  alert(CalcArbitraryConversion(number, baseNumber, baseEnd));