// variable type number
let number_Input_User;
let number_Integer;
let number_First = 2;
// constant for array
const number_First_Array = new Array();
// variable type string
let message_Result = "";

number_Input_User = parseInt(prompt(`Entering the integer to be decomposed into prime numbers --> `));

// IF condition to check whether the integer entered by the user is < than the prime number " 2"--> if it is less, returns an error message.
if (number_Input_User < number_First) {
    console.log(`The integer entered is less than the prime number " 2 " --> ERROR!`)
} else {
    // store the number entered by the user in the variable " number_Integer " to break it down into prime numbers
    number_Integer = number_Input_User;

    /* " WHILE " loop where:
       1 ) checks that the prime number, is not <= to the number entered by the user, stored in the variable
       2 ) calculates whether the integer entered has remainder mediated by the mod " % " operator
           - remainder 1 --> is a prime number ( factor )
           - remainder 0 --> is not a prime number ( factor ) --> compound number which can be decomposed with primes
       3 ) insert in an Array " number_First_Array " the prime decomposition of the compound integer number using the method " name_Array.push(element_Array ) " */
    while (number_First <= number_Integer) {
        if (number_Integer % number_First === 0) {
            number_Integer = Math.floor(number_Integer / number_First);
            number_First_Array.push(number_First);
        } else {
            /* increment by 1 for comparison
            - whole number to do the decomposition
            - check prime number 
            - if prime number insert into array */
            number_First++;
        }
    }

    // FOR loop to step through the Array by storing the elements of the factor decomposition in the result variable
    for (let counter = 0; counter < number_First_Array.length; counter++) {
        message_Result = message_Result + number_First_Array[counter] + "\n";
    }
    
    // display of prime factor decomposition
    console.log(`\nDecomposition into prime factors: \n\n${message_Result}\nResult of multiplication of prime factors ${number_First_Array.join('*')}=${number_Input_User} `);
}