const possibleChange = function (coinToChange, numberOfCoins) {
    // quarters, dimes, nickels and pennies * 100
    const coins = [25, 10, 5, 1];

    // to avoid working with floating point numbers, 
    // both the value of the single coins and of the coin to be changed are multiplied by 100
    const formattedCoinToChange = coinToChange * 100;

    let changeIsPossible = false;

    if(formattedCoinToChange < numberOfCoins) return changeIsPossible

    //this function check that the sum of the combination is equal to coinToChange
    const testCombination = function (combination) {
        const result = combination.reduce((total, value) => total + value, 0);
        if (result === formattedCoinToChange) changeIsPossible = true
    }

    // this function calculates all possible combinations
    function combinations(arr, combinationSize) {
        // array where the combinations will be formed
        const combination = Array(combinationSize);

        const combinationsHelper = function (position, start) {
            // if the combination has already been found, stop the function
            if (changeIsPossible) return;
            // if the position is equal to combinationSize, the combination has been formed
            if (position === combinationSize) {
                testCombination(combination);
                return
            }
            // recursive case
            for (let i = start; i < arr.length; i++) {
                combination[position] = arr[i];
                combinationsHelper(position + 1, i)
            }
        }

        combinationsHelper(0, 0);
        return;
    }

    combinations(coins, numberOfCoins);

    return changeIsPossible;
}
const coinToChange = Number(prompt(`This program determines whether or not it is possible to construct a particular total using a specific number of coins.
Enter the coin to change : `))
const numberOfCoins = Number(prompt("Enter the number of coins you want to exchange for the coin :"))
alert(`The result is : ${possibleChange(coinToChange, numberOfCoins)}`)

