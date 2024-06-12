function lengthDecoding(encodedList) {
  const listLength = encodedList.length;
  // Check empty list
  if (
    (Array.isArray(encodedList) && listLength === 0) ||
    !Array.isArray(encodedList)
  ) {
    return [];
  }
  // Get first list value
  const v1 = encodedList[0];
  const v1Type = typeof v1;
  let v2 = "";
  let v2Type = "";
  // If there is more than 1 value
  if (listLength > 1) {
    // Get second list value
    v2 = encodedList[1];
    v2Type = typeof v2;
  } else if (v1Type === "string") {
    // If there is only one value and is a string return the list as it is
    return encodedList;
  } else {
    // Else return an empty list
    return [];
  }

  // If there is more than 1 value and the first value is a number
  if (v1Type === "number") {
    // Remove first element and recall the function
    encodedList.shift();
    return lengthDecoding(encodedList);
  }

  // Check type of second value
  switch (v2Type) {
    case "number":
      // If is a number
      let rep = parseInt(v2);
      if (rep === 1) {
        // If is the last repetition, leave only the one letter in array
        encodedList.splice(1, 1);
      } else if (rep === 0) {
        // If there is no required repetition, remove the letter and value in array
        encodedList.splice(0, 2);
      } else {
        // In the other case, reduce by 1 the value of repetition
        rep--;
        // Update the value of repetition
        encodedList[1] = rep;
        // And add one letter at the beginning of array
        encodedList.unshift(v1);
      }
      // Recall the function with updated list
      return lengthDecoding(encodedList);
      break;
    case "string":
      // If the second value is a string, remove the first value from list
      encodedList.shift();
      // And concatenate the first value with the decoded list without the first value
      return [v1, ...lengthDecoding(encodedList)];
      break;
    default:
      // In other case, simply remove the wrong value from the list
      encodedList.splice(1, 1);
      return lengthDecoding(encodedList);
  }
}

const encodedList = ["A", 12, "B", 4, "C", 0, "A", 6, "B", 1];
alert(lengthDecoding(encodedList));
