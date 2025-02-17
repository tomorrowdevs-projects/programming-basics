//005-possible-distance

coins = [0.25, 0.10, 0.05, 0.01]

function checkInput(dollar, numberOfCoin, indexCoins){
    dollar = +dollar.toFixed(2); //+ to keep it as number

    //Base condition
    if (dollar === 0 && numberOfCoin === 0 ) return true;

    if ((dollar === 0 && numberOfCoin != 0) 
    || (dollar != 0 && numberOfCoin === 0) 
    || (dollar < 0) 
    || (numberOfCoin < 0)
    || (indexCoins > coins.length-1)) return false;


    //Recursive condition
    if (dollar >= coins[indexCoins] && numberOfCoin > 0) {
        let tempCoins = checkInput(dollar - coins[indexCoins], numberOfCoin-1, indexCoins)

        if (tempCoins) {
                return true 
        }
        return checkInput(dollar, numberOfCoin, indexCoins+=1)
        
    }
    return checkInput(dollar, numberOfCoin, indexCoins+=1)
}

console.log(checkInput(5, 1, 0));
console.log(checkInput(0.10, 1, 0));
console.log(checkInput(1.4, 10, 0));
console.log(checkInput(1, 6, 0));


