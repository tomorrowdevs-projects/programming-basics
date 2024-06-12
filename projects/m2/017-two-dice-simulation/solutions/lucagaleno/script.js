//017-two-dice-simulation

function rollDice(){
    let sumDice = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1); 
return sumDice
}

const iterationNumbers = 1000; //numero di tiri con i dadi
const numbersDice = [2,3,4,5,6,7,8,9,10,11,12]; //possibili combinazioni con 2 dadi

let table = []; //array dove verranno inseriti gli ogetti

//inserimento iniziale di tutte le somme dei numeri possibili come oggetti
numbersDice.forEach(element => {
    let num = {
        'number ': element,
        'frequency ': 0,
        'Percentage frequency ': 0,
    }
    table.push(num)
});

//ciclo di iterazioni per il numero di tiri di dadi
for (i=1 ; i<=iterationNumbers; i++){
 
    let diceSum = rollDice();

    //ricerca dell'indice del numero casuale estratto (-2 rispetto a diceSum)
    //array.map() ci permette di trovare con proprietà oggetto 
    const tableIndex = table.map(object => object["number "]).indexOf(diceSum);
    
    //aggiornamento dei valori frequenza e %frequenza
    table[tableIndex]["frequency "] = table[tableIndex]["frequency "] + 1;
    table[tableIndex]["Percentage frequency "] = (((table[tableIndex]["frequency "]) * 100) / iterationNumbers) +'%';

};
// per visualizzare la "tabella" necessaria la ',' e non +
console.table('table ', table);
