// In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them.  
// In one particular jurisdiction, drink containers holding one liter or less have a $0.10 deposit,
// and drink containers holding more than one liter have a $0.25 deposit.  
// Write a program that reads the number of containers of each size from the user.
// Your program should continue by computing and displaying the refund that will be received for returning those containers.
// Format the output so that it includes a dollar sign and two digits to the right of the decimal point.

// In molte giurisdizioni viene aggiunto un piccolo deposito ai contenitori per bevande per incoraggiare le persone a riciclarli.
// 1.In una particolare giurisdizione, i contenitori per bevande contenenti un litro o meno hanno un deposito di $ 0,10,
// 2. e i contenitori per bevande che contengono più di un litro hanno un deposito di $ 0,25.
// 3.Scrivere un programma che legga dall'utente il numero di contenitori di ciascuna dimensione.
// 4.Il tuo programma dovrebbe continuare calcolando e visualizzando il rimborso che verrà ricevuto per la restituzione di quei contenitori.
// 5.Formattare l'output in modo che includa il simbolo del dollaro e due cifre a destra della virgola decimale.

let containers1 = prompt("You insert the drink container: ");
let money1= 0.1;
let money2= 0.250;

if(containers1 <= 1){
    alert("you put in the bottle of one liter or less and receive " + "$" + money1.toFixed(2));
}else if(containers1 >1){
    alert("you entered the bottle larger than one liter and you receive " + "$" + money2.toFixed(2));
};



