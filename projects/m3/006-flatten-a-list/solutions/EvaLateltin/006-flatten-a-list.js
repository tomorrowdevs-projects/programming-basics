/*
LOGIC
Use a recursive function with  flatMap 
*/

const arr1 = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]];

function flattened(arrayWithNestings) {
  return arrayWithNestings.flatMap((num) =>
    typeof num === "object" ? flattened(num) : num
  );
}

console.log(flattened(arr1));
