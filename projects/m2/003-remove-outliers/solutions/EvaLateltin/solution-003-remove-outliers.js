/* LOGIC
Create an array
Create a function that gets a value from the user
Create a loop that keeps asking the value until the user input F --- Break the loop when the user inputs F
Create a function that gets the "n" parameter from the user -> n must me greater than 0
Check if the array contains at least n*2 numbers; if it doesn't, keep asking for the remaining numbers
Push the value to the array
Sort the array
Remove the outliers
Alert the array
*/

let parameter;
const enteredValues = [];
const valueText = "Enter a value. Enter F to finish.";
const parameterText =
  "Enter the parameter n: from the value list, the n largest elements and the n smallest elements will be removed. The parameter must be greater or equal to zero.";
const inputErrorText = "The input must be a NUMBER. Enter F to finish.";

function getInput(text) {
  const value = prompt(text); // I am not transforming the value into a number here, since I first need to check if the entered value is equal to F (condition to finish)
  if (value.toUpperCase() === "F") {
    // Condition to exit the loop
    getParameter();
    checkEnteredValuesLength();
    return;
  } else if (Object.is(+value, NaN) || value === "") {
    // Handle invalid input
    getInput(inputErrorText); // Change the prompt text to help the user to use the function correctly -- I use a recursive function in order to change the text based on the user action
  } else if (+value !== 0) {
    enteredValues.push(value);
    getInput(valueText);
  }
}

function getParameter() {
  // This function gets the parameter and checks if it's entered correctly
  if (parameter === undefined) {
    let enteredParameter = +prompt(parameterText);
    enteredParameter >= 0 ? (parameter = enteredParameter) : getParameter();
  } else {
    return;
  }
}

function checkEnteredValuesLength() {
  if (enteredValues.length >= parameter * 2) {
    // Check if the list is long enough
    const orderedValues = Array.from(enteredValues) // Use this method to maintain the original order for the array enteredValues
      .sort((a, b) => a - b) // Sort the list of numbers - Only for the new array
      .slice(parameter, enteredValues.length - parameter); //Remove the outliers from the new array
    alert(
      `Cleaned list:\r\n${orderedValues.join(
        "\r\n"
      )}\r\nOriginal list:\r\n${enteredValues.join("\r\n")}`
    );
  } else {
    getInput(
      // Request to input other values
      `You should input at least ${
        +parameter * 2
      } values. You still need to enter at least ${
        +parameter * 2 - enteredValues.length
      } other values. The parameter is set to ${parameter}.`
    );
  }
}

getInput(valueText); // Initialize our function
