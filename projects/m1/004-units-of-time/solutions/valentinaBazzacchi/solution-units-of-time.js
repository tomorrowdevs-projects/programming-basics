const SEC_IN_MIN = 60;
const SEC_IN_HRS = 60 * SEC_IN_MIN;
const SEC_IN_DAY = 24 * SEC_IN_HRS; 
    
let daysByUser;
let hrsByUser;
let minByUser;
let secByUser;
    
daysByUser = +prompt("How many days?");
hrsByUser = +prompt("How many hours?");
minByUser = +prompt("How many minutes?");
secByUser = +prompt("How many seconds?");
    
alert( `The total number of seconds is ${(daysByUser * SEC_IN_DAY + hrsByUser * SEC_IN_HRS + minByUser * SEC_IN_MIN + secByUser)}.` );