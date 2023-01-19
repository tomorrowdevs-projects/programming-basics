let numberIn, checkCharactersLowercase, checkCharactersUppercase, array_split_numberIn, number = sumNumber = i = 0;

numberIn = prompt(`Please insered the whole four digit number`);

checkCharactersLowercase = /[a-z]/.test(numberIn);
checkCharactersUppercase = /[A-Z]/.test(numberIn);

if (checkCharactersLowercase || checkCharactersUppercase) {
  alert(`\nError! --> You have insered numbers and characters.\n`);
} else {
  array_split_numberIn = numberIn.split("");
  // console.log("\n", array_split_numberIn, "\n");
  for (i = 0; i < array_split_numberIn.length; i++) {
    number = parseInt(array_split_numberIn[i]);
    sumNumber += parseInt(array_split_numberIn[i]);
    // console.log("\n", number);
  }
  // console.log("\n", sumNumber);
  array_split_numberIn = array_split_numberIn.join("+");
  alert(
    `\nSum of the input numbers inserted --> ${array_split_numberIn}=${sumNumber}\n`
  );
}
