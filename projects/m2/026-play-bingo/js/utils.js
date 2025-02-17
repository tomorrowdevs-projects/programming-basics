function createBingoCard(min, max, maxLenght) {
  /*
  * Returns an array that equals the single line of the bingo folder 
  * Min-Max range numbers in the line
  * maxLenght maximum array length
  * use the set method to have only unique values in the array and respect the length 
  */ 
  let arrayExtraction = "";
  const tmpArray = [];
  
  while (arrayExtraction.length < maxLenght) {
    tmpArray.push(Math.floor(Math.random() * (max - min + 1) + min));
    arrayExtraction = [...new Set(tmpArray)];
  }

  return arrayExtraction.sort((a, b) => a - b);

}
  
function changeNumberExtract(max, min, objBingo) {
  /*
  * Extracts a random number and replaces it if present in the object
  * {Min/Man} range numbers in Object
  * Return {object}
  */ 
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
 /*
  * check victory bingo diagonal using indices
    * Loop per check per intersecare Index letter con Index Numer
    * if letter[i] and index[i] = 0 returns true
  * {Letter/Index/LetterReverse} a array use for index
  * Return {boolean} 
  */ 
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
  } else {
    return false
  }

}  

// Win Horizontal line 
function getSumArray(array) {
  /*
  * Sums all values in an array
    * Made not to repeat the reduce method several times
  * Return {boolean}
  */ 
  const reduceArray = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return reduceArray;  

}
  
function checkHorizontalBingo(objBingo) {
  /*
  * check victory bingo Horizontal
    * Use fuction getSumArray
  * Return {boolean}
  */
  for (key in objBingo) {

    if (getSumArray(objBingo[key]) === 0) {
      return true
    } else {
      return false
    }
  } 

} 

// Win Vertical line
function checkVerticalBingo(objBingo) {
  /*
  * check victory bingo Vertical
    * Regex to check the output key order
    * If the order of the keys is BINGO then the vertical line will only consist of zeros
  * Return {boolean}
  */
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
    } else {
      return false
    }
    
}


// export function for main pogram and test
module.exports = { createBingoCard, changeNumberExtract, checkHorizontalBingo, checkVerticalBingo, checkDiagonalBingo, getSumArray }