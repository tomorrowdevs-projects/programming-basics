// # Simulazione di due dadi

// In questo esercizio simulerai 1.000 lanci di due dadi.
// Inizia scrivendo una funzione che simula il lancio di una coppia di dadi a sei facce.
// La tua funzione non prenderà alcun parametro.
// Restituirà il totale che è stato tirato su due dadi come unico risultato.
// Scrivi un programma principale che utilizzi la tua funzione per simulare il lancio di due dadi a sei facce 1.000 volte.
// Durante l'esecuzione del programma, dovrebbe contare il numero di volte in cui si verifica ogni totale.
// Quindi dovrebbe visualizzare una tabella che riassume questi dati.
// Esprimi la frequenza per ciascun totale come percentuale del numero di lanci eseguiti.
// Il tuo programma dovrebbe anche visualizzare la percentuale prevista dalla teoria della probabilità per ogni totale.

// # Two Dice Simulation

// In this exercise you will simulate 1,000 rolls of two dice. 
// Begin by writing a function that simulates rolling a pair of six-sided dice.  
// Your function will not take any parameters.  
// It will return the total that was rolled on two dice as its only result. 
// Write a main program that uses your function to simulate rolling two six-sided dice 1,000 times. 
// As your program runs, it should count the number of times that each total occurs. 
// Then it should display a table that summarizes this data. 
// Express the frequency for each total as a percentage of the number of rolls performed. 
// Your program should also display the percentage expected by probability theory for each total. 

function sumDices(){
    let diceArray = []

    for(let i = 0; i < 1000; i ++ ){
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let sum = dice1 + dice2;
    diceArray.push(sum);
    }

    return diceArray;
};

function frequency(array){
    let rolls = {
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12
      }

      for (let key in rolls) {
        rolls[key] = array.filter((value) => value === rolls[key]).length
      }

      return rolls
};

function percentage(obj){
        let rollsPercentage = []
    for(let value in obj){
        obj[value] = ((obj[value] / 1000) * 100).toFixed(2) + "%";
        rollsPercentage.push(obj[value])
    }
    return rollsPercentage
}


console.log(sumDices())
console.log(frequency(sumDices()))
console.log(percentage(frequency(sumDices())))

