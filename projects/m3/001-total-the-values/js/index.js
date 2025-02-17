/*
Write a program that reads values from the user until a blank line is entered. 
Display the total of all of the values entered by the user (or 0.0 if the first 
value entered is a blank line).
Complete this task using recursion.
Your program may not use any loops.
Hint: The body of your recursive function will need to read one value from the 
user, and then determine whether or not to make a recursive call. Your function 
does not need to take any arguments, but it will need to return a numeric result.
*/

function getSum() {
  /*
  * The function sums the values entered by the user witch recursion
  * {n} input variable
  * If stops the programme when the input is === to a blank/empty space
  * Ex: 
  I call n = 2 != "" => else
  II call n = 4 != "" => else
  III call n = 5 != "" => else
  IV call n = "" => return

  III n = "" + 5 
  II n = 5 + 4
  I n = 9 + 2
  return 11 {number}
  */ 
  const n = prompt("Type in the number you wish to sum.\nType a blank space to close the programme.");

  if (n === "" || n === " " || isNaN(n)) {
    return 0.0;
  } else {
    return +n + getSum();
  }
}
