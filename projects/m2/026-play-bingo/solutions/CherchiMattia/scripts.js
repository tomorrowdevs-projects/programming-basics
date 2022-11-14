const randomNumber = (min, max) => {
    let numberCard = new Set();
    while (numberCard.size < 5) {
        numberCard.add(Math.floor(Math.random() * (max - min + 1) + min));
    }

    return numberCard = [...numberCard].sort((a, b) => a - b);
}

const createCarde = () => {

    const bingoCard = {
        '1-B': randomNumber(1, 15),
        '2-I': randomNumber(16, 30),
        '3-N': randomNumber(31, 45),
        '4-G': randomNumber(46, 60),
        '5-O': randomNumber(61, 75)
    }

    return bingoCard;
}


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




// function checkWin(obj) {
//     if (verticalBingo(obj) || horizontalBingo(obj) || diagonalBingo(obj)) {
//         return true;
//     } else {
//         return false;
//     }
// }

let vertical = 0;
let horizontal = 0;
let diagonal = 0;

function checkWin(obj) {
    if (verticalBingo(obj)) {
        vertical++
        return true;
    } else if (horizontalBingo(obj)) {

        horizontal++
        return true;
    } else if (diagonalBingo(obj)) {

        diagonal++
        return true;
    }
}

// funzione utilizzata nell'altra versione di play Bingo 

// const shufflNumber = () => {

//     let arrNumber = []
//     for (let i = 1; i <= 75; i++) {
//         arrNumber.push(i);
//     }

//     for (let i = arrNumber.length - 1; i > 0; i--) {

//         let randomInd = Math.floor(Math.random() * (i + 1));

//         let tempCard = arrNumber[i];
//         arrNumber[i] = arrNumber[randomInd];
//         arrNumber[randomInd] = tempCard;

//     }


//     return arrNumber;
// }



let arrNumbCall = [];
const playBingo = () => {
    let numbPlay = 0;
    while (numbPlay < 1000) {

        let numbCall = 0;
        const bingoCard = createCarde();
        const arrExtraction = []

        while (!checkWin(bingoCard)) {

            let extraction = Math.floor(Math.random() * 75 + 1);

            if (!arrExtraction.includes(extraction) && arrExtraction.length < 75) {
                arrExtraction.push(extraction);

                Object.values(bingoCard).forEach((value) => {
                    if (value.includes(extraction)) {
                        value[value.indexOf(extraction)] = 0;
                        numbCall++
                    }
                });
            }
        }

        console.log(bingoCard);
        arrNumbCall.push(numbCall);

        numbPlay++
    }

}

playBingo();


// Versione precedente della funzione playBingo 

// let arrNumbCall = [];
// const playBingo = () => {
//     let numbPlay = 0;
//     while (numbPlay < 1000) {

//         let numbCall = 0;
//         const bingoCard = createCarde();
//         const extraction = shufflNumber();

//         for (let i = 0; i < extraction.length; i++) {

//             Object.values(bingoCard).forEach((value) => {
//                 if (value.includes(extraction[i])) {
//                     value[value.indexOf(extraction[i])] = 0;
//                     numbCall++
//                 }
//             });

//             if (checkWin(bingoCard)) {
//                 console.log(bingoCard);
//                 arrNumbCall.push(numbCall);
//                 break;
//             }
//         }

//         numbPlay++
//     }

// }

// playBingo();



const minExtraction = Math.min(...arrNumbCall);
const maxExtraction = Math.max(...arrNumbCall);
let average = arrNumbCall.reduce((a, b) => (a + b));
average = Math.round(average / arrNumbCall.length);


console.log(`Minimun extractions: ${minExtraction}\nMaximum extraction: ${maxExtraction}\naverage of calls: ${average}`);

console.log(`Number vertical bingo: ${vertical}\nNumber horizontal Bingo: ${horizontal}\nNumber diagonal Bingo: ${diagonal}`);
