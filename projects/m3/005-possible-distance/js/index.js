const isPossibleChange = (dollars, coins, memo = [false]) =>{

    const arrCoins = [0.01, 0.05, 0.10, 0.25];
   
    if(dollars === 0 && coins === 0){
      memo.pop()
      memo.push(true);
      return memo;
    
    }else if( dollars > 0 && coins > 0){
      for(let coin of arrCoins){ 
        isPossibleChange(dollars - coin, coins - 1, memo);
      }
    }
    
    return memo.join('')
      
}

console.log(isPossibleChange(1,3));
console.log(isPossibleChange(1,4));
console.log(isPossibleChange(1.25,6));
console.log(isPossibleChange(1.25,8));

