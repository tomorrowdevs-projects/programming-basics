function flattenAList(l) {
  if (l.length == 0) {
    return [];
  }

  let firstElement = l[0];
  let l1;
  let l2;

  if (firstElement.length > 0) {
    l1 = flattenAList(firstElement);
    l2 = flattenAList(l.slice(1, l.length));
  } else {
    l1 = [firstElement];
    l2 = flattenAList(l.slice(1, l.length));
  }

  return l1.concat(l2);
}

function main() {
  let list = flattenAList([1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]);
  let list2 = flattenAList([
    [
      [1, 2],
      [4, [5], 6],
    ],
  ]);
  console.log(list, list2);
}

main();
