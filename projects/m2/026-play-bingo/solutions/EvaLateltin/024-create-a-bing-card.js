// IMPORT FROM EXERCISE 024: CREATE A BINGO CARD

function fiveRandomNumbers(min, max) {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < 5) {
    uniqueNumbers.add(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return Array.from(uniqueNumbers);
}

const originalBingoCard = {
  B: fiveRandomNumbers(1, 15),
  I: fiveRandomNumbers(16, 30),
  N: fiveRandomNumbers(31, 45),
  G: fiveRandomNumbers(46, 60),
  O: fiveRandomNumbers(61, 75),
};
