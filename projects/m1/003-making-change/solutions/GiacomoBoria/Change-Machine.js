/* Consider the software that runs on a self-checkout machine. One task 
that it must be able to perform is to determine how much change to provide 
when the shopper pays for a purchase with cash. Write a program that 
begins by reading a number of cents from the user as an integer. Then your 
program should compute and display the denominations of the coins that 
should be used to give that amount of change to the shopper. The change 
should be given using as few coins as possible. Assume that the machine is 
loaded with pennies, nickels, dimes, quarters, loonies and toonies.*/

// Variables for change coins
const toonies = 2 * 100; // Convert integer to cents
const loonies = 1 * 100; // Convert integer to cents
const quarter = 25;
const dimes = 10; 
const nikel = 5;
const cent = 1;

const coinOfRemainder = Number(prompt("Inserisci il tuo resto", 0));

// Condition: how much coin Remainder?
let remainder = coinOfRemainder;

// Condition: as long as the rest is different from zero
while (remainder != 0) {
  // condition
    if (remainder >= 200) {
  // Division
  let coinChange = remainder / toonies; // 
  restToonies = Math.trunc(coinChange);
  alert(`Il tuo resto sarà composto da: ${restToonies} Toonies`);
  // Rest
  coinChange = remainder % toonies;
  remainder = coinChange;
} else if (remainder >= 100) {
  coinChange = remainder / loonies;
  restLoonies = Math.trunc(coinChange);
  alert(` ${restLoonies} Loonies`);
  coinChange = remainder % toonies;
  remainder = restLoonies;
} else if (remainder >= 25) {
  coinChange = remainder / quarter;
  restQuarter = Math.trunc(coinChange);
  alert(` ${restQuarter} Quarter`);
  coinchange = remainder % quarter;
  remainder = restQuarter;
} else if (remainder >= 10) {
  coinChange = remainder / dimes;
  restDimes = Math.trunc(coinChange);
  alert(` ${restDimes} Dimes`);
  restDimes = remainder % dimes;
  remainder = restDimes;
} else if (remainder >= 5 ) {
  changeCoin = remainder / nikel;
  restNikel = Math.trunc(coinChange);    
  alert(` ${restNikel} Nikel`);
  restNikel = remainder % nikel;
  remainder = restNikel;
} else if (remainder >= 1) {
  coinChange = remainder / cent;
  restCent = Math.trunc(coinChange)
  alert(` ${restCent} Cent`);
  restCent = remainder % cent;
  remainder = restCent;
} 
} 
