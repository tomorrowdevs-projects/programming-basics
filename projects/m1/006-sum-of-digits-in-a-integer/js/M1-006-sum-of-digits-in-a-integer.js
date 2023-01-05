let numberIn,
  splitNumberInteger,
  firstNumber,
  secondNumber,
  thirdNumber,
  quarterNumber,
  sumNumber;

//numberIn = '3141';
numberIn = prompt("Please enter the whole four-digit number");

//Subdivision of an integer four digits
splitNumberInteger = numberIn.split("");

//convert strings to integers
firstNumber = parseInt(splitNumberInteger[0]);
secondNumber = parseInt(splitNumberInteger[1]);
thirdNumber = parseInt(splitNumberInteger[2]);
quarterNumber = parseInt(splitNumberInteger[3]);

sumNumber = firstNumber + secondNumber + thirdNumber + quarterNumber;

console.log(splitNumberInteger);
console.log(splitNumberInteger[0]);
console.log(splitNumberInteger[1]);
console.log(splitNumberInteger[2]);
console.log(splitNumberInteger[3]);

console.log(
  `${firstNumber}+${secondNumber}+${thirdNumber}+${quarterNumber}=${sumNumber}`
);
alert(
  `${firstNumber}+${secondNumber}+${thirdNumber}+${quarterNumber}=${sumNumber}`
);
