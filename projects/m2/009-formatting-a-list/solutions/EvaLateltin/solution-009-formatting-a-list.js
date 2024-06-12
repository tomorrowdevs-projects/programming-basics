/*
LOGIC
Function that inputs from the user: 
- Prompt to get the input
- Store the input in an array
- Keep asking for input until the user enter a blank space

Function that formats the list: 
- Create a variable that holds an empty string
- If the array length is 1, add the only value of the array to the string and the return it
- If the array length is greater than 1, loop through all the array values and add them to the string, followed by a comma, except for the last value. 
- Add "and" to the string, and then the last value
- Return the string
*/
const inputArray = [];

function getInput() {
  const input = prompt("Enter a word. Enter a blank space to finish.");
  if (input === "" || input === null) {
    return;
  } else {
    inputArray.push(input);
    getInput();
  }
}

function makeAList(arrayOfWords) {
  getInput();
  let list = "";
  if (arrayOfWords.length === 0) {
    list === "Your list is empty.";
    return list;
  } else if (arrayOfWords.length === 1) {
    list === arrayOfWords[0];
    return list;
  } else {
    for (let i = 0; i < arrayOfWords.length - 1; i++) {
      list += arrayOfWords[i] + ", ";
    }
  }
  list += "and " + arrayOfWords[arrayOfWords.length - 1] + ".";
  alert(list);
}

makeAList(inputArray);
