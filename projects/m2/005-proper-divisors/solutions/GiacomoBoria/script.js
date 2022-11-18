/*A proper divisor of a positive integer, n, is a positive integer less than n which divides evenly into n. 
Write a function that computes all of the proper divisors of a positive integer. 
The integer will be passed to the function as its only parameter. 
The function will return a list containing all of the proper divisors as its only result. 
Complete this exercise by writing a main program that demonstrates the function by reading a value from the user and displaying the list of its proper divisors. 
Ensure that your main program only runs when your solution has not been imported into another file.*/

function calcProperDivisor(n) {
  
    const properDivisor = [];
    
    for(let i = 1; i < n; i++) {
    
      if(n % i === 0) {
        properDivisor.push(i);
      } 
      
    } 
    //properDivisor.pop()
    return properDivisor.join(", ");
  }
  
  const userNumInput = Number(prompt("Type the number whose proper divisors you would like to know:"));
  
  alert(`The proper divisors of your number are: ${calcProperDivisor(userNumInput)}`);