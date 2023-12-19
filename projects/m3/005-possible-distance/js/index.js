const prompt = require("prompt-sync")({ sigint: true}) ;
/**
 * Determines whether it is possible to construct a particular total using a specific number of coins
 * @param {number} totalAmount The total value to convert in coins
 * @param {number} coinsNumber The number of coins to use to convert the totalAmount
 * @param {number} index It's used to determine what type of coin to use for the calculation
 * @returns 
 */
function calculateChange(totalAmount, coinsNumber, index=0){
    const changes = [0.25,0.10,0.05,0.01]; // Starting from the highest value coins, fewer recursions are performed if the desired total is greater or equal to 10

    if(totalAmount === 0 && coinsNumber === 0){
        return true;
    }

    if(totalAmount < 0 || coinsNumber <= 0 || index > changes.length - 1){
        return false;
    }
    
    return calculateChange(Math.round((totalAmount - changes[index])*100)/100, coinsNumber - 1, index) || calculateChange(totalAmount, coinsNumber, index + 1);
}

function init(){
    const totalAmount = prompt('Please enter the total you want to convert in coins.');
    const coinsNumber = prompt('Now enter the number of coins.');
    
    console.log( calculateChange(parseFloat(totalAmount),parseInt(coinsNumber)) );

    return;
} 
init();