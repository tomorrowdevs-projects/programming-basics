/*Tokenizing a String */

function getTokenString(stringExpressions) {
  
    const regexOperators = /[\⌃\*\/+-]/g;
    const regexParentheses = /[\{}()\[\]]/g;
    const regexNumbers = /[0-9]\d*/g;
   
  
    const operators = stringExpressions.match(regexOperators)
    const parentheses = stringExpressions.match(regexParentheses)
    const numbers = stringExpressions.match(regexNumbers)
  
  alert(`The numbers in your Expressions: ${numbers.join(" ")}\nThe Parentheses are: ${parentheses.join(" ")}\nThe Operators are: ${operators.join(" ")}`)
  }
  
  stringExpressions = prompt("Type your expression:")
  alert(getTokenString(stringExpressions))