// convert number 
const decimalNumber = parseInt(prompt('Please, enter a number to convert'))
let q = decimalNumber;
let result = '';
let convertNumber = 0;
// divide the number until the number is less than 2 and display the binary representation of the number
while(q > 0){
  console.log(q > 0)
  convertNumber = q % 2;
  result += convertNumber.toString()
  q = Math.floor(q/2)
}
alert('The binary representation is: ' + result)