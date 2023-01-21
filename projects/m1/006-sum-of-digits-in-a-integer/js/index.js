//variable declarations
let numberIn, checkCharactersLowercase, checkCharactersUppercase, checkCharactersSpecial, array_split_numberIn, number = (sumNumber = i = 0), array_split_numberIn_Conv;

//do-while loop to check that no characters have been inserted
do {
  numberIn = prompt(`Please insered the number -->`);

  // I use the test() function to detect whether the numbers entered contain lowercase or uppercase characters
  checkCharactersLowercase = /[a-z]/.test(numberIn);
  checkCharactersUppercase = /[A-Z]/.test(numberIn);
  checkCharactersSpecial = /[`,¬,¦,!,",£,$,%,^,&,(,),_,{,},;,:,',@,#,~,.,?,+,-,*]/.test(numberIn);

  // if characters are present, I return an 'Error' message.
  if (checkCharactersLowercase || checkCharactersUppercase || checkCharactersSpecial) {
    alert("\nError! --> You have insered numbers and characters. \u{1F648}\n");
    // console.log("\nError! --> You have insered nu0mbers and characters. \u{1F648}\n");
  }
} while (checkCharactersLowercase || checkCharactersUppercase || checkCharactersSpecial)

// convert the number string into an arrey
array_split_numberIn = numberIn.split("");

//read all the elements of the array and calculate the sum
for (i = 0; i < array_split_numberIn.length; i++) {
  number = parseInt(array_split_numberIn[i]);
  sumNumber += number;
}
// print arrey
console.log("\nNormal array -->", array_split_numberIn, "\n");

//Convert array into a string with the "join()" function
array_split_numberIn_Conv = array_split_numberIn.join();
console.log("Array converted using the join() function -->", array_split_numberIn_Conv, "\n");

// replace the "," separating the array, also included in the conversion, with the "+" sign
array_split_numberIn_Conv = array_split_numberIn.join('+');
console.log("String separator ',' replaced by '+' with join('+') -->", array_split_numberIn_Conv, "\n");

//print the required result on the screen
alert(`Sum of the input numbers inserted --> ${array_split_numberIn_Conv}=${sumNumber}  \u{1F973}`);
console.log(`Sum of the input numbers inserted --> ${array_split_numberIn_Conv}=${sumNumber}  \u{1F973}`);