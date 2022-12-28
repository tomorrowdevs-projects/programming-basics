function createBingoCard(min, max, maxlenght) {
    let arrayExtraction = "";
    const tmpArray = [];
    
    while (arrayExtraction.length < maxlenght) {
      tmpArray.push(Math.floor(Math.random() * (max - min + 1) + min));
      arrayExtraction = [...new Set(tmpArray)];
    }
    return arrayExtraction.sort((a, b) => a - b);
  }
  
  function changeNumberExtract(max, min, objBingo) {
    
      const numberExtration = Math.floor(Math.random() * (max - min + 1) + min);
    
      for (key in objBingo) {
        if (objBingo[key].includes(numberExtration)) {
          objBingo[key][objBingo[key].indexOf(numberExtration)] = 0;
        }
      } 
     return objBingo;
  }
  // Win Diagonal line
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
        return true
       } 
  }  
  // Win Horizontal line 
  function getSumArray(array) {
    const reduceArray = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return reduceArray;  
  }
  
  function checkHorizontalBingo(objBingo) {
    for (key in objBingo) {
      if (getSumArray(objBingo[key]) === 0) {
        return true
      } 
    } 
  } 
  // Win Vertical line
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
        return true
      } 
  }
  // export function
  module.exports = { 
    createBingoCard, 
    changeNumberExtract, 
    checkHorizontalBingo, 
    checkVerticalBingo, 
    checkDiagonalBingo, 
    getSumArray 
}