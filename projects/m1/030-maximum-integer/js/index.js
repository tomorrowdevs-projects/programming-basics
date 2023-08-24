// # Maximum Integer

// This exercise examines the process of identifying the maximum value in a collection of integers. 
// Each of the integers will be randomly selected from the numbers between 1 and 100. 
// The collection of integers may contain duplicate values, and some of the integers between 1 and 100 may not be present.
// Take a moment and think about how you would solve this problem on paper. 

// Many people would check each integer in sequence and ask themself if the number that they are currently considering is larger than the largest number that they have seen previously. 
// If it is, then they forget the previous maximum number and remember the current number as the new maximum number. 
// This is a reasonable approach, and will result in the correct answer when the process is performed carefully. 
// If you were performing this task, how many times would you expect to need to update the maximum value and remember a new number?

// While we can answer the question posed at the end of the previous paragraph using probability theory, we are going to explore it by simulating the situation. 
// Create a program that begins by selecting a random integer between 1 and 100. 
// Save this integer as the maximum number encountered so far. 
// After the initial integer has been selected, generate 99 additional random integers between 1 and 100. 
// Check each integer as it is generated to see if it is larger than the maximum number encountered so far. 
// If it is then your program should update the maximum number encountered and count the fact that you performed an update. 
// Display each integer after you gen- erate it. Include a notation with those integers which represent a new maximum.

// After you have displayed 100 integers your program should display the maximum value encountered, along with the number of times the maximum value was updated during the process. 
// Partial output for the program is shown below, with... representing the remaining integers that your program will display. 
// Run your program several times. 
// Is the number of updates performed on the maximum value what you expected?

// ```
// 74 <== Update
// 58
// 17
// 40
// 37
// 13
// 34
// 46
// 52
// 80 <== Update
// 37
// 97 <== Update
// 45
// 55
// 73
// ...

// The maximum value found was 100
// The maximum value was updated 5 times

// # Numero intero massimo

// Questo esercizio esamina il processo di identificazione del valore massimo in una raccolta di numeri interi.
// Ognuno degli interi verrà selezionato casualmente tra i numeri compresi tra 1 e 100.
// La raccolta di numeri interi può contenere valori duplicati e alcuni dei numeri interi compresi tra 1 e 100 potrebbero non essere presenti.
// Prenditi un momento e pensa a come risolveresti questo problema sulla carta.

// Molte persone controllano ogni numero intero in sequenza e si chiedono se il numero che stanno attualmente considerando è maggiore del numero più grande che hanno visto in precedenza.
// Se lo è, dimenticano il numero massimo precedente e ricordano il numero corrente come nuovo numero massimo.
// Questo è un approccio ragionevole e si tradurrà nella risposta corretta quando il processo viene eseguito con attenzione.
// Se stavi eseguendo questa attività, quante volte ti aspetteresti di dover aggiornare il valore massimo e ricordare un nuovo numero?

// Mentre possiamo rispondere alla domanda posta alla fine del paragrafo precedente usando la teoria della probabilità, la esploreremo simulando la situazione.
// Crea un programma che inizia selezionando un numero intero casuale compreso tra 1 e 100.
// Salva questo numero intero come numero massimo incontrato finora.
// Dopo aver selezionato il numero intero iniziale, genera 99 numeri interi casuali aggiuntivi compresi tra 1 e 100.
// Controlla ogni numero intero mentre viene generato per vedere se è maggiore del numero massimo incontrato finora.
// Se lo è, il tuo programma dovrebbe aggiornare il numero massimo riscontrato e contare il fatto che hai eseguito un aggiornamento.
// Visualizza ogni numero intero dopo averlo generato. Includere una notazione con quegli interi che rappresentano un nuovo massimo.

// Dopo aver visualizzato 100 numeri interi, il programma dovrebbe visualizzare il valore massimo incontrato, insieme al numero di volte in cui il valore massimo è stato aggiornato durante il processo.
// L'output parziale per il programma è mostrato di seguito, con... che rappresenta i numeri interi rimanenti che verranno visualizzati dal programma.
// Esegui il tuo programma diverse volte.
// Il numero di aggiornamenti eseguiti sul valore massimo è quello previsto?

// ```
// 74 <== Aggiorna
// 58
// 17
// 40
// 37
// 13
// 34
// 46
// 52
// 80 <== Aggiorna
// 37
// 97 <== Aggiorna
// 45
// 55
// 73
//...

// Il valore massimo trovato era 100
// Il valore massimo è stato aggiornato 5 volte

let count = 0;
let maximumValue = 0;
let randomValue;
let i = 1

while(i <= 100){
   randomValue = Math.floor(Math.random()* 100);
   if(randomValue > maximumValue){
    maximumValue =  randomValue
    console.log(`${maximumValue} UPDATED!`)
    count++
   } else {
    console.log(`${randomValue}`)
   }
   i++

}

alert(`the maximum value found is: ${maximumValue}`)
alert(`the value has been updated for: ${count}`)