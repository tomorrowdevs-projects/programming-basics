function flattenArray(arr) {
  let flatArr = [];
  if (arr.length == 0) return arr;
  if (!Array.isArray(arr[0])) flatArr = flatArr.concat(arr[0], flattenArray(arr.slice(1)));
  if (Array.isArray(arr[0])) flatArr = flatArr.concat(flattenArray(arr[0]), flattenArray(arr.slice(1)));
  return flatArr
}

alert(flattenArray([1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]))