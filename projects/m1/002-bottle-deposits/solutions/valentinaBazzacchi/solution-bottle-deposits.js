let depositSmallContainer;
let depositBigContainer;
let totSmallContainer;
let totBigContainer;
let totDepositSmall;
let totDepositBig;

depositSmallContainer = 0.10;
depositBigContainer = 0.25;
totSmallContainer = +prompt("How many containers holding one liter or less do you return?");
totBigContainer = +prompt("How many containers holding more than one liter do you return?");
totDepositSmall = (depositSmallContainer) * (totSmallContainer);
totDepositBig = (depositBigContainer) * (totBigContainer);


alert( `Your refund for returning these containers is ${(totDepositSmall + totDepositBig).toFixed(2)}$` );


/* Variante con operazioni incluse nell'alert

let depositSmallContainer;
let depositBigContainer;
let totSmallContainer;
let totBigContainer;

depositSmallContainer = 0.10;
depositBigContainer = 0.25;
totSmallContainer = +prompt("How many containers holding one liter or less do you return?");
totBigContainer = +prompt("How many containers holding more than one liter do you return?");

alert( `Your refund for returning these containers is  ${(depositSmallContainer * totSmallContainer + depositBigContainer * totBigContainer).toFixed(2)}$` );
*/