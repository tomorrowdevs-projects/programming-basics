
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) 
const test1 = [1, 2, 3, [4, 5]];
const test2 = [1, [2, [3, 4], [[5]]]];
const test3 = [[1],[2],[3]];
const test4 = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];

const flatten = function (arr) {
    let result = [];
    //base case
    if (arr.length === 0) return result;
    // if the value is an array, recall the function on that value
    if (Array.isArray(arr[0])) result = result.concat(flatten(arr[0]));
    // if the value is not an array, push that value in the result
    else result.push(arr[0]);
    // recall the function on the next value
    result = result.concat(flatten(arr.slice(1)));
    
    return result;
}

console.log(flatten(test1));
console.log(flatten(test2));
console.log(flatten(test3));
console.log(flatten(test4));
