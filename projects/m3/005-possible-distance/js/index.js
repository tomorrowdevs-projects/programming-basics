function isPossibleChange(money, coin, index) {
    /*
    * The function checks whether it is possible to divide an amount by the number of available coins with recursion
    * @param {money} amount
    * @param {coin} number coins division
    * @param {index} index of available cuts
    * @const {coinAviable} array coin denominations available
    * @const {check} if true continues the program if false calls the function trying another coin denomination as long as moente or dollars > 0.
    * @return {boolean} true if the amount can be formed with the total coins
    */
    
      // fix error and format numer
      money = +money.toFixed(2);
      const coinAviable = [0.25, 0.10, 0.05, 0.01];
      
      // base case
      if (money === 0 && coin === 0) {
        return true;
      } else if (money != 0 && coin === 0 || money === 0 && coin != 0 || index > 3 || coin < 0 || money < 0) {
        return false;
      }
      // step recursion
      const check = isPossibleChange(money - coinAviable[index], coin - 1, index)
      
      if (check) {
        
        return true
      } else {
        return isPossibleChange(money, coin, index + 1)
      }
      
    } 

  module.exports = { isPossibleChange }