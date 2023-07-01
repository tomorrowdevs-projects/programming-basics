function findPrimeNumbers(min, max) {
    const primeNumber = [];
  
    for (let number = min; number <= max; number++) {
      let isPrime = true;
  
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        primeNumber.push(number);
      }
    }
  
    return primeNumber;
  }
  
  console.log(findPrimeNumbers(2, 50));
  
  