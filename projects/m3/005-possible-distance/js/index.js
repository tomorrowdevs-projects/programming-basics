function isPossibleChange(money, coin, index) {

    money = +money.toFixed(2);
    const coinAviable = [0.25, 0.10, 0.05, 0.01];
    
  
    if (money === 0 && coin === 0) {
      return true;
    } else if (money != 0 && coin < 0 || money === 0 && coin != 0 || index > 3) {
      return false;
    }
    
    const check = isPossibleChange(money - coinAviable[index], coin - 1, index)
  
    if (check) {
      return true
    } else {
      return isPossibleChange(money, coin, index + 1)
    }
    
  } 

  module.exports = { isPossibleChange }