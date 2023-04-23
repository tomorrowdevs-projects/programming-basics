const limit = parseInt(prompt('Enter a limit', '100'))

const isPrimeNumber = (limit) => {
  const listNumbers = [];
  let p = 2;
  //Create list of numbers between 0 and the limit of the user
  for(let item= 0; item < limit; item++) {
    // cross out 0, 1
    if(item < p){
      listNumbers.push(0)
    } else {
      listNumbers.push(item)
    }
  }
  /* 
  While *p* is less than the limit do
  Cross out all multiples of *p* (but not *p* itself)
  Set *p* equal to the next number in the list that is not crossed out 
  */
  while(listNumbers[p] <= limit) {
    for(let i = p * 2; i <= limit; i += p){
      listNumbers[i] = 0
    }
    p++
  }
  // Report all of the numbers that have not been crossed out as prime
  const checkPrimeNumber = listNumbers.filter((item) => item !== 0)
  return checkPrimeNumber
}

console.log(isPrimeNumber(limit))