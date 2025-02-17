function possibleChange(value,coinsNumber) {
  
  if (coinsNumber == 0 && value == 0) return true;
  if (coinsNumber * 25 <= value && coinsNumber > 0) {if (possibleChange(value-25, coinsNumber-1)) return true};
  if (coinsNumber * 10 <= value && coinsNumber > 0) {if (possibleChange(value-10, coinsNumber-1)) return true};
  if (coinsNumber * 5 <= value && coinsNumber > 0) {if (possibleChange(value-5, coinsNumber-1)) return true};
  if (coinsNumber <= value && coinsNumber > 0) {if (possibleChange(value-1, coinsNumber-1)) return true};
  return false
}

alert(possibleChange(prompt("value? (cents)"),prompt("number of coins?")))