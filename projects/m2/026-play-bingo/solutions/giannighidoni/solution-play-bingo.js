// function for create a new Bingo card
function createBingoCard(){
    const bingoCard = {};
    function randomFive(min, max){
        let count = 5;
        const fiveNum = [];
        while(count > 0){
            fiveNum.push(Math.floor(Math.random()*(max-min+1)+min));
            --count;
        }
        return fiveNum;
    }
    bingoCard["B"] = randomFive(1, 15);
    bingoCard["I"] = randomFive(16, 30);
    bingoCard["N"] = randomFive(31, 45);
    bingoCard["G"] = randomFive(46, 60);
    bingoCard["O"] = randomFive(61, 75);
    
    return bingoCard;
}

// function for check winner card

// check array values
function checkArray(arr){
    const reducer = (accumulator, curr) => accumulator + curr;
    if(arr.reduce(reducer) === 0){
        return true;
    } else {
        return false;
    }
}

// check row
function checkRow(card){
    let tmp = 0;
   for(let key in card){
       if(checkArray(card[key])){
           tmp++;
       }
   }
   if(tmp > 0){
       return true; 
   } else {return false;}
}

// check column
function checkColumn(card){
    let tmpIndex = 0;
    if(card["B"].includes(0)){
        tmpIndex = card["B"].indexOf(0);
        if(card["I"][tmpIndex] === 0 && 
        card["N"][tmpIndex] === 0 && 
        card["G"][tmpIndex] === 0 && 
        card["O"][tmpIndex] === 0){
            return true;
        } else {
            tmpIndex = card["B"].indexOf(0, tmpIndex + 1);
            if(tmpIndex > 0){
                while(tmpIndex > 0){
                    if(card["I"][tmpIndex] === 0 && 
                        card["N"][tmpIndex] === 0 && 
                        card["G"][tmpIndex] === 0 && 
                        card["O"][tmpIndex] === 0){
                        return true;
                        break;
                    }
                    tmpIndex = card["B"].indexOf(0, tmpIndex + 1);
                }
            } else {
                return false;
            }           
        } 
    } else {
        return false;
    }
    
}

// check diagonal
function checkDiagonal(card){
    if((card["B"][0] === 0 &&
        card["I"][1] === 0 &&
        card["N"][2] === 0 &&
        card["G"][3] === 0 &&
        card["O"][4] === 0) || 
       (card["B"][4] === 0 &&
        card["B"][3] === 0 &&
        card["B"][2] === 0 &&
        card["B"][1] === 0 &&
        card["B"][0] === 0)){
            return true;
    } else {
        return false;
    }
}

// final check card
function checkCard(card){
   if(checkRow(card) || checkColumn(card) || checkDiagonal(card)){
       return true;
   } else {
       return false;
   }
}


// extraction numbers
const statisticsArr = [];
function extraction(){
    let numPlay = 0;
    while(numPlay < 1000){
        const newBingoCard = createBingoCard();
        let countExtraction = 0;
        const numbersExtracted = [];
        while(numbersExtracted.length < 75){
            let numExtract = Math.floor(Math.random()*(75-1+1)+1);
            if(!numbersExtracted.includes(numExtract)){
                numbersExtracted.push(numExtract);
                for(let key in newBingoCard){
                    if(newBingoCard[key].includes(numExtract)){
                        let index = newBingoCard[key].indexOf(numExtract);
                        newBingoCard[key][index] = 0;
                        countExtraction++;
                    }
                }
                // check card
                if(checkCard(newBingoCard)){
                    statisticsArr.push(countExtraction);
                    numPlay++;
                    break;
                }
            }
        }
    }
}

extraction();

// Display Statistics

const minExtraction = Math.min(...statisticsArr);
const maxExtraction = Math.max(...statisticsArr);
const reducer = (accumulator, curr) => accumulator + curr;
const averageExtraction = Math.round((statisticsArr.reduce(reducer)) / 1000);

console.log(
`Min extraction = ${minExtraction}
Max extraction = ${maxExtraction}
Average extraction = ${averageExtraction}`
);