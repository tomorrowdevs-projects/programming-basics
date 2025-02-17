let max = 0;
let numCount = 0;  
let num = 0;
while (num < 100) {
  num = Math.round(Math.random() * 100);
  
  if (num > max) {
    max = num; 
    numCount++; 
  }

}

console.log(`The maximum value found was: ${max}`);
console.log(`The maximum value was updated: ${numCount} times`);

