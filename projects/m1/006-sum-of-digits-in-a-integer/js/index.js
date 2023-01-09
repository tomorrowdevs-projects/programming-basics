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

if (splitNumberInteger.length == 4) {
  sumNumber = firstNumber + secondNumber + thirdNumber + quarterNumber; // Sum of the entered integers.
  alert(`The sum of the numbers insered is " ${firstNumber}+${secondNumber}+${thirdNumber}+${quarterNumber}=${sumNumber} "`);
  //  console.log(sumNumber); // Error check line.
}
else
  if (isNaN(sumNumber) == true) { // eppure la somma mi da NaN
    // alert(`The data entered is incorrect`);
    // console.log(sumNumber); 
    console.log("The data entered is incorrect", isNaN(sumNumber)); // Error check line. // ho messo questo consol.log per verificare  che valore ha isNaN(sumNumber)
  }
  else {
    // alert(`Error! You entered characters instead of whole numbers.`);
    console.log("Error! You entered characters instead of whole numbers", isNaN(sumNumber)); // Error check line.  // ho messo questo consol.log per verificare  che valore ha isNaN(sumNumber)
  }