/*A Bingo card consists of 5 columns of 5 numbers which are labelled with the letters B, I, N, G and O.

There are 15 numbers that can appear under each letter.

In particular, the numbers that can appear under the B range from 1 to 15, the numbers that can appear under the I range from 16 to 30, the numbers that can appear under the N range from 31 to 45, and so on.

Write a function that creates a random Bingo card and stores it in a dictionary.

The keys will be the letters B, I, N, G and O. The values will be the lists of five numbers that appear under each letter. Write a second function that displays the Bingo card with the columns labelled appropriately.

Use these functions to write a program that displays a random Bingo card.

Ensure that the main program only runs when the file containing your solution has not been imported into another program.*/

// Create array numeber BingoCard line
function getRandomExtraction(min, max, maxlenght) {
    let arrayExtraction = "";
    const tmpArray = [];
    // Loop for length line (5) random number + "set" for unique result
    while (arrayExtraction.length < maxlenght) {
      tmpArray.push(Math.floor(Math.random() * (max - min + 1) + min));
      arrayExtraction = [...new Set(tmpArray)];
    }
    return arrayExtraction.sort((a, b) => a - b).join(" - ");
  }
  
  function getBingoCard(obj) {
    for (key in obj) {
    alert(`${key} -> ${obj[key]}`);
    }
  }
  // obj BingoCard
  const objBingoCard = {
    B: getRandomExtraction(1, 15, 5),
    I: getRandomExtraction(16, 30, 5),
    N: getRandomExtraction(31, 45, 5),
    G: getRandomExtraction(46, 60, 5),
    O: getRandomExtraction(61, 75, 5),
  };
  
  alert(getBingoCard(objBingoCard))