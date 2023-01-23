//variable declarations
let numberIn, checkCharacters, array_split_numberIn, number = (sumNumber = i = 0), array_split_numberIn_Conv;
//do-while loop to check that no characters have been inserted
do {
  numberIn = prompt(`Please insered the number -->`);
  // I use the test() function to detect whether the numbers entered contain  characters
  checkCharacters = /[a-z,A-Z,`¬¦!\+\-\."£$€%^&\*)(=+;:@'#><?}{,\/,\\,|\[\]~]/.test(numberIn);
  // if characters are present,
  if (checkCharacters) {
    // i return an 'Error' message.
    alert(`\nError! --> You have insered numbers and characters. \u{1F648}\n`);
  }
} while (checkCharacters)
// convert the number string into an arrey
array_split_numberIn = numberIn.split("");
//read all the elements of the array and calculate the sum
for (i = 0; i < array_split_numberIn.length; i++) {
  // converts the array elements to integers and then performs the sum
  number = parseInt(array_split_numberIn[i]);
  // sum array elements
  sumNumber += number;
}
// converts an array into a string with the join() function function and replaces the ',' character separating the array with a '+' sign.
array_split_numberIn_Conv = array_split_numberIn.join('+');
//print the required result on the screen
alert(`\nSum of the input numbers inserted --> ${array_split_numberIn_Conv}=${sumNumber}  \u{1F973}\n`);