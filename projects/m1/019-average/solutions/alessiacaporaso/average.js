let userValue;
let collectionValue = [];
let sumElement = 0;
let message;
// ask the value
while (userValue !== '0'){
  userValue = prompt('Please, enter the value')
  collectionValue.push(userValue)
}
// convert sting in number and control the length of the array for calc the average
const element = parseInt(collectionValue);
const numberElement = collectionValue.length - 1;  
// calc average of the value entered
for(const value of collectionValue){
  sumElement += element
}
const calcAverage = (sumElement / numberElement).toFixed(2);
// display 0 if the first value entered is 0
if(userValue === '0' && numberElement <= 1){
  message = 'Error, the first value entered cannot be zero'  
} else {
  // display the average of value
  message = `The average of value is ${calcAverage}`
}
alert(message)