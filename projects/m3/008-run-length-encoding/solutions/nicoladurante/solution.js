function runLengthEncoding(str) {
  if (str.length == 0) {
    return [];
  }

  if (str.length == 1) {
    return [`"${str[0]}"`, 1];
  }

  let car = str[0];
  let repetition = 1;

  while (car === str[repetition]) {
    repetition++;
  }

  let firstPart = [`"${car}"`, repetition];
  let secondPart = runLengthEncoding(str.slice(repetition, str.length));

  if (secondPart.length == 0) {
    return firstPart;
  } else {
    return [firstPart, secondPart];
  }
}

function main() {
  while (true) {
    let str = prompt("Insert a string: ");
    let encodedStr = runLengthEncoding(str);
    alert(`The run-length encoded string is: [${encodedStr}]`);
  }
}

main();
