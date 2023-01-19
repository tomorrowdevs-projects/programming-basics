let numberIn, array_split_numberIn, number = sumNumber = i = 0;

numberIn = prompt(`Please insered the whole four digit number`);

array_split_numberIn = numberIn.split("");

for (i = 0; i < array_split_numberIn.length; i++) {
  // number = parseInt(array_split_numberIn[i]);
  sumNumber += parseInt(array_split_numberIn[i]);
}
if (isNaN(sumNumber)) {
  // Condition in case characters are insered.
  //  alert("\nArray --> ", array_split_numberIn);
  alert(`\nError! --> You have insered numbers and characters.\n`);
} else {
  // condition for the sum of the numbers.
  // alert("\nArray --> ", array_split_numberIn);
  array_split_numberIn = array_split_numberIn.join(" + ");
  alert(
    `\nSum of the input numbers inserted --> ${array_split_numberIn} = ${sumNumber}\n`
  );
}