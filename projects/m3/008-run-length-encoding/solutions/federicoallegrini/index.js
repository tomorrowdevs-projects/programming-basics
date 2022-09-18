function lengthEncoding(decodedList) {
  const listLength = decodedList.length;
  // Check empty list
  if (
    (Array.isArray(decodedList) && listLength === 0) ||
    !Array.isArray(decodedList)
  ) {
    return [];
  }
  // Get last list value
  let vLast = decodedList[listLength - 1];
  const vLastType = typeof vLast;
  let vSecondLast = "";
  let vSecondLastType = "";
  // If there is more than 1 value
  if (listLength > 1) {
    // Get second last list value
    vSecondLast = decodedList[listLength - 2];
    vSecondLastType = typeof vSecondLast;
  } else {
    // If there is only 1 value
    // Create end of a list
    const [shortDecodedList, lastTwoValuesList] = createEndOfList(decodedList);
    // Return only the last two values list ["LETTER", #]
    return lastTwoValuesList;
  }

  // Three condition
  if (vLast === vSecondLast) {
    // #1 Equal last and second last value
    // Add 1 to the end
    decodedList.push(1);
    // Encode the list with new value
    return lengthEncoding(decodedList);
  } else {
    // #2 Different last and second last value
    if (vLastType !== "number") {
      // #2 Second last is a string
      // Create end of a list
      const [shortDecodedList, lastTwoValuesList] =
        createEndOfList(decodedList);
      // Return the concatenation of the shortened encoded list and last two values list
      return [...lengthEncoding(shortDecodedList), ...lastTwoValuesList];
    } else {
      // #3 second last value is a number
      if (listLength > 2) {
        const vThirdLast = decodedList[listLength - 3];
        const vThirdLastType = typeof vThirdLast;
        if (vThirdLast === vSecondLast) {
          vLast++;
          decodedList[decodedList.length - 1] = vLast++;
          decodedList.splice(listLength - 3, 1);
          return lengthEncoding(decodedList);
        } else {
          // Create end of a list without push 1
          const [shortDecodedList, lastTwoValuesList] = createEndOfList(
            decodedList,
            false
          );
          // Return the concatenation of the shortened encoded list and last two values list
          return [...lengthEncoding(shortDecodedList), ...lastTwoValuesList];
        }
      } else {
        // Else return list as it is => ["LETTER", #]
        return decodedList;
      }
    }
  }
}

function createEndOfList(list, push = true) {
  if (push) {
    // Add 1 as last value
    list.push(1);
  }
  // Remove last two values from list
  const lastTwoValuesList = list.splice(list.length - 2, 2);
  //  Return the two list as array
  return [list, lastTwoValuesList];
}

const decodedList = ["A", "A", "B", "B", "B", "C", "A"];
alert(lengthEncoding(decodedList));
