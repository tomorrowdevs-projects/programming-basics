// Dichiaro la variabile che conterrà la stringa immessa dall'utente, converto i caratteri della stringa in maiuscolo
let userOctave = prompt("Write a note");
userOctave = userOctave.toUpperCase();

/* Dichiaro una variabile per il controllo della stringa immessa dall'utente 
(deve avere 2 caratteri, il primo tra A e G e il secondo tra 0 a 8), restitusce un valore booleano */
let validOctave = /^[A-G][0-8]$/.test(userOctave);

// Dichiaro le variabili che conterranno separatamente la lettera e il numero che compongono la nota
let octaveLet;
let octaveNum;
    
/* Pongo la condizione iniziale: se la stringa inserita è corretta verrà divisa in due variabili distinte 
da utilizzare nelle condizioni successive altrimenti stampo un messaggio di errore */
if (validOctave) {
octaveLet = userOctave.slice(0,1);
octaveNum = userOctave.slice(1,2);
} else {
alert("Invalid entry!");      
} 

// Dichiaro la variabile per il valore della frequenza
let freq;

//Imposto per ogni lettera il calcolo della frequenza corrispondente partendo dal valore dato (freq. quarta ottava) e variando l'esponente in base all'input ricevuto 
if (octaveLet == "C") {
    freq = (261.63/(Math.pow(2, 4-octaveNum))).toFixed(2);
    alert(freq + " Hz");
} else if (octaveLet == "D") {
    freq = (293.66 / (Math.pow(2, 4-octaveNum))).toFixed(2); 
    alert(freq + " Hz");
} else if (octaveLet == "E") {
    freq = (329.63/(Math.pow(2, 4-octaveNum))).toFixed(2); 
    alert(freq + " Hz");
} else if (octaveLet == "F") {
    freq = (349.23/(Math.pow(2, 4-octaveNum))).toFixed(2); 
    alert(freq + " Hz");
} else if (octaveLet == "G") {
    freq = (392.00/(Math.pow(2, 4-octaveNum))).toFixed(2); 
    alert(freq + " Hz");
} else if (octaveLet == "A") {
    freq = (440.00/(Math.pow(2, 4-octaveNum))).toFixed(2); 
    alert(freq + " Hz");
} else if (octaveLet == "B") {
    freq = (493.88/(Math.pow(2, 4-octaveNum))).toFixed(2); 
    alert(freq + " Hz");
}