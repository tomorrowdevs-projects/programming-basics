/*A roulette wheel has 38 spaces on it. Of these spaces, 18 are black, 18 are red, and two are green. 
The green spaces are numbered 0 and 00. The red spaces are numbered 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30 32, 34 and 36. 
The remaining integers between 1 and 36 are used to number the black spaces. 
Many different bets can be placed in roulette.

We will only consider the following subset of them in this exercise:

Single number (1 to 36, 0, or 00)
Red versus Black
Odd versus Even (Note that 0 and 00 do not pay out for even)
1 to 18 versus 19 to 36
Write a program that simulates a spin of a roulette wheel by using a random number generator. Display the number that was selected and all of the bets that must be payed.

For example, if 13 is selected then your program should display:

The spin resulted in 13...
Pay 13
Pay Black
Pay Odd
Pay 1 to 18

If the simulation results in 0 or 00 then your program should display Pay 0 or Pay 00 without any further output.*/

const mexWelcome = confirm("Do you want to prove how lucky you are?");
/* Variable let because it could be reassigned in the conditions. 
37 represents 00.*/
let randomNumber =  Math.trunc(Math.random() * 37);

// Array of all the red spaces
const redSpace = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]


if (randomNumber == 37) {
  randomNumber == 00;
  alert(`The spin resulted in ${randomNumber}\nPay ${randomNumber}`)
  
} else if (randomNumber == 0) {
  alert(`The spin resulted in ${randomNumber}\nPay ${randomNumber}`)

} else if (randomNumber != 0) {
    //Condition Red or Black
    if (redSpace.includes(randomNumber)) {
    colorSPace = "Red";
    } else {
    colorSPace = "Black";
    }
    //Condition Odd or Even
    if (randomNumber % 2 == 0 && randomNumber == 0) {
    numberOddEven = "Even";
    } else {
    numberOddEven = "Odd"
    }
    //Condition range 1to18 VS 19to36
    if (randomNumber > 18) {
    rangeNumber = "19 to 36"
    } else {
    rangeNumber = "1 to 18"
    }
    alert(`The spin resulted in ${randomNumber}\nPay ${randomNumber}\nPay ${colorSPace}\nPay ${numberOddEven}\nPay ${rangeNumber}`)
}