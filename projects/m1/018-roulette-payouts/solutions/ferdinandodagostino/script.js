// A roulette wheel has 38 spaces on it. Of these spaces, 18 are black, 18 are red, and two are green. The green spaces are numbered 0 and 00. The red spaces are numbered 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30 32, 34 and 36. The remaining integers between 1 and 36 are used to number the black spaces. Many different bets can be placed in roulette.

// We will only consider the following subset of them in this exercise:

// Single number (1 to 36, 0, or 00)
// Red versus Black
// Odd versus Even (Note that 0 and 00 do not pay out for even)
// 1 to 18 versus 19 to 36
// Write a program that simulates a spin of a roulette wheel by using a random number generator. Display the number that was selected and all of the bets that must be payed.

const number = Math.floor(Math.random() * 38);
console.log(number);

const redSpaces = [
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
];

if (redSpaces.includes(number)) {
  if (number % 2 == 0) {
    if (number >= 1 && number <= 18) {
      alert(
        `The spin resulted in ${number}\nPay ${number}\nPay Red\n Pay Even\n Pay 1 to 18`
      );
    }
    if (number >= 19 && number <= 36) {
      alert(
        `The spin resulted in ${number}\nPay ${number}\nPay Red\n Pay Even\n Pay 19 to 36`
      );
    }
  }

  if (number % 2 !== 0) {
    if (number >= 1 && number <= 18) {
      alert(
        `The spin resulted in ${number}\nPay ${number}\nPay Red\n Pay Odd\n Pay 1 to 18`
      );
    }
    if (number >= 19 && number <= 36) {
      alert(
        `The spin resulted in ${number}\nPay ${number}\nPay Red\n Pay Odd\n Pay 19 to 36`
      );
    }
  }
} else if (!redSpaces.includes(number)) {
  if (number >= 1 && number <= 18) {
    alert(
      `The spin resulted in ${number}\nPay ${number}\nPay Black \n Pay Even\n Pay 1 to 18`
    );
  }
  if (number >= 19 && number <= 36) {
    alert(
      `The spin resulted in ${number}\nPay ${number}\nPay Black \n Pay Even\n Pay 19 to 36`
    );
  } else if (number == 37) {
    alert('The spin resulted 00\nPay 00\n Pay Green');
  } else if (number == 0) {
    alert('The spin resulted 0\nPay 0\n Pay Green');
  }
}
