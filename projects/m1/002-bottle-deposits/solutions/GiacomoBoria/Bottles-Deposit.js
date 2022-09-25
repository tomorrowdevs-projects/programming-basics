/* In many jurisdictions a small deposit is added to drink containers to 
encourage people to recycle them. In one particular jurisdiction, drink 
containers holding one liter or less have a $0.10 deposit, and drink 
containers holding more than one liter have a $0.25 deposit. Write a 
program that reads the number of containers of each size from the user. 
Your program should continue by computing and displaying the refund that 
will be received for returning those containers. Format the output so that 
it includes a dollar sign and two digits to the right of the decimal 
point. */

// description user program
alert("Ciao! Prima di ricevere il tuo rimborso dovrai rispondere a un paio 
di domande. Se sei pronto clicca OK per procedere.")

// constant repayment
const refundBottlesOneLiter = 0.10;
const refundBottlesPlusLiter = 0.25;

// bottles reported
let bottlesOneLiter = Number(prompt("Quante Bottiglie da un litro o più 
piccole hai hai riportato?", 0));
let bottlesPlusLiter = Number(prompt("Quante Bottiglie pi grandi da un 
litro hai riportto?", 0));

// calculation of bottle disbursements
let creditOneLiter = bottlesOneLiter * refundBottlesOneLiter
let creditPlusLiter = bottlesPlusLiter * refundBottlesPlusLiter

let totalCredit = creditOneLiter + creditPlusLiter 

/*  Short Version 
let totalCredit = (bottlesOneLiter * refundBottlesOneLiter) + 
(bottlesPlusLiter * refundBottlesPlusLiter) */

// Result on screen
window.prompt("il rimborso totale che ti aspetta è di $", 
totalCredit.toFixed(2));
