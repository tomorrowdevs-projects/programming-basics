/*An integer, n, is said to be perfect when the sum of all of the proper divisors of n is equal to n. 
For example, 28 is a perfect number because its proper divisors are 1, 2, 4, 7 and 14, and 1 + 2 + 4 + 7 + 14 = 28. 
Write a function that determines whether or not a positive integer is perfect. 
Your function will take one parameter. If that parameter is a perfect number then your function will return True. Otherwise it will return False. 
In addition, write a main program that uses your function to identify and display all of the perfect numbers between 1 and 10,000.*/

// Find the divisors of the number
function calcProperDivisor(n) {
  
    const properDivisor = [];
    
    for(let i = 1; i < n; i++) {
    
      if(n % i === 0) {
        properDivisor.push(i);
      } 
      
    } 
    return properDivisor;
  }
  
  // Add up the values of the divisors
  function sumArray(array) {
    
    const sum = array.reduce((total, value) => total + value);
    return sum;
    
  }
  
  // Find if the number is perfect
  function getPerfectNumber(number) {
    
    const divisorNumber = calcProperDivisor(number);
  
    if (sumArray(divisorNumber) === number) {
      return true;
    } else {
      return false;
    }
    
  }
  
  // Main program
  alert("A number is said to be perfect when the sum of all the proper divisors of *n* is equal to *n*.\nFor example the perfect numbers from 1 to 10,000 are:\n")
  
  for (i = 2; i <= 10000; i++) { // exclude 0 and 1 because they have no divisors other than themselves.
  
    if (getPerfectNumber(i)  === true) {
      alert(`${i} is a perfect number`)
    } 
  }