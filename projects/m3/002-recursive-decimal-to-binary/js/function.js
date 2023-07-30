function decimalToBinary(n) {
  if (n === 0 || n === 1) {
    return n.toString();
  } else if (n < 0) {
    throw new Error("Inserire un numero non negativo.");
  } else {
    const nextDigit = n % 2;
    const remainingDigits = Math.floor(n / 2);
    const binaryString = decimalToBinary(remainingDigits);
    return binaryString + nextDigit.toString();
  }
}

module.exports = { decimalToBinary };


