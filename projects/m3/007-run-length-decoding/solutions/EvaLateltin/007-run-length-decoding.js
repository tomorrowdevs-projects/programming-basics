/*
LOGIC
Take a compressed list as a parameter of a function. 
The function should check if the list contains a number. 
If there is not a number, return an empty array. This is our base case that allows to exit from the recursion.
If there is a number n, the function should replace it with n - 1 times the letter preceeding the number itself.
We repeat the letter n - 1 times because the letter has already the first appearance.
Run the function until there are numbers in the sliced list. 
*/

const compressedList = ["A", 12, "B", 4, "A", 6, "B", 1];

function decompress(list) {
  const includeNumber = list.find((value) => typeof value === "number");

  if (!includeNumber) {
    // base case
    return [];
  } else {
    // recursive step
    const numberIndex = list.indexOf(includeNumber);
    const tempList = list.slice(0, numberIndex + 1);
    tempList[numberIndex] = new Array(includeNumber - 1).fill(
      tempList[numberIndex - 1]
    );
    return tempList
      .concat(decompress(list.splice(tempList.length)))
      .flatMap((num) => num);
  }
}

console.log(decompress(compressedList));
