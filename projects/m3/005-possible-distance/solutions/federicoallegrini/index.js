function possibleChange(
  total,
  numberOfCoins,
  coins = [25, 10, 5, 1],
  accCurrentCoin = 1,
  coinsUsed = { 25: 0, 10: 0, 5: 0, 1: 0 },
  maxCoinLength = 4
) {
  // Do I still have coins to try with?
  if (coins.length === 0) {
    return false;
  }

  // Value of the coin I am testing
  const currentCoin = coins[0];
  // How many of these coins do I need to get to the total value to be exchanged?
  let currentNumberOfCoins = total / currentCoin;
  // Is there a remainder left?
  const currentNumberOfCoinsRemainder = total % currentCoin;

  // If the number of coins I am using is different from the number of coins required and with 1 coin I exceed the value to be exchanged, I have to switch to the smaller coin value
  if (currentNumberOfCoins !== numberOfCoins && currentNumberOfCoins < 1) {
    coinsUsed[currentCoin] = 0;
    maxCoinLength--;
    return possibleChange(
      total,
      numberOfCoins,
      coins.slice(1),
      1,
      coinsUsed,
      maxCoinLength
    );
  }

  // If the number of coins I am using is greater than the number of coins requested, the exchange operation is not possible
  if (currentNumberOfCoins > numberOfCoins) {
    return false;
  }

  // If I have no remainder and the number of coins I am using is equal to the number of coins requested, the exchange operation is possible
  if (
    currentNumberOfCoinsRemainder === 0 &&
    currentNumberOfCoins === numberOfCoins
  ) {
    coinsUsed[currentCoin] = currentNumberOfCoins;
    return coinsUsed;
  }

  // If the number of coins I am using is less than the number of coins required for the exchange, I need to store the number of current coins
  currentNumberOfCoins = Math.ceil(currentNumberOfCoins);
  currentNumberOfCoins = currentNumberOfCoins - accCurrentCoin;
  // If the number of coins I am using of this value is 0
  if (currentNumberOfCoins === 0) {
    // I check if there's still coin available
    if (coins.length !== 1) {
      // If yes, I have to switch to the smaller coin value
      coinsUsed[currentCoin] = 0;
      maxCoinLength--;
      return possibleChange(
        total,
        numberOfCoins,
        coins.slice(1),
        1,
        coinsUsed,
        maxCoinLength
      );
    }
    // Or the operation isn't possible
    return false;
  }

  // If the number of coins I am using of this value isn't 0
  const currentTotal = currentCoin * currentNumberOfCoins;
  // I calculate a new total which is the total minus the total made with the coins I am using
  const newTotal = total - currentTotal;
  // I calculate the new number of coins required for this new total
  const newNumberOfCoins = numberOfCoins - currentNumberOfCoins;
  coinsUsed[currentCoin] = currentNumberOfCoins;

  // I call the function asking: is it possible to change the new total with the new number of coins?
  const result = possibleChange(
    newTotal,
    newNumberOfCoins,
    coins.slice(1),
    1,
    coinsUsed,
    maxCoinLength
  );

  // I check the result
  if (!result) {
    // If the result is negative and I still have coins to try
    if (coins.length === maxCoinLength) {
      // I reduce of 1 the greatest coin and retry with smaller value combination
      accCurrentCoin++;
      coinsUsed[currentCoin] = currentNumberOfCoins;
      return possibleChange(
        total,
        numberOfCoins,
        coins,
        accCurrentCoin,
        coinsUsed
      );
    } else {
      return false;
    }
  }
  // If yes the exchange operation is possible
  return coinsUsed;
}

const total = parseFloat(prompt("Insert the total amount:"));
const numberOfCoins = parseInt(prompt("Insert the number of coins:"));

const possibleChangeResult = possibleChange(total * 100, numberOfCoins);
if (possibleChangeResult) {
  alert(
    `It's possible to change ${total}$ with ${numberOfCoins} coins in the current way:\n${
      possibleChangeResult[25] !== 0
        ? " 0.25$ x " + possibleChangeResult[25] + "\n"
        : ""
    }${
      possibleChangeResult[10] !== 0
        ? " 0.10$ x " + possibleChangeResult[10] + "\n"
        : ""
    }${
      possibleChangeResult[5] !== 0
        ? " 0.5$ x " + possibleChangeResult[5] + "\n"
        : ""
    }${
      possibleChangeResult[1] !== 0
        ? " 0.1$ x " + possibleChangeResult[1] + "\n"
        : ""
    }`
  );
} else {
  alert(`It is not possible to change ${total}$ with ${numberOfCoins} coins!`);
}
