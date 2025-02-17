//005-possible-distance



function checkInput(dollar, numberOfCoin, indexCoins){

        coins = [0.25, 0.10, 0.05, 0.01]

        dollar = +dollar.toFixed(2);
 
        //Base condition
        if (dollar === 0 && numberOfCoin === 0 ) return true;

        if ((dollar === 0 && numberOfCoin != 0) 
        || (dollar != 0 && numberOfCoin === 0) 
        || (dollar < 0) 
        || (numberOfCoin < 0)
        || (indexCoins > coins.length-1)) return false;
      

        //Recursive condition
        if (dollar >= coins[indexCoins] && numberOfCoin > 0){

                let tempCoins = checkInput(dollar - coins[indexCoins], numberOfCoin-1, indexCoins)

                if (tempCoins){
                       return true 
                } else  {
                        return checkInput(dollar, numberOfCoin, indexCoins+=1)
                }
        }else {
                return checkInput(dollar, numberOfCoin, indexCoins+=1)  
        }
}


module.exports =  checkInput;
