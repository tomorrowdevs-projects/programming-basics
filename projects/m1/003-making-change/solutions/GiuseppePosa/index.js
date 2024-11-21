// // MAKING CHANGE
// Consider the software that runs on a self-checkout machine. One task that it must be able to perform is to determine how much change to provide when the shopper pays for a purchase with cash. Write a program that begins by reading a number of cents from the user as an integer. Then your program should compute and display the denominations of the coins that should be used to give that amount of change to the shopper. The change should be given using as few coins as possible. Assume that the machine is loaded with pennies, nickels, dimes, quarters, loonies and toonies.


//1)calcolare il resto da dare quando si paga in contanti
//2)chiede il numero di centesimi all'utente come numero intero
//3)



let monete = [
    {'nome': 'penny', 'valore': 1, 'num': 0},
    {'nome': 'nickel', 'valore': 5, 'num': 0},
    {'nome': 'dime', 'valore': 10, 'num': 0},
    {'nome': 'quarter', 'valore': 25, 'num': 0},
    {'nome': 'loonies', 'valore': 100, 'num': 0},
    {'nome': 'toonies', 'valore': 200, 'num': 0}
]

let centesimi = prompt("Inserisci il numero di centesimi:");


for(let i = monete.length-1; i>=0;i-- ){

    while(centesimi >= monete[i].valore ) {
        centesimi = centesimi - monete[i].valore;
        monete[i].num++;
    }

}

let risultato = monete.filter((moneta) => moneta.num > 0);

//Esempio: Il resto è di 2 toonies, 1 loonies
alert(`Il resto è di ${risultato.map((moneta) => `${moneta.num} ${moneta.nome}`).join(",")}`)