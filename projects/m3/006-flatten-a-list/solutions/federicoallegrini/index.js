function flattenList(data) {
  const dataLength = data.length;
  if (dataLength === 0) {
    return [];
  }
  let l1 = data[0];
  let l2 = data.slice(1, dataLength);
  if (Array.isArray(l1)) {
    l1 = flattenList(l1);
  } else {
    l1 = [l1];
  }
  l2 = flattenList(l2);
  return [...l1, ...l2];
}

const nestedList = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]];
alert(flattenList(nestedList));
