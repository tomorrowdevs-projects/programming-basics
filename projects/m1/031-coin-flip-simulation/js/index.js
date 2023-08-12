// # Simulazione di lancio di monete

// Qual è il numero minimo di volte che devi lanciare una moneta prima di poter avere tre lanci consecutivi che si traducono nello stesso risultato (tutti e tre sono testa o tutti e tre croce)? Qual è il numero massimo di lanci che potrebbero essere necessari? Quanti flip sono necessari in media? In questo esercizio esploreremo queste domande
// creando un programma che simula diverse serie di lanci di monete.

// Crea un programma che utilizzi un generatore di numeri casuali per simulare il lancio di una moneta diverse volte.
// La moneta simulata dovrebbe essere equa, il che significa che la probabilità di testa è uguale alla probabilità di croce.
// Il tuo programma dovrebbe lanciare monete simulate finché non si verificano 3 teste consecutive di 3 code consecutive. Visualizza una H ogni volta che il risultato è testa e una T ogni volta che il risultato è croce, con tutti i risultati di una simulazione sulla stessa linea.
// Quindi visualizzare il numero di lanci necessari per raggiungere 3 occorrenze consecutive dello stesso risultato. Quando il tuo programma viene eseguito, dovrebbe eseguire la simulazione 10 volte e riportare il numero medio di lanci necessari. L'output di esempio è mostrato di seguito:

// ```
// H T T T (4 lanci)
// H H T T H T H T T H H T H T T H T T T (19 lanci)
// T T T (3 lanci)
// T H H H (4 lanci)
// H H H (3 lanci)
// T H T T H T H H T T H H T H T H H H (18 lanci)
// H T T H H H (6 lanci)
// T H T T T (5 lanci)
// T T H T T H T H T H H H (12 lanci)
// T H T T T (5 lanci)

// In media sono stati necessari 7,9 salti mortali.
// ```

const TAILORHEADARRAY = ["H","T"];
let tailOrHeadArrayPush = [];
let sumLengthArray = [];
let counter1 = 0;
let counter2 = 0;

while(counter1 < 10){
    while(counter2 < 1){
        let ht = Math.floor(Math.random() * TAILORHEADARRAY.length);
        let lastResult = TAILORHEADARRAY[ht];
        tailOrHeadArrayPush.push(lastResult);
        if(tailOrHeadArrayPush.length >= 3){
            if((lastResult == tailOrHeadArrayPush[tailOrHeadArrayPush.length -2]) && (lastResult == tailOrHeadArrayPush[tailOrHeadArrayPush.length-3])){
                counter2++
                counter1++
            }
        }

    }
    console.log(`${tailOrHeadArrayPush} (${tailOrHeadArrayPush.length} flips)`);
    counter2 = 0;
    sumLengthArray.push(tailOrHeadArrayPush.length);
    tailOrHeadArrayPush = [];
}
let sum = 0;
for(let i = 0; i < sumLengthArray.length; i++){
    sum += sumLengthArray[i]
}
let average = sum / 10;
console.log(`On average, ${average} flips were needed`)

