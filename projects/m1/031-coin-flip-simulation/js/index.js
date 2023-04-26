const testNum = 10; // costante che viene utilizzata per indicare il numero di volte che vogliamo eseguire una serie di lanci di una moneta
let totalFlips = 0; //tiene traccia del numero totale di lanci necessari in tutti e 10 i lanci
let result;

for (let i = 1; i <= testNum; i++) { //viene utilizzato un ciclo for per eseguire la serie di lanci di moneta per testNum (10) volte 
  let flips = 0, count = 0;
  let lastResult = null, result = null;
//vengono inizializzate a zero le variabili flips e count e a null le variabili lastOutcome e outcome 
 // console.log(flips, count);

  while (count < 3) { //viene eseguito un ciclo while che ripete finché non si sono ottenuti tre risultati consecutivi uguali (ovvero tre "H" o tre "T")
    
    if (Math.random() < 0.5) { //viene generato un risultato casuale per il lancio della moneta, utilizzando il metodo Math.random() che se minore di 0.5 mi da HEAD, altrimenti TAILS
      result = "H"
    }else {
    result = "T"  
    } //che sia < o > di 0.5 il valore di Math.random viene assegnato alla variabile outcome     
    flips++; //viene incrementato il valore di flips, che tiene traccia del numero di lanci effettuati durante la simulazione corrente

    if (lastResult !== null && result === lastResult) {
      count++;
    } else {
      count = 1;
    } //Viene quindi utilizzato if/else per controllare se il risultato corrente è uguale al risultato dell'ultimo lancio della moneta 

    lastResult = result;
  } //il ciclo while viene ripetuto finché count non raggiunge il valore di 3 (ovvero finché non si ottengono tre risultati consecutivi uguali)

  totalFlips += flips;
  console.log(`${flips} flips`);
} //Alla fine di ogni test, il numero di flips viene aggiunto alla variabile totalFlips, che tiene traccia del numero totale di lanci necessari in tutte le simulazioni

const averageFlips = totalFlips / testNum;
console.log(`On average ${averageFlips} flips were needed.`);
//viene calcolata la media del numero di lanci effettuati, dividendo il valore di totalFlips e testNum
