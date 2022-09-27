// IMPORT FROM EXERCISE 025: CHECKING FOR A WINNING CARD

let bingoState = false;

function checkIfWinningCard(arrayOfNumbers) {
  for (randomNumber of arrayOfNumbers) {
    if (bingoState === true) {
      break;
    }
    for (value of Object.values(copiedBingoCard)) {
      if (bingoState === true) {
        break;
      }
      if (value.includes(randomNumber)) {
        value[value.indexOf(randomNumber)] = 0;
        checkIfBingo();
        statistics.tempRepetitions++;
      }
    }
  }
}

function checkIfBingo() {
  isDiagonalBingo();
  isHorizontalBingo();
  isVerticalBingo();
}

function arraySum(letterArray, indexArray) {
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += copiedBingoCard[letterArray[i]][indexArray[i]];
  }
  return sum === 0;
}

function isDiagonalBingo() {
  const letters = ["B", "I", "N", "G", "O"];
  const indexes = [0, 1, 2, 3, 4];
  if (arraySum(letters, indexes) || arraySum(letters.reverse(), indexes)) {
    bingoState = true;
  }
}

function isHorizontalBingo() {
  const letters = ["B", "I", "N", "G", "O"];
  const indexes = [0, 1, 2, 3, 4];
  letters.forEach((element) => {
    const tempLetter = new Array(5).fill(element);
    if (arraySum(tempLetter, indexes)) {
      bingoState = true;
    }
  });
}

function isVerticalBingo() {
  const letters = ["B", "I", "N", "G", "O"];
  const indexes = [0, 1, 2, 3, 4];
  indexes.forEach((element) => {
    const tempIndex = new Array(5).fill(element);
    if (arraySum(letters, tempIndex, copiedBingoCard)) {
      bingoState = true;
    }
  });
}
