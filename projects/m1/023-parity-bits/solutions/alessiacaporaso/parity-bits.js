// read strings containing 8 bits until the user enters a blank line.
let userBit;
let number;
let message;
while(userBit != " "){
  userBit = prompt('Please, enter a number')
  number = parseInt(userBit)
  // After each string display a message indicating whether the parity bit should be 0 or 1 and if the nit enter is > 8
  if(number > 8){
    message = "Can't enter number other 8 bit";
  } else if( number % 2 === 0) {
    message = "The parity bit should be  0"
  } else if( number % 2 !== 0 && userBit !== " "){
     message = "The parity bit should be  1"
  } else {
    message = "Thank you"
  }
  alert(message)
}