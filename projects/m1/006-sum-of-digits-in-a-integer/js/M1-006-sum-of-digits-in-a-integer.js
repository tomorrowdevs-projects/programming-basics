let numberIn, splitNumberInteger, firstNumber, secondNumber, thirdNumber, quarterNumber, sumNumber;

//numberIn = '3141';
numberIn = prompt("Please insered the whole four digit number");
//Subdivision of an integer four digit
splitNumberInteger = numberIn.split('');
//convert strings to integers
firstNumber = parseInt(splitNumberInteger[0]);
secondNumber = parseInt(splitNumberInteger[1]);
thirdNumber = parseInt(splitNumberInteger[2]);
quarterNumber = parseInt(splitNumberInteger[3]);


sumNumber = firstNumber + secondNumber + thirdNumber + quarterNumber; // Sum of the entered integers.

if (splitNumberInteger.length == 4) {
  alert(`The sum of the numbers insered is " ${firstNumber}+${secondNumber}+${thirdNumber}+${quarterNumber}=${sumNumber} "`);
}
else if (isNaN(sumNumber) == true) {
  // alert(`Error! You entered characters instead of whole numbers (if).`);
  console.log("Error! You entered characters instead of whole numbers (if)", isNaN(sumNumber), sumNumber); // Error check line.
}
else {
  //alert(`The data entered is incorrect`);
  console.log("The data entered is incorrect (else)", isNaN(sumNumber), sumNumber);
}