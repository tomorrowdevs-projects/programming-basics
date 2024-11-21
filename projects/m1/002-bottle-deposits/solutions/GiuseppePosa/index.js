// BOTTLE DEPOSITS
// In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them. In one particular jurisdiction, drink containers holding one liter or less have a $0.10 deposit, and drink containers holding more than one liter have a $0.25 deposit. Write a program that reads the number of containers of each size from the user. Your program should continue by computing and displaying the refund that will be received for returning those containers. Format the output so that it includes a dollar sign and two digits to the right of the decimal point.

//1) input data
//2)calculation 
//3)output data


let smallContainers = prompt('inserisci numero di bottiglie minori di 1 Litro');

let bigContainers = prompt('inserisci numero di bottiglie maggiori di 1 Litro');

let refund = smallContainers * 0.10 + bigContainers *0.25;



alert(`hai guadagnato ${refund.toFixed(2)}$`)
