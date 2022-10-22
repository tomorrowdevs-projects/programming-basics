/*AA parity bit is a simple mechanism for detecting errors in data transmitted over an unreliable connection such as a telephone line. 
The basic idea is that an additional bit is transmitted after each group of 8 bits so that a single bit error in the transmission can be detected. 
Parity bits can be computed for either even parity or odd parity. If even parity is selected then the parity bit that is transmitted is chosen so that the total number of one bits transmitted (8 bits of data plus the parity bit) is even. 
When odd parity is selected the parity bit is chosen so that the total number of one bits transmitted is odd. 
Write a program that computes the parity bit for groups of 8 bits entered by the user using even parity. Your program should read strings containing 8 bits until the user enters a blank line. 
After each string is entered by the user your program should display a clear message indicating whether the parity bit should be 0 or 1. Display an appropriate error message if the user enters something other than 8 bits.

Hint: You should read the input from the user as a string. 
Then you can use the count method to help you determine the number of zeros and ones in the string. 
Information about the count method is available online.*/

let userBitInput;
let check = 0; // initialize a control variable

while (userBitInput != " ") {
  userBitInput = prompt("Insert a group of 8 bits:\n Type blanck space to quit")
 // bit validity checks
  if (userBitInput.length != 8) {
     alert("A bit must contain 8 characters, try again")

 // If the string contains 0 or 1 I proceed with the second check
 // Loop to check that each value in the string is equal to 0 or 1
 // If different from 0 and 1 I assign to the control varible (check) the value 1
  } else if (userBitInput.includes("0") || userBitInput.includes("1")) {
     for (i = 0; i < userBitInput.length; i++) {
        if (userBitInput[i] != "0" && userBitInput[i] != "1") {
            alert("A bit must must contain only values between 0 and 1 retry")
            check = 1;
            break;
        }
     }
 // if check is = 1 all values respect the characteristics of the bit.
     if (check != 1) {
        let checkBit = userBitInput.split(1).length - 1;
        checkBit %= 2;
        switch (checkBit) {
          case 0:
            alert("Your parity bit should be 0");
            break;
          case 1:
            alert("Your parity bit should be 1");
            break;
        } 
     } 
    }
}