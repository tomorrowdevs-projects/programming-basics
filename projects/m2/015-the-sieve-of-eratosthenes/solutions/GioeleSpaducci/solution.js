function primes(min,max) {
    let numbers = [];
    for (let i = min; i<= max; i++) {
      numbers.push(i)
    }
    for (let i = 0; i < max-1; i++) {
      //alert(numbers[i] + "i");
      for (let j = max; j > i+2; j--) {
        //alert(j%numbers[i]);
        if (j%numbers[i] === 0 && numbers[j-2] !== 0 ) {numbers.splice(j-2,1,0)}
      }
    }
    return numbers.filter((key) => key !== 0)
  }
  
  alert(primes(2,100000))