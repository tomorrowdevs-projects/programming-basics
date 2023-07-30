function canFormSum(amount, coins, n, sum) {
    if (sum === 0) {
        return true;
    }

    if (n === 0 && sum !== 0) {
        return false;
    }
    if (coins[n - 1] > sum) {
        return canFormSum(amount, coins, n - 1, sum);
    }

    return canFormSum(amount, coins, n - 1, sum) || 
        canFormSum(amount, coins, n, sum - coins[n - 1]);
}

module.exports = { canFormSum };

