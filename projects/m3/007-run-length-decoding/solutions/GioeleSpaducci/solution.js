function decode(arr) {
  let decoded = [];
  if (arr.length == 1) {
    decoded.push(arr[0],1);
    return decoded
  };
  if (arr[0] === arr[1]) {
    decoded = decode(arr.slice(1));
    decoded.splice(1,1,decoded[1]+1)
  }  else {
    decoded = decode(arr.slice(1));
    decoded.unshift(arr[0], 1)
  };
  return decoded
}

alert(decode(["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"]))