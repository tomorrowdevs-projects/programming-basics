let price = 257;
let givenCash = 1000;
let owedMoney = givenCash - price;
let coins = [200,100,25,10,5,1];
let change = [];

for ( let key of coins) {
  let coinNumber = Math.floor(owedMoney/key);
  if (coinNumber <= 0) change.push(0)
  else change.push(coinNumber);
  owedMoney -= coinNumber * key
};

alert( `change is ${change[0]} toonies, ${change[1]} loonies, ${change[2]} quarters, ${change[3]} dimes, ${change[4]} nickels, ${change[5]} pennies`)