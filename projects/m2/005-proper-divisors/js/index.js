// enter a positive number
// write a function that computes all of the proper divisors of a positive integer
// Complete this exercise by writing a main program that demonstrates the function by reading a value from the user and displaying the list of its proper divisors

const userNumber = parseInt(prompt('Please enter a positive integer'))

function properDivisors(number){
  const listDivisors = new Array();
  let divisor = 0;
  while(divisor <= number){
    divisor++
    if(number % divisor === 0){
      listDivisors.push(divisor)
    }
  }
  if(number < 0) {
    alert('Error!')
  } else {
    return listDivisors
  }
}
console.log(properDivisors(userNumber))