let numberIn=array_split_numberIn=firstNumber=secondNumber=thirdNumber=quarterNumber=sumNumber=0;

numberIn = prompt(`Please insered the whole four digit number`);

if (numberIn.length < 4 || numberIn.length > 4) {
  // Condition for the case entered numbers greater or less than 4.
  console.log(numberIn);
  alert(
    `Error! --> The data insered does not respect the required formatting.`
  );
} else if (numberIn.length == 4) {
  // Condition for the case entered numbers equal to 4.

  // I separate the insered number into 4 numbers.
  array_split_numberIn = numberIn.split("");
  firstNumber = parseInt(array_split_numberIn[0]);
  secondNumber = parseInt(array_split_numberIn[1]);
  thirdNumber = parseInt(array_split_numberIn[2]);
  quarterNumber = parseInt(array_split_numberIn[3]);
  // Sum of the separating numbers.
  sumNumber = firstNumber + secondNumber + thirdNumber + quarterNumber;

  if (isNaN(sumNumber)) {
    // Condition in case both normal and special characters are entered.
    // console.log(array_split_numberIn);
    alert(`Error! --> You have insered numbers and characters.`);
  } else {
    // console.log(array_split_numberIn);
    alert(
      `The sum of the numbers insered is  ${firstNumber}+${secondNumber}+${thirdNumber}+${quarterNumber}=${sumNumber}`
    );
  }
}
