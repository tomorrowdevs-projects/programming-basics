// variable declarations of type number
let value_Number_Integer = 0;
let number_EvenOdd = 0;
let counter = 0;
// variable declarations of type string.
let result_Collatz_Sequence = "";
// loop " while " to request the user to enter an integer after the display of the Collatz sequence
while (true) {
    // imput  number integer to calculate the Collatz sequence
    value_Number_Integer = parseInt(prompt(`Enter the integer to calculate the Collatz sequence --> `));
    // condition " if <= 0 " to terminate with instruction " break " the request to the user to enter whole numbers
    if (value_Number_Integer <= 0) {
        break;
    }
    // loop "while" according to mathematical function " C(C(x)) " i.e. repeats the operation until it is = " 1 "e finche non é =  " 1 "
    while (value_Number_Integer != 1) {
        // condition " if " check the number if it is even or odd using the " % " operator " mod "
        if (value_Number_Integer % 2) {
            // stores the entered number in a variable to display it as Odd
            number_EvenOdd = value_Number_Integer;
            // mathematical function for calculating the Collatz sequence " C(x)= ( x * 3 ) + 1 " --> odd numbers
            value_Number_Integer = (value_Number_Integer * 3) + 1;
            // variable in which to memorise the result 
            result_Collatz_Sequence = `Odd number integer  ${number_EvenOdd} --> Collatz sequences ${value_Number_Integer}`;
        } else {
            // stores the entered number in a variable to display it as Even
            number_EvenOdd = value_Number_Integer;
            // application of the mathematical formula " C(x)= x / 2 " --> numbers 
            value_Number_Integer = (value_Number_Integer / 2);
            // variable in which to memorise the result 
            result_Collatz_Sequence = `Even number integer ${number_EvenOdd} --> Collatz sequences ${value_Number_Integer}`;
        }
        // display of result
        console.log(result_Collatz_Sequence);
    }
}