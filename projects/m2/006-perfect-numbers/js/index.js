// 28 is a perfect number because its proper divisors are 1 + 2 + 4 + 7 + 14 = 28.
// return true if the number is perfect
// identify and display all of the perfect numbers between 1 and 10,000

for(let i = 1; i <= 10000; i++) {
    console.log(i + ' ' + checkPerfectNumber(i))
    //console.log(checkPerfectNumber(i))
  }
  
  function checkPerfectNumber(number){
    const listDivisors = new Array()
    let divisor = 1;
    while(divisor < number){
      if(number % divisor === 0){
        listDivisors.push(divisor)
      }
      divisor++;
    }
    let total = 0;
    for(const item of listDivisors){
      total += item;
    }
    // if(number === total){
    //  return total
    // }
    if(number === total){
      return true
    } else {
      return false
    }
}