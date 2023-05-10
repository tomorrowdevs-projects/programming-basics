
let num = parseInt(prompt("Enter a decimal number: "));
let result = "";

while (num > 0) {
  let binary = num % 2;
  result = binary.toString() + result;
  num = Math.floor(num / 2);
  
}

console.log("Binary number: " + result);
