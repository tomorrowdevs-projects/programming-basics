function lengthEncoding(list, previousValue = 0) {
  if (list.length > 0) {
    if (list.length > 1) {
      if (list[list.length - 1] === list[list.length - 2]) {
        list.pop();
        if (list.length > 1) {
          previousValue = list[list.length - 2];
        }
        list.push(2);
      } else {
        if (typeof list[list.length - 1] === "number") {
          if (previousValue !== 0) {
            if (previousValue === list[list.length - 2]) {
              list[list.length - 2] = list[list.length - 1] + 1;
              list.pop();
              previousValue = list[list.length - 3] ? list[list.length - 3] : 0;
            } else {
              previousValue = 0;
            }
          }
        } else {
          list.push(1);
        }
      }
    } else {
      list.push(1);
    }
  } else {
    return list;
  }
  const lastTwoValuesList =
    previousValue === 0 ? list.splice(list.length - 2, 2) : [];
  return [...lengthEncoding(list, previousValue), ...lastTwoValuesList];
}

const decodedList = ["A", "A", "B", "B", "B", "C", "A"];
alert(lengthEncoding(decodedList));
