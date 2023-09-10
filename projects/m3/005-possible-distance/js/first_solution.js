const coinsDenominations = [0.01, 0.05, 0.10, 0.25];

function isPossibleChange (total, numberOfCoins, coinsDenominations) {

  total = +total.toFixed(2);

  if (total === 0 && numberOfCoins === 0) return true;
  if (total !== 0 && numberOfCoins === 0) return false;
  if (total === 0 && numberOfCoins !== 0) return false;

  if (( total >= coinsDenominations[coinsDenominations.indexOf(Math.max(...coinsDenominations))] ) && ( numberOfCoins > 0 ) && ( total % coinsDenominations[coinsDenominations.indexOf(Math.max(...coinsDenominations))] !== 0) && (total / coinsDenominations[coinsDenominations.indexOf(Math.max(...coinsDenominations))] !== numberOfCoins)){
      return isPossibleChange(total - coinsDenominations[coinsDenominations.indexOf(Math.max(...coinsDenominations))], numberOfCoins - 1, coinsDenominations);
  };

  if (( total >= coinsDenominations[coinsDenominations.indexOf(Math.max(...coinsDenominations))] ) && ( numberOfCoins > 0 ) && ( total % coinsDenominations[coinsDenominations.indexOf(Math.max(...coinsDenominations))] === 0) && (total / coinsDenominations[coinsDenominations.indexOf(Math.max(...coinsDenominations))] !== numberOfCoins)){
    return isPossibleChange(total, numberOfCoins, coinsDenominations.slice(0, -1));
  };

  if (( total >= coinsDenominations[coinsDenominations.indexOf(Math.max(...coinsDenominations))] ) && ( numberOfCoins > 0 ) && ( total % coinsDenominations[coinsDenominations.indexOf(Math.max(...coinsDenominations))] !== 0) && (total / coinsDenominations[coinsDenominations.indexOf(Math.max(...coinsDenominations))] === numberOfCoins)){
    return isPossibleChange(total, numberOfCoins, coinsDenominations.slice(0, -1));
  };

  if (( total >= coinsDenominations[coinsDenominations.indexOf(Math.max(...coinsDenominations))] ) && ( numberOfCoins > 0 ) && ( total % coinsDenominations[coinsDenominations.indexOf(Math.max(...coinsDenominations))] === 0) && (total / coinsDenominations[coinsDenominations.indexOf(Math.max(...coinsDenominations))] === numberOfCoins)){
    return isPossibleChange(total - coinsDenominations[coinsDenominations.indexOf(Math.max(...coinsDenominations))], numberOfCoins - 1, coinsDenominations);
  };

  return isPossibleChange(total, numberOfCoins, coinsDenominations.slice(0, -1));
};

module.exports = isPossibleChange;