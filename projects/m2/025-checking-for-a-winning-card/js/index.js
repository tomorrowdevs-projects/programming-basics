/*In this exercise we will mark that a number has been called by replacing it with a 0 in the Bingo card dictionary.
Write a function that takes a dictionary representing a Bingo card as its only parameter.
If the card contains a line of five zeros (vertical, horizontal or diagonal) then your function should return True, indicating that the card has won.
Create a main program that demonstrates your function by creating several Bingo cards, displaying them, and indicating whether or not they contain a winning line.*/

// Solution create bingo card (exe24)
function createBingoCard(min, max, maxlenght) {
    let arrayExtraction = "";
    const tmpArray = [];
    
    while (arrayExtraction.length < maxlenght) {
      tmpArray.push(Math.floor(Math.random() * (max - min + 1) + min));
      arrayExtraction = [...new Set(tmpArray)];
    }
    return arrayExtraction.sort((a, b) => a - b);
  }
  
  const objBingoCard = {
    B: createBingoCard(1, 15, 5),
    I: createBingoCard(16, 30, 5),
    N: createBingoCard(31, 45, 5),
    G: createBingoCard(46, 60, 5),
    O: createBingoCard(61, 75, 5),
  };
  //----NEW EXERCISE-----//
  // Draw and change the number in Bingo Card
  // loop start false. In the case of a winning line, the function (vertical, Horizonal or diagonal) will return true
  function changeNumberExtract(max, min, objBingo) {
    
    while (bingoWin === false) {
      const numberExtration = Math.floor(Math.random() * (max - min + 1) + min);
    
      for (key in objBingo) {
        if (objBingo[key].includes(numberExtration)) {
          objBingo[key][objBingo[key].indexOf(numberExtration)] = 0;
        }
      } 
      checkBingoWin(objBingo); //single fuction with function check Win line
    } 
  }
  
  // Check Horizonal Win line
  // If the sum of the row returns zero then the whole row consists of zeros
  function getSumArray(array) {
    const reduceArray = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return reduceArray;  
  }
  
  function checkHorizontalBingo(objBingo) {
    for (key in objBingo) {
      if (getSumArray(objBingo[key]) === 0) {
         bingoWin = true;
         alert("Congratulations, you got Bingo! (In a horizontal line)")
        alert(objBingoCard)
      } 
    } 
  } 
  // Check Vertical Win line
  // I use regex to find the consecutive keys with the same index that have zero as their value
  function checkVerticalBingo(objBingo) {
    let index = [];
    const regex = /BINGO/gi
    for( i = 0; i < 5; i++) {
      
      for (key in objBingo) {
        if (objBingo[key][i] === 0) {
          index.push(key)
        }
      } 
    } 
    const checkBingoLetter = index.join("")
      if (regex.test(checkBingoLetter)) {
        bingoWin = true;
        alert("Congratulations, you got Bingo! (In a vertical line)")
        alert(objBingoCard)
      } 
  }
  
  // I use two indexes "letter" for keys and "index" for indexes
  // loops to route keys and indexes (B1, I2 etc.)
  // LetterReverse is for not having the program report error
  // IF separated so as not to make error in the program
  function checkDiagonalBingo(objBingo) {
  const letter = ["B", "I", "N", "G", "O"];
  const index = [0, 1, 2, 3, 4];
  const letterReverse = ["O", "G", "N", "I", "B"]
  let counter = 0;
  let counterR = 0;
   for (i = 0; i < 5; i++) {
     if (objBingo[letter[i]][index[i]] === 0) {
       counter += 1;
      } 
    
     if (objBingo[letterReverse[i]][index[i]] === 0) {
       counterR += 1; 
       
      } 
    }
    
    if (counter === 5 || counterR === 5) {
        bingoWin = true;
        alert("Congratulations, you got Bingo! (In a diagonal line)")
        alert(objBingoCard)
       } 
  }  
  // Function for loop
  function checkBingoWin(objBingo) {
  checkDiagonalBingo(objBingo);
  checkVerticalBingo(objBingo); 
  checkHorizontalBingo(objBingo);
  }
  
  let bingoWin = false;
  alert(changeNumberExtract(75, 1, objBingoCard))