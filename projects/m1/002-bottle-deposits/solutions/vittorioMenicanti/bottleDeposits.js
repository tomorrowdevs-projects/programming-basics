

//bottle deposits:

const SmallContainer = 0.10;
const BigContainer = 0.25;
let totalDepositSmall;
let totalDepositBig;


const totalSmallContainer = +prompt("Insert how many containers holding one liter or less do you return?");

const totalBigContainer = +prompt("Insert how many containers holding more than one liter do you return?");

totalDepositSmall = (SmallContainer) * (totalSmallContainer);

totalDepositBig = (BigContainer) * (totalBigContainer);


alert( `Your refund is ${(totalDepositSmall + totalDepositBig).toFixed(2)}$` );