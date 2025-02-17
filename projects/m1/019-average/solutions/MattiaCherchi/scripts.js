let sum = 0;
let average;
let userValues = [];
let i = 0;

while (true) {
  
  let values = parseFloat(prompt("Enter a series of numbers to calculate the average .. use the 0 to end operation!"));

  userValues.push(values);

  sum += userValues[i];
  
  if (userValues[0] == 0){
    alert('Error! The first number must be greater than 0 ');
    break;
  } else if(userValues.slice(-1) == 0){
    average = (sum / (userValues.length -1));
    alert(`the average is ${average}`);  
    break;
  }
  i++;
}