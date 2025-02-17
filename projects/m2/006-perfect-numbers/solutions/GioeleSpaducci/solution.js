function isPerfect(n) {
    let divisors = []
    for (let i = 0; i<n; i++) {
      if (n%i == 0) divisors.push(i)
    }
    if (divisors.reduce((sum, current) => sum + current, 0) == n) return true
    else return false
  }
  
  function isPerfectTwo(n,nMax) {
    let perfectNumbers = [];
    for (let j = n; j<=nMax; j++) {
      let divisors = []
      for (let i = 0; i<j; i++) {
        if (j%i == 0) divisors.push(i)
      }
      if (divisors.reduce((sum, current) => sum + current, 0) == j) perfectNumbers.push(j)
    }  
    return perfectNumbers
  }
  
  alert(isPerfectTwo(1,10000))