/* 
LOGIC
Create an object. 
Create a function reverseLookup: 
- The function will create an array of all the keys
- In this array, find all the keys that equals the given value
- Use the filter method in order to get all the corrisponding values
*/

const searchObject = {
  one: 1,
  two: 2,
  three: 3,
  uno: 1,
  due: 2,
  tre: 3,
  un: 1,
  deux: 2,
  trois: 3,
};

function reverseLookup(object, value) {
  return Object.keys(object).filter((key) => object[key] === value);
}

console.log(reverseLookup(searchObject, 1));
