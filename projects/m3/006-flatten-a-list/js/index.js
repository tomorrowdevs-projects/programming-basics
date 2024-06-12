/*
The following recursive algorithm can be used to flatten a list named data:

If data is empty then Return the empty list
If the first element in data is a list then
    Set l1 to the result of flattening the first element in data
    Set l2 to the result of flattening all of the elements in data, except the first
    Return the concatenation of l1 and l2
If the first element in data is not a list then
    Set l1 to a list containing only the first element in data
    Set l2 to the result of flattening all of the elements in data, except the first Return 
the concatenation of l1 and l2
*/
function getFlatteningArray(array) {
  /*
  * The function flattens a multi-level array if the array is only one level it returns the 
array
  * @param {array} input array
  * return {l1} Checks and flattens whether the first data item in the array is an array
  * return {l2} Checks and flattens if the first data in the array is not an array
  */

  if (Array.isArray(array) && array.length === 0) {
    return array;
  } else if (Array.isArray(array[0])) {
    
    const l1 = getFlatteningArray(array[0]).concat(getFlatteningArray(array.slice(1)))
    return l1
    
  } else if (!Array.isArray(array[0])) {
    
    const l2 = [array[0]].concat(getFlatteningArray(array.slice(1)))
    return l2
    
  }
}

const gino = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]];
console.log(getFlatteningArray(gino))
