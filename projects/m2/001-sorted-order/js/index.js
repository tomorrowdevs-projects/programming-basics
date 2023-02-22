/*
- reads integers from the user and stores them in an array
- continue reading values until the user enters 0
- display all of the values entered by the user (except for the 0) in ascending order, with one value appearing on each line
*/
let userNumber = '';
let arrayNumber = new Array();
while(userNumber !== 0){
  userNumber = parseInt(prompt('Enter integer number (reading values until enters 0)'))
  if(userNumber !== 0){
    arrayNumber.push(userNumber)
  }
}
// order array in ascending order
function sortedOrder(number) {
  return number.sort((a, b) => a - b)
}
// display the array value on each line
const orderedArray = sortedOrder(arrayNumber)
console.log(orderedArray)
for(let item of orderedArray){
  console.log(item)
}