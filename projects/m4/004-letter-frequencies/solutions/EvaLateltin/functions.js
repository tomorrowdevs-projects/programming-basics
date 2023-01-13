function getArray(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z]/gi, "")
    .split("")
    .sort();
}

function sortObject(input) {
  const keysSorted = Object.keys(input).sort(function (a, b) {
    return input[b] - input[a];
  });
  const sortedObject = {};
  keysSorted.forEach((key) => {
    sortedObject[key] = input[key];
  });
  return sortedObject;
}

module.exports.getArray = getArray;
module.exports.sortObject = sortObject;
