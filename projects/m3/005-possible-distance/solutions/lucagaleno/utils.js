//005-possible-distance

//to determine the number of coin that are able to be in the total dollar and (attention!) <= number of coin
function countCoin(dollar, coin, value){
    let a = coin;
    if (((a*value <= dollar) && (a <= coin)) || ((a*value === dollar) && (a === coin))) {
        return a;
   }else {
          return countCoin(dollar, coin - 1, value);
   }
}

function isPossibleChange(dollar, coin){

    let possibleCoins = [0.25, 0.10, 0.05, 0.01]; //array of possible coins
    let numCoins; // calculation of the numbero of coins
    let arrayCoins = []; // array to verify the sum of all numCoins =? coin

    // loop on the possibleCoins
    for (let i = 0; i<possibleCoins.length; i++){

        numCoins = countCoin(dollar, coin, possibleCoins[i]);

        if ((numCoins*possibleCoins[i] === dollar) && (numCoins != coin)){
            numCoins -= 1;
        };
        
        if ((numCoins*possibleCoins[possibleCoins.length-1] === dollar) && (possibleCoins[possibleCoins.length-1] != coin)){
            return false;
        };

        dollar = (dollar - (numCoins*possibleCoins[i])).toFixed(2);

        arrayCoins.push(numCoins);
    }
    //console.log(arrayCoins) //check the number of coins
    // sum of the number of coins I found
    const sum = arrayCoins.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);

    //final check to determine if possible or not
    if((coin === sum) && (parseFloat(dollar) === 0)){
        return true;
    }else {
        return false;
    }
}

module.exports = isPossibleChange();