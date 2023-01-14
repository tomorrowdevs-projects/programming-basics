/*
LOGIC
Create a function that get an array as parameter. 
Add a number after the first element of the array.
Compare the element before and after the number.
If they are equal, increase the number and remove the letter after the number. 
Continue until they are equal
If they are not equal, run the function for the part of the array after the number and concat it to the first part of the array.
*/

// ------------------------------------------------------------------------------
// SOLUTION

function compress(list) {
  // Clone the list in order to avoid to modify it.
  const tempList = [...list];

  // Add a number in the list
  tempList.splice(1, 0, 1);

  // Find the number in the list and store its value and index
  let includeNumber = tempList.find((value) => typeof value === "number");
  const numberIndex = tempList.indexOf(includeNumber);

  // Return if the list's length is 2
  if (tempList.length === 2) {
    return tempList;
  }

  // Check the value before and after the number
  while (tempList[numberIndex - 1] === tempList[numberIndex + 1]) {
    tempList[numberIndex]++;
    tempList.splice(numberIndex + 1, 1);
  }

  // Call the function again for the next letter
  return tempList.slice(0, 2).concat(compress(tempList.splice(2)));
}

// ------------------------------------------------------------------------------
// TEST

const test1 = [
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "B",
  "B",
  "B",
  "B",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "B",
];
const compressedTest1 = compress(test1);
const result1 = ["A", 12, "B", 4, "A", 6, "B", 1];
console.log(compressedTest1.join() === result1.join());
