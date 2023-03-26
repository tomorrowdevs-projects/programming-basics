/* function " functionNumberOrdinary " function that takes as its only parameter an integer number and returns as its only result a string containing the English ordinal number 
   - variable " numberOrdinary " in which is stored each of the cells of the array " arrayNumbersOrdinal " identified by a value of numeric " INDEX " and assuming contiguous integers starting from 0 or 1 so --> " arrayNumbersOrdinal[numberInteger - 1] " " -1 " to match integer number entered by the user " number_Integer (range 1 to 12) " with the index
of the array " arrayNumbersOrdinal " you have to subtract 1
   - return the variable " numberOrdinary " */
function functionNumberOrdinary(numberInteger) {
    // array " arrayNumbersOrdinal " which stores the list of Ordinal numbers and satisfies the condition of not working when the file was imported into another program.
    let arrayNumbersOrdinal = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth",];
    let numberOrdinary = arrayNumbersOrdinal[numberInteger - 1];
    return numberOrdinary;
}
// string-type variable declaration
let result_Number_Ordinary = "";
// variable " number_Integer " --> stores integer number entry 
let number_Integer = parseInt(prompt("Enter a integer number --> "));
// variable " number_Ordinal " --> store call to function " functionNumberOrdinary "
let number_Ordinary = functionNumberOrdinary(number_Integer);

/* IF " conditional for input range whole numbers between 1 and 12 (inclusive) from User
    - variable " result_Number_Ordinary " --> result storage
   ELSE 
    - returns an empty string if the function is called with an argument outside the range of integers " 1 to 12 " */
if (number_Integer >= 1 && number_Integer <= 12) {
    result_Number_Ordinary = `The " ORDINARY " number corresponding to number " INTEGER " *" ${number_Integer} "* is --> ${number_Ordinary.toUpperCase()}`;
} else {
    result_Number_Ordinary = "";
}
// display with a " console.log() of the result"
console.log(`\n${result_Number_Ordinary}\n`);