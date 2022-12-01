/*
LOGIC
Get two lists from the user with the prompt function.
The elements from the entered lists are divided by a blank space. 
Split the lists (that are strings) into arrays: 
- The first array is the main list
- The second array is the list that we should check if it is a sub-list of the first one.

Create a function that: 
- for the first element of the second array, check if the first array includes it. 
- if it doesn't include it, then return false. In this case we are sure that the second list is not a sublist of the first list.
- if it includes it, then return the position ("position X") where it is found in the first array. 
- Check if the following elements of the second array are equals to the elements of the first array that comes after the 
"position X". 
    - If they are equals, return true
    - If they are not equal, call this function again, since there might me another substrint. 
        The first array will be sliced and will begin from "position X" + 1.
*/

const firstList = prompt(
  "Enter the first list. Separate each value with a blank space."
).split(" ");
const secondList = prompt(
  "Enter the second list. Separate each value with a blank space."
).split(" ");

function isSublist(mainList, subList) {
  const position = mainList.indexOf(subList[0]);
  if (position === -1) {
    // If the main list doesn't include the first value of the other list, than we are sure that it is not a sublist
    return false;
  } else {
    for (let i = 1; i < subList.length; i++) {
      //
      if (subList[i] === mainList[i + position]) {
        continue;
      } else {
        isSublist(mainList.slice(position + 1), subList); // Run the function for each time that we encounter the first element of the second list in the main list
      }
    }
    return true;
  }
}

console.log(isSublist(firstList, secondList));
