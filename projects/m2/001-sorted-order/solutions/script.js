/*Write a program that reads integers from the user and stores them in an array. 
Your program should continue reading values until the user enters 0. 
Then it should display all of the values entered by the user (except for the 0) in ascending order, with one value appearing on each line. 
Use either the sort method or the sorted function to sort the array.*/

let userInput;
const number = [];

while (userInput != 0) {
  
  userInput = Number(prompt("Type a number or type 0 to exit the program: "));

  if (isNaN(userInput)) { 
    
    alert("This is not a number!")  
    
  } else if (userInput === 0) { // instead of using the pop method I add an else if to not have the 0 included in the array
    
    break;
    
  } else {
    number.push(userInput)
  }
  
}

number.sort(function(a, b) {
  return a - b;
});

alert(number)
alert(number.join("\n"))