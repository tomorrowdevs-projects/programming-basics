const bingoCard1 = {
    "B": [6,1,3,9,12],
    "I": [0,0,0,0,0],
    "N": [36,33,36,43,36],
    "G": [60,54,56,60,46],
    "O": [62,61,67,65,64],
};

const bingoCard2 = {
    "B": [6,1,0,9,12],
    "I": [29,16,0,19,24],
    "N": [36,33,0,43,36],
    "G": [60,54,0,60,46],
    "O": [62,61,0,65,64],
};

const bingoCard3 = {
    "B": [0,1,3,9,12],
    "I": [29,0,19,19,24],
    "N": [36,33,0,43,36],
    "G": [60,54,56,0,46],
    "O": [62,61,67,65,0],
};

function checkArray(arr){
    const reducer = (accumulator, curr) => accumulator + curr;
    if(arr.reduce(reducer) === 0){
        return true;
    } else {
        return false;
    }
}

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


function checkCard(card){
   if(checkRow(card) || checkColumn(card) || checkDiagonal(card)){
       return true;
   } else {
       return false;
   }
}

console.log("Horizontale");
console.log(checkCard(bingoCard1));

console.log("Vertical");
console.log(checkCard(bingoCard2));

console.log("Diagonal");
console.log(checkCard(bingoCard3));