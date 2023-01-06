let numberUser = parseInt(prompt("Enter a decimal number to convert to binary"));
let result = "";

while(numberUser != 0){
  let r = numberUser % 2;
  r = r.toString();
  result = r + result;
  numberUser = Math.floor(numberUser / 2);
}

alert("The conversion to binary of the number you entered is: \n" + result);