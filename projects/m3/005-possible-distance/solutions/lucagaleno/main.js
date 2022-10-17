//005-possible-distance

function checkInput(dollar, numberOfCoin){

        coins = [0.25, 0.10, 0.05, 0.01]

        dollar = dollar.toFixed(2);

        for(let i=0; i<=coins.length; i++){
                if ((i * numberOfCoin).toFixed(2) === dollar) {

                        return true;
                }
        }

        if (numberOfCoin === 0 || dollar < 0 || numberOfCoin*Math.max(...coins) < dollar || numberOfCoin*Math.min(...coins) > dollar) {
                return false;
                
        } else{ 
                for (let x=0; x<=coins.length; x++){
                        return checkInput(dollar-x, numberOfCoin-1)   
                }            
        }
}


console.log(checkInput(1, 4));


