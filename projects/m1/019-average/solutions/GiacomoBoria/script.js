/*In this exercise you will create a program that computes the average of a collection of values entered by the user. 
The user will enter 0 as a sentinel value to indicate that no further values will be provided. 
Your program should display an appropriate error message if the first value entered by the user is 0.

Hint: Because the 0 marks the end of the input it should not be included in the average.*/

const userInput = prompt("Enter the values for which you want to know the average. Type 0 to end the collection", 0).split(` `)

/*I initialize 2 variables:
- Average for internal calculation of conditions
- Sum = 0 to sum the values of the array*/
let averege;
let sum = 0;

// Loop to sum the values of the array
for (i = 0; i < userInput.length; ++i) {
  sum += +userInput[i];
}

 // Condition 0 like first value
  if (userInput.indexOf("0") == 0) {
  averege = sum / (userInput.length)
  alert("Sorry, the first value can't be equal to 0!")
 // Condition 0 like last value
} else if (userInput.at(-1)  == "0") {
  averege = sum / (userInput.length - 1);
} else {
  averege = sum / (userInput.length);
}
 alert(`The average is: ${averege}`)
