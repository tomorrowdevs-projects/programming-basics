// Declared a variable for checking the string entered by user. It must contain only 8 bits.
let bitsController = /^[0-1]{8}$/;

// Declared a variable "counter", its value will result equal to the number of one bits in the string.
let bitsCounter = 0;

let bits;

// Used While Loop to repeat the operations until the user enters a blank line.  
while (bits != " ") {
    bits = prompt("Insert a group of 8 bits (blank line to exit!)");
    // Given condition for checking the string entered by user according to the RegExp value declared previously.
    if (bitsController.test(bits)) {

            // Used a For Loop as count method to determine the number of ones in the string. For each bit equal to one the BitsCounter will increase by one.
            for (i = 0; i < bits.length; i++) {
                if (bits[i] == 1) {
                bitsCounter += 1;
                } else {
                bitsCounter += 0;
                }
            }  
            /* Given condition for cheking if the total number of one bits in the string is even or odd. 
               In the first case the parity bit should be 0, otherwise should be 1. */
            if (bitsCounter % 2 == 0) {
            alert("The Parity Bit should be 0.");
            } else {
            alert("The Parity Bit should be 1.");
            }
      
    // Else-If condition comes into play when the user enters a blank line. The value of the "bit" variable becomes equal to " " then the While Loop stops.  
    } else if (bits == " ") {
    bits = " ";
      
    } else {
    alert("Invalid Entry!");
    }  
}