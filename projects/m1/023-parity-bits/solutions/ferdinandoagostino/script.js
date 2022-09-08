// AA parity bit is a simple mechanism for detecting errors in data transmitted over an unreliable connection such as a telephone line. The basic idea is that an additional bit is transmitted after each group of 8 bits so that a single bit error in the transmission can be detected. Parity bits can be computed for either even parity or odd parity. If even parity is selected then the parity bit that is transmitted is chosen so that the total number of one bits transmitted (8 bits of data plus the parity bit) is even. When odd parity is selected the parity bit is chosen so that the total number of one bits transmitted is odd. Write a program that computes the parity bit for groups of 8 bits entered by the user using even parity. Your program should read strings containing 8 bits until the user enters a blank line. After each string is entered by the user your program should display a clear message indicating whether the parity bit should be 0 or 1. Display an appropriate error message if the user enters something other than 8 bits.

// Hint: You should read the input from the user as a string. Then you can use the count method to help you determine the number of zeros and ones in the string. Information about the count method is available online.
let userInput;
let zeroes = 0;
let ones = 0;
let isBit = true;

do {
  userInput = prompt('Inserisci 8 bit').trim();
  if (userInput.length < 8 || userInput.length > 8 || isNaN(userInput)) {
    alert(`Inserisci correttamente 8 bit`);
  } else {
    for (let i = 0, length = userInput.length; i < length; i++) {
      if (userInput[i] === '0') {
        isBit = true;
        zeroes++;
      } else if (userInput[i] === '1') {
        isBit = true;
        ones++;
      } else {
        isBit = false;
        alert('Inserito qualcosa di diverso da 1 bit');
        break;
      }
    }

    if (isBit) {
      checkBit();
    }
  }
} while (userInput.length !== 0);

function checkBit() {
  if (ones % 2 !== 0) {
    alert('il bit di parità è 1');
  } else {
    alert('il bit di parità è 0');
  }
}
