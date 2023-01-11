let numberIn = 0, splitNumberInteger, firstNumber, secondNumber, thirdNumber, quarterNumber, sumNumber;

//numberIn = '3141';
numberIn = prompt("Please insered the whole four digit number");

if ((numberIn.length < 4) || (numberIn.length > 4)) { // I check whether entered numbers are less than or greater than 4.
  console.log("The data entered is incorrect");
} else if (numberIn.length == 4) {// I check whether entered numbers are 4.
  
  splitNumberInteger = numberIn.split(''); //Subdivision of an integer four digit
  //convert strings to integers
  firstNumber = parseInt(splitNumberInteger[0]);
  secondNumber = parseInt(splitNumberInteger[1]);
  thirdNumber = parseInt(splitNumberInteger[2]);
  quarterNumber = parseInt(splitNumberInteger[3]);
  sumNumber = firstNumber + secondNumber + thirdNumber + quarterNumber; // Sum of the entered integers.
  alert(`The sum of the numbers insered is  ${firstNumber}+${secondNumber}+${thirdNumber}+${quarterNumber}=${sumNumber} "`);
}