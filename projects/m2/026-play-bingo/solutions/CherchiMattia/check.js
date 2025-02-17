function verticalBingo(obj) {
    let numberCrossOut = 0;
    for (let key in obj) {
        if (obj[key].reduce((a, b) => a + b) === 0) {
            numberCrossOut++;
        }
    }
    if (numberCrossOut > 0) {
        console.log('vertical Bingo');
        return true;
    } else {
        return false;
    }
}



function diagonalBingo(obj) {

    if (obj['1-B'][0] === 0 &&
        obj['2-I'][1] === 0 &&
        obj['3-N'][2] === 0 &&
        obj['4-G'][3] === 0 &&
        obj['5-O'][4] === 0) {

        console.log('Diagonal Bingo Left')
        return true;

    } else if (obj['1-B'][4] === 0 &&
        obj['2-I'][3] === 0 &&
        obj['3-N'][2] === 0 &&
        obj['4-G'][1] === 0 &&
        obj['5-O'][0] === 0) {

        console.log('Diagonal Bingo rigth');
        return true;
    } else {
        return false;
    }
}


function horizontalBingo(obj) {

    let numberCrossOut = 0
    for (let i = 0; i < 5; i++) {
        for (let key in obj) {
            if (obj[key][i] === 0) {
                numberCrossOut += 1;
            }
        }
        if (numberCrossOut === 5) {
            console.log('Horizontal bingo');
            return true;
        } else {
            numberCrossOut = 0;

        }
    }
    return false;
}

function checkWin(obj) {
    if (verticalBingo(obj) || horizontalBingo(obj) || diagonalBingo(obj)) {
        return true;
    } else {
        return false;
    }
}

module.exports = checkWin;