function checkHorizontalWinning(obj) {
    let counter = 0;
    for (let i = 0; i < 5; i++) {
        for (let key in obj) {
            if (obj[key][i] === 0) {
                counter += 1;
            }
        } // end for...in
        if (counter === 5) {
            return true;
        } else {
            counter = 0;
        }
    } // end for loop
    return false;
} // end function

function checkVerticalWinning(obj) {
    let counter = 0;
    for (let key in obj) {
        for (let i = 0; i < 5; i++) {
            if (obj[key][i] === 0) {
                counter += 1;
            }
        } // end for loop
        if (counter === 5) {
            return true;
        } else {
            counter = 0;
        }
    } // end for...in
    return false;
} // end function

function checkDiagonalWinning(obj) {
    let counter1 = 0;
    let counter2 = 0;
    for (let key in obj) {
        switch (key) {
            case "B":
                if (obj[key][0] === 0) counter1 += 1;
                if (obj[key][4] === 0) counter2 += 1;
                break;

            case "I":
                if (obj[key][1] === 0) counter1 += 1;
                if (obj[key][3] === 0) counter2 += 1;
                break;

            case "N":
                if (obj[key][2] === 0) {
                    counter1 += 1;
                    counter2 += 1;
                }
                break;

            case "G":
                if (obj[key][3] === 0) counter1 += 1;
                if (obj[key][1] === 0) counter2 += 1;
                break;

            case "O":
                if (obj[key][4] === 0) counter1 += 1;
                if (obj[key][0] === 0) counter2 += 1;
                break;
        } // end switch
    } //end for...in
    if (counter1 === 5) {
        return true;
    } else if (counter2 === 5) {
        return true;
    } else {
        return false;
    }
} // end function

// Function to simulate calling numbers and replacing them with a 0 in a Bingo Card
function replaceCalledNum(obj) {
    let num = Math.floor(Math.random() * 75) + 1;
    for (let i = 0; i < 5; i++) {
        for (let key in obj) {

            if (num === obj[key][i]) {
                obj[key][i] = 0;
            }
        } // end for...in
    } // end for loop
    return obj;
} // end function

// MAIN PROGRAM // --> Need to import functions createBingoCard() and displayBingoCard() from ex. 024  

// Create and display several winning Bingo cards:
// (at least one card with a horizontal line, one card with a vertical line and one card with a diagonal line)
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

while (true) {
    
    let bingoCard = createBingoCard();
    
    while (true) {
        
        replaceCalledNum(bingoCard);
        
        if (checkHorizontalWinning(bingoCard)) {
            counter1 += 1;
            alert(`${displayBingoCard(bingoCard)}\nThis Bingo Card has a horizontal winning line!`);
            break;
        } else if (checkVerticalWinning(bingoCard)) {
            counter2 += 1;
            alert(`${displayBingoCard(bingoCard)}\nThis Bingo Card has a vertical winning line!`);
            break;
        } else if (checkDiagonalWinning(bingoCard)) {
            counter3 += 1;
            alert(`${displayBingoCard(bingoCard)}\nThis Bingo Card has a diagonal winning line!`);
            break;
        } // end condition
    }	// end second while	
    if (counter1 > 0 && counter2 > 0 && counter3 > 0) break;
} // end first while


// Display a non-winning Bingo Card
bingoCard = createBingoCard();

let counter;
while (counter !== 4) {
    
    replaceCalledNum(bingoCard);
    counter = 0;
    
    for (let i = 0; i < 5; i++) {
        for (key in bingoCard) {
            if (bingoCard[key][i] === 0) {
                counter += 1;
            }
        }
    }
} // end while
alert(`${displayBingoCard(bingoCard)}
This Bingo Card is not a winner!`)
