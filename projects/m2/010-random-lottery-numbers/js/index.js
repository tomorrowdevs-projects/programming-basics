// # Numeri casuali della lotteria

// Per vincere il primo premio in una particolare lotteria, è necessario indovinare tutti e 6 i numeri sul proprio biglietto
// i 6 numeri compresi tra 1 e 49 estratti dall'organizzatore della lotteria.
// Scrivete un programma che generi una selezione casuale di 6 numeri per un biglietto della lotteria.
// Assicurati che i 6 numeri selezionati non contengano duplicati.
// Visualizza i numeri in ordine crescente.

// #  Random Lottery Numbers

// In order to win the top prize in a particular lottery, one must match all 6 numbers on his or her ticket to 
// the 6 numbers between 1 and 49 that are drawn by the lottery organizer.   
// Write a program that generates a random selection of 6 numbers for a lottery ticket. 
// Ensure that the 6 numbers selected do not contain any duplicates.  
// Display the numbers in ascending order.


const NUMBER_LIST = [];

let randomNumber;

function RandomLotteryNumbers(){

    while(NUMBER_LIST.length < 6){
        randomNumber = Math.floor(Math.random() * 49 ) + 1
        if(!NUMBER_LIST.includes(randomNumber)){
            NUMBER_LIST.push(randomNumber)
        }
    }

return NUMBER_LIST;
}

RandomLotteryNumbers()

NUMBER_LIST.sort(function(a, b){return a-b})


console.log(`The winning numbers are: ${NUMBER_LIST.join(', ')}`)