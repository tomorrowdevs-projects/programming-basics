function runLengthDecoding(encodedList) {
  if (encodedList.length <= 1) {
    return [];
  }

  let index = 0;
  let secondElement = encodedList[index + 1];

  if (isNaN(secondElement)) {
    return [];
  }

  let i = 0;
  let result = [];
  while (i < secondElement) {
    result = result.concat(encodedList[index]);
    i++;
  }

  return result.concat(
    runLengthDecoding(encodedList.slice(index + 2, encodedList.length))
  );
}

function main() {
  let list = ["A", 12, "B", 4, "A", 6, "B", 1];
  console.log("list1: ", list);
  console.log("decoded List: ", runLengthDecoding(list));

  let oneElementList = ["A", "2", "B", "7"];
  console.log("oneElementList", oneElementList);
  console.log("decodedList: ", runLengthDecoding(oneElementList));
}

main();
