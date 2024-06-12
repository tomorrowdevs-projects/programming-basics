
const randomNumber = (min, max) => {
    let numberCard = new Set();
    while (numberCard.size < 5) {
        numberCard.add(Math.floor(Math.random() * (max - min + 1) + min));
    }

    return numberCard = [...numberCard].sort((a, b) => a - b)


}

const createCarde = () => {

    const bingoCard = {
        '1-B': randomNumber(1, 15),
        '2-I': randomNumber(16, 30),
        '3-N': randomNumber(31, 45),
        '4-G': randomNumber(46, 60),
        '5-O': randomNumber(61, 75)
    }

    return bingoCard
}

const bingoCard = createCarde()

console.log(bingoCard)


// const bingoCard1 = {
//     "B": [7, 1, 9, 11, 12],
//     "I": [0, 0, 0, 0, 0],
//     "N": [36, 37, 32, 41, 38],
//     "G": [61, 54, 57, 68, 46],
//     "O": [64, 62, 67, 65, 70],
// };
// console.log(bingoCard1);
// checkWin(bingoCard1);

// const bingoCard2 = {
//     "B": [7, 1, 0, 11, 12],
//     "I": [17, 16, 0, 26, 28],
//     "N": [36, 37, 0, 41, 38],
//     "G": [61, 54, 0, 68, 46],
//     "O": [64, 62, 0, 65, 70],
// };
// console.log(bingoCard2);
// checkWin(bingoCard2);

// const bingoCard3 = {
//     "B": [0, 1, 3, 11, 12],
//     "I": [17, 0, 20, 26, 28],
//     "N": [36, 37, 0, 41, 38],
//     "G": [61, 54, 55, 0, 46],
//     "O": [64, 62, 63, 65, 0],
// };
// console.log(bingoCard3);
// checkWin(bingoCard3);

// const bingoCard4 = {
//     "B": [12, 1, 3, 11, 0],
//     "I": [17, 26, 20, 0, 28],
//     "N": [36, 37, 0, 41, 38],
//     "G": [61, 0, 55, 54, 46],
//     "O": [0, 62, 63, 65, 64],
// };
// console.log(bingoCard4);
// checkWin(bingoCard4);

// const bingoCard5 = {
//     "B": [0, 1, 3, 11, 0],
//     "I": [0, 26, 20, 0, 28],
//     "N": [0, 0, 0, 0, 0],
//     "G": [0, 0, 55, 54, 46],
//     "O": [0, 62, 63, 65, 64],
// };
// console.log(bingoCard5);
// checkWin(bingoCard5);




function diagonalBingo(obj) {
    if (obj['1-B'][0] === 0 &&
        obj['2-I'][1] === 0 &&
        obj['3-N'][2] === 0 &&
        obj['4-G'][3] === 0 &&
        obj['5-O'][4] === 0) {

        console.log('Diagonal Bingo Left')
        bingo = true;

    } else if (obj['1-B'][4] === 0 &&
        obj['2-I'][3] === 0 &&
        obj['3-N'][2] === 0 &&
        obj['4-G'][1] === 0 &&
        obj['5-O'][0] === 0) {

        console.log('Diagonal Bingo rigth');
        bingo = true;
    }
}


function horizontalBingo(obj) {

    let numberCrossOut = 0
    for (let i = 0; i < 5; i++) {
        for (let key in obj) {
            if (obj[key][i] === 0) {
                numberCrossOut += 1
            }
        }
        if (numberCrossOut === 5) {
            console.log('Horizontal bingo');
            bingo = true
        } else {
            numberCrossOut = 0;

        }
    }

}



function verticalBingo(obj) {
    let numberCrossOut = 0;
    for (let key in obj) {
        if (obj[key].reduce((a, b) => a + b) === 0) {
            numberCrossOut++;
        }
    }
    if (numberCrossOut > 0) {
        console.log('vertical Bingo')
        bingo = true
    }
}



function checkWin(obj) {
    verticalBingo(obj)
    horizontalBingo(obj)
    diagonalBingo(obj)


}


let bingo = false;
while (bingo === false) {
    let extraction = Math.floor(Math.random() * 75 + 1);
    Object.values(bingoCard).forEach((value) => {
        if (value.includes(extraction)) {
            value[value.indexOf(extraction)] = 0;
        }
    });
    checkWin(bingoCard)
}
