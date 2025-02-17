/*Write a program that reads integers from the user and stores them in an array. Use 0 as a sentinel value to mark the end of the input. Once all of the values have been read your program should display them (except for the 0) in reverse order, with one value appearing on each line.*/

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

/* In addition to reverse if you want to sort descendingly.
  number.sort(function(a, b) {
  return a - b;
}); 
*/

number.reverse();

alert(`Your numbers in reverse order look like this:\n${number.join("\n")}`)