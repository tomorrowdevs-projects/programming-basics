// Function to create a set of 5 different random numbers from a range of 15
function createRandomNum(n) {
    let setNum = new Set();
    while (true) {
        setNum.add((Math.floor(Math.random() * 15) + n));
        if (setNum.size === 5) break;
    }
    let numList = [];
    for (let num of setNum)
        numList.push(num);
    return numList;
} // end function

// Function to create a random Bingo card and stores it in a object
function createBingoCard() {
    let obj = {
        B: createRandomNum(1),
        I: createRandomNum(16),
        N: createRandomNum(31),
        G: createRandomNum(46),
        O: createRandomNum(61),
    };
    return obj;
} // end function

function displayBingoCard(obj) {
    let string = "";
    for (let key in obj) {
        string += key + "  |  ";
    }
    
    string += "\n----------------------\n"
    
    for (let i = 0; i < 5; i++) {
        for (let key in obj) {
            string += obj[key][i] + " | ";
        }
        
        string += "\n"
    }
    return string;
} // end function

// MAIN PROGRAM
let bingoCard = createBingoCard();
console.log(bingoCard);
alert(displayBingoCard(bingoCard));
console.log(displayBingoCard(bingoCard));