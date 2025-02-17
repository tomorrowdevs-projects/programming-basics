// ask value at user
let userValue;
let collectionValue = [];
while(userValue !== 0){
  userValue = parseInt(prompt('Please, enter the value'))
  collectionValue.push(userValue)
}
// sum element of array
let sumElement = 0;
for(const value of collectionValue){
  sumElement += value;
}
// calc average of value
const calcAverage = sumElement / (collectionValue.length - 1)
// display message, if the first value is 0 display error else display average
let message;
if(collectionValue <1 && userValue  === 0){
  message = 'Error, the first value entered cannot be zero'  
} else {
   message = `The average of value is ${calcAverage}` 
}
alert(message)