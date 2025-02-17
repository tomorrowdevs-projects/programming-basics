function BingoCard() {
  function randomNumbers(arr,min,max) {
    let n = Math.floor(Math.random() * (max - min + 1) + min);
  while (arr.length < 5) {
    if (!arr.includes(n)) {
    arr.push(n);
    }
    n = Math.floor(Math.random() * (max - min + 1) + min)
  }
  return arr
  }
  let 
  b = [],
  i = [],
    n = [],
    g = [],
    o = [];
  this.b = randomNumbers(b,1,15);
  this.i = randomNumbers(i,16,30); 
  this.n = randomNumbers(n,31,45);
  this.g = randomNumbers(g,46,60);
  this.o = randomNumbers(o,61,75);
}
  
let luckyCard = new BingoCard();

function isWinning(card) {
  let combination = [];
  function checkCombination() {
    for (let i = 0; i < 5; i++) {
      if (!calledNumbers.includes(combination[i])) break;
      if (i == 4) return true
    }
  }
    // checks columns
    for (let key in card){
      for (let number of card[key]){
          combination.push(number)
      }
      if (checkCombination()) return true
      else combination = [];
    }
    //checks for raws
    for (let j = 0; j < 5; j++) {
      combination.push(card.b[j],card.i[j],card.n[j],card.g[j],card.o[j])
      if (checkCombination()) return true
      else combination = []
    }
    //checks for diagonals
    combination.push(card.b[0],card.i[1],card.n[2],card.g[3],card.o[4]);
    if (checkCombination()) return true
    else combination = [];
    combination.push(card.b[4],card.i[3],card.n[2],card.g[1],card.o[0]);
    if (checkCombination()) return true;
    return false
}

//game
let numbersList = [];
let calledNumbers = [];
let minimumCalls = 75;
let maximumCalls = 0;
let averageCalls = 0;

function resetList() {
  numbersList = [];
  for (let i = 1; i <= 75; i++) {
    numbersList.push(i)
  }
}
resetList();
  
  
function game(card) {
  while (!isWinning(card)) {
    let r = Math.floor(Math.random() * (numbersList.length-1 - 0 + 1) + 0);
    calledNumbers.push(numbersList[r]);
    numbersList.splice(r,1)
  }
  if (calledNumbers.length < minimumCalls) minimumCalls = calledNumbers.length;
  if (calledNumbers.length > maximumCalls) maximumCalls = calledNumbers.length;
  resetList();
  averageCalls += calledNumbers.length;
  calledNumbers = []
}
  
for (let i = 0; i < 1000; i++) {
game(luckyCard);
}

averageCalls = averageCalls/1000

alert("minimum calls: " + minimumCalls + ", maximum calls: " + maximumCalls + ", average calls: " + averageCalls)