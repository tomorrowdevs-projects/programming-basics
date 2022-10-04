/*
LOGIC
Take a compressed list as a parameter of a function. 
The function should check if the list contains a number. 
If there is a number n, the function should replace it with n times the letter preceeding the number itself. 
Run the function until there are anymore numbers. 
*/

const compressedList = ["A", 12, "B", 4, "A", 6, "B", 1];

function decompress(list) {
  const includeNumber = list.find((value) => typeof value === "number");
  const numberIndex = list.indexOf(includeNumber);

  if (includeNumber) {
    list[numberIndex] = new Array(includeNumber).fill(list[numberIndex - 1]);
    decompress(list);
  }
  return list.flatMap((num) => num);
}

console.log(decompress(compressedList));
