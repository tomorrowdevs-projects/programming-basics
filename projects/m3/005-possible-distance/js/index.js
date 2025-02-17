const coinsDenominations = [0.01, 0.05, 0.10, 0.25];

function isPossibleChange (total, numberOfCoins, coinsDenominations) {
// Creating an array containing N times "coinsDenominations" (as numberOfCOins) for the possible combinations.
    const coins = Array(numberOfCoins).fill(coinsDenominations);

    function getCombinations (array) {

        if (array.length === 0) return [[]];

// Declaring the arrays that will be used for the iteration.
        const res = [], [first, ...rest] = array;
        const remaining = getCombinations(rest);

// Pushing every combination with an arrow funtion into "res".
        first.forEach(e => {
          remaining.forEach(smaller => {
            res.push([e].concat(smaller));
          });

        });

        return res;
      };
      
      const result = getCombinations(coins);

// Using the "find" array method to search into the resulted array of combinations from "result" the first combination that summed up to "total."
      const found = result.find(element => element.reduce((pv, cv) => pv + cv, 0).toFixed(2) == total)

    if (found.length > 0) return true;
    if (found.length <= 0) return false;
};

module.exports = isPossibleChange;

