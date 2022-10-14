function checkResult(
  coins,
  dollarAmount,
  coinValues = [0.25, 0.1, 0.05, 0.01]
) {
  // Remove approximation errors
  dollarAmount = dollarAmount.toFixed(2);

  // This is the solution because it is the only condition that might return true
  const solution = coinValues.some(
    (element) => (element * coins).toFixed(2) === dollarAmount
  );

  // base case: true
  if (solution) {
    return true;

    // base case: false
  } else if (
    dollarAmount < 0 ||
    coins === 0 ||
    coins * Math.min(...coinValues) > dollarAmount ||
    coins * Math.max(...coinValues) < dollarAmount
  ) {
    return false;

    // recursion step
  } else {
    return coinValues.some((value) => {
      return checkResult(coins - 1, dollarAmount - value);
    });
  }
}
