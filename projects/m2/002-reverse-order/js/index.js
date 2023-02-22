// reads integers from the user and stores them in an array
let array = new Array();
let userNumber = '';
// use 0 as a sentinel value to mark the end of the input
while(userNumber !== 0){
  userNumber = parseInt(prompt('Please, enter a number (use 0 for stop the input)'))
  if(userNumber !== 0){
    array.push(userNumber)
  }
}
console.log(array)
// display elements in reverse order
const reverseArray = array.reverse()
for(let item of reverseArray){
  console.log(item)
}