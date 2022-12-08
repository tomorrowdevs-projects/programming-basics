const penny = 1;
const nickels = 5;
const dimes = 10;
const quarters = 25;
const loonies = 100;
const toonies = 200;

//product price and money rest
const moneyPay = Math.floor(Math.random() * 101);
const userMoney = parseInt(prompt(`You have to pay ${moneyPay}. User money: `));
//rest
const rest = (userMoney - moneyPay) * 100;
// toonies  
const numberToonies = rest >= toonies ? rest / toonies : 0;
const restToonies = rest >= toonies ? rest % toonies : rest;
console.log(restToonies)
console.log(rest)
// loonies  
const numberLoonies = restToonies / loonies;
const restLoonies = restToonies % loonies;
// quarters 
const numberQuarters  = restLoonies / quarters;
const restQuarters  = restLoonies % quarters;
// dimes
const numberDimes  = restQuarters / dimes;
const restDimes  = restQuarters % dimes;
// nickels
const numberNickels = restDimes / nickels;
const restNickels = restDimes % nickels;
// penny
const numberPenny  = restNickels / penny;
const restPenny = restNickels % penny;

alert(`Rest is: Toonies: ${ numberToonies}, Loonies: ${numberLoonies},
Quarters: ${numberQuarters}, Dimes: ${numberDimes}, Nickels: ${numberNickels}, Penny: ${numberPenny}`)