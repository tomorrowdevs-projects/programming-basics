// variable type number --> contains user input
let number_User_Q;
// variable type number --> contains remainder for decimal-to-binary conversion
let number_Rest;
// variable type string --> contains the variable " number_Rest " converted to string
let string_Conversion = "";
// string type variable --> contains conversion to binary 
let number_Binary_R = "";
// variable storing the conversion from decimal to binary
let result_Number_Binary = "";
// user input
number_User_Q = parseInt(prompt("Decimal number to be converted to binary --> "));
let input = number_User_Q;
/* loop " while " to convert from decimal to binary until the variable " number_User_Q is = 0
   1 ) calculates the remainder using the modulus operator " % ".
       - number with remainder --> 1
       - number without remainder --> 0
   2 ) formula for converting i n binary, and if there is remainder, I remove it with the " Math.trunc() " method    
   3 ) convert the result variable " number_Rest " to a string variable " string_Conversion ".
   4 ) stores a single binary element in the variable " number_Binary_R " by adding it to the beginning of the result */
while (number_User_Q != 0) {
    number_Rest = number_User_Q % 2;
    number_User_Q = Math.trunc((number_User_Q) / 2);
    string_Conversion = number_Rest.toString();
    number_Binary_R = string_Conversion + number_Binary_R;
}
// variable containing the result
result_Number_Binary = `The decimal number conversion **" ${input} "** in binary number is --> ${number_Binary_R}`;
// display the variable " result_Number_Binary ".
console.log("\n" + result_Number_Binary + "\n")