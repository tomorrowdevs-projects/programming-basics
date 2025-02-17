/*
LOGIC
Create a function that stores as a variable a prompt from the user.
Return: 
- 0 if the prompt value is equal to an empty string
- the sum of the entered value plus the function itself if the value is a number
- if a value that is not a number is entered, the value is converted to 0 and the function keeps running
*/

function getSum() {
  const value = prompt(
    "Enter a number. Enter an empty space to get the sum of the values."
  );
  return value === "" ? 0.0 : isNaN(value) ? 0 + +getSum() : +value + +getSum();
}

console.log(getSum());
