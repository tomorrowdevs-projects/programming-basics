let bigContainers;
let smallContainers;
let totalBigDeposit;
let totalSmallDeposit;
let totalDeposit;
const bigDeposit = 0.25;
const smallDeposit = 0.10;

bigContainers = prompt("How many containers of more than one litre are there?");
smallContainers = prompt("How many containers are there of one litre or less?");

totalBigDeposit = (bigContainers * bigDeposit);
totalSmallDeposit = (smallContainers * smallDeposit);
totalDeposit = (totalBigDeposit + totalSmallDeposit);

alert(`The refound you will receive is ${totalDeposit} $`);