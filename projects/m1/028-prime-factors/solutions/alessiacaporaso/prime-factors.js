// reads an integer from the user's enter
let userNumber = parseInt(prompt('Enter an integer (2 or greater)'))
let factor = 2;
// display error if the user enters a value less than 2
if(userNumber < factor) {
  alert('Error! Can\'t insert a number less than 2 ')
} else {
// your program should display the prime numbers that can be multiplied together to compute n
console.log(`The prime factors of ${userNumber} are:`)
while(userNumber >= factor){
  if(userNumber % factor === 0){
    userNumber /= factor
  } else {
    factor += 1
  }
   console.log(factor)
  }
}