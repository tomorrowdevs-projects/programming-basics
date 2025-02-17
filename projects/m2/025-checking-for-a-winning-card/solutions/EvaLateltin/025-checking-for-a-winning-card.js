/*
LOGIC 
Import the exercise: 024 Create a Bingo Card

Create a state where bingo = false. This will become true once we have bingo.
Create a loop that, until the state of bingo is false, it keeps getting new random numbers from 1 to 75.
Check if the random number is included in the bingo card; if yes, change its value to 0.

Create a function checkIfBingo where it checks for 3 events: 
1. If all the arrays that contains the numbers, in the n position, are all equal to 0
2. If the diagonal of the card are all equal to 0
3. If all the elements of a single array are all equal to zero. In this case, we can also use the reduce function to check if their sum is 0.
If the checkIfBingo return true, change the bingo state to true. 

Bingo Card:
B  | I  | N  | G  | O
b0 | i0 | n0 | g0 | o0 
b1 | i1 | n1 | g1 | o1
b2 | i2 | n2 | g2 | o2
b3 | i3 | n3 | g3 | o3  
b4 | i4 | n4 | g4 | o4

Horizontal bingo:
B  | I  | N  | G  | O
0  | 0  | 0  | 0  | 0 
b1 | i1 | n1 | g1 | o1
b2 | i2 | n2 | g2 | o2
b3 | i3 | n3 | g3 | o3  
b4 | i4 | n4 | g4 | o4

Vertical bingo: 
B  | I  | N  | G  | O
0  | i0 | n0 | g0 | o0 
0  | i1 | n1 | g1 | o1
0  | i2 | n2 | g2 | o2
0  | i3 | n3 | g3 | o3  
0  | i4 | n4 | g4 | o4

Diagonal bingo:
B  | I  | N  | G  | O
0  | i0 | n0 | g0 | o0 
b1 | 0  | n1 | g1 | o1
b2 | i2 | 0  | g2 | o2
b3 | i3 | n3 | 0  | o4  
b4 | i4 | n4 | g4 | 0
*/

// IMPORTED EXERCISE
function fiveRandomNumbers(min, max) {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < 5) {
    uniqueNumbers.add(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return Array.from(uniqueNumbers).sort((a, b) => a - b);
}

const bingoCard = {
  B: fiveRandomNumbers(1, 15),
  I: fiveRandomNumbers(16, 30),
  N: fiveRandomNumbers(31, 45),
  G: fiveRandomNumbers(46, 60),
  O: fiveRandomNumbers(61, 75),
};

// CHECK IF IT IS A WINNING CARD

let bingoState = false;

while (bingoState === false) {
  const randomNumber = Math.floor(Math.random() * 75 + 1);
  Object.values(bingoCard).forEach((value) => {
    if (value.includes(randomNumber)) {
      value[value.indexOf(randomNumber)] = 0;
    }
  });
  checkIfBingo();
}

function checkIfBingo() {
  isDiagonalBingo();
  isHorizontalBingo();
  isVerticalBingo();
}

function arraySum(letterArray, indexArray) {
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += bingoCard[letterArray[i]][indexArray[i]];
  }
  return sum === 0;
}

function isDiagonalBingo() {
  const letters = ["B", "I", "N", "G", "O"];
  const indexes = [0, 1, 2, 3, 4];
  if (arraySum(letters, indexes) || arraySum(letters.reverse(), indexes)) {
    bingoState = true;
    console.log("Diagonal Bingo");
  }
}

function isHorizontalBingo() {
  const letters = ["B", "I", "N", "G", "O"];
  const indexes = [0, 1, 2, 3, 4];
  letters.forEach((element) => {
    const tempLetter = new Array(5).fill(element);
    if (arraySum(tempLetter, indexes)) {
      bingoState = true;
      console.log("Horizontal Bingo");
    }
  });
}

function isVerticalBingo() {
  const letters = ["B", "I", "N", "G", "O"];
  const indexes = [0, 1, 2, 3, 4];
  indexes.forEach((element) => {
    const tempIndex = new Array(5).fill(element);
    if (arraySum(letters, tempIndex)) {
      bingoState = true;
      console.log("Vertical Bingo");
    }
  });
}
