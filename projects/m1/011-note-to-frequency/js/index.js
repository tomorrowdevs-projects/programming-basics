// La tabella seguente elenca un'ottava di note musicali, che iniziano con il Do centrale, lungo
// con le loro frequenze.

// | Nota | Frequenza (Hz) |
// |------|-----------|
// | DO4 | 261,63 |
// | RE4 | 293,66 |
// | Mi4 | 329,63 |
// | F4 | 349.23 |
// | G4 | 392,00 |
// | A4 | 440,00 |
// | SI4 | 493,88 |


// Inizia scrivendo un programma che **legge il nome di una nota** dall'utente e **visualizza la frequenza della nota**.
// Il tuo programma dovrebbe supportare tutte le note elencate in precedenza.

// Una volta che il tuo programma funziona correttamente per le note elencate in precedenza
// dovresti aggiungere il supporto per tutte le note da C0 a C8.
// Sebbene ciò possa essere fatto aggiungendo molti casi aggiuntivi alla tua istruzione if, una tale soluzione è ingombrante,
// inelegante e inaccettabile ai fini di questo esercizio.
// Invece, dovresti sfruttare la relazione tra note in ottave adiacenti.
// In particolare, **la frequenza di ogni nota nell'ottava n è la metà della frequenza della nota corrispondente nell'ottava n + 1.**
// Utilizzando questa relazione, dovresti essere in grado di aggiungere il supporto per le note aggiuntive senza
// aggiungendo ulteriori casi all'istruzione if.

// Suggerimento:
// Dovrai accedere ai caratteri nella nota inserita dall'utente individualmente al completamento di questo esercizio.
// Inizia separando la lettera dall'ottava.
// Quindi calcola la frequenza per quella lettera nella quarta ottava utilizzando i dati nella tabella sopra.
// Una volta che hai questa frequenza dovresti dividerla per 2<sup>4−x</sup> ,
// dove x è il numero di ottava immesso dall'utente.
// Questo dimezzerà o raddoppierà la frequenza il numero corretto di volte.

// Esempio:
// Ingresso = F6
// Uscita = 1396,9


// Ingresso = B0
// Uscita = 30,8


const note = prompt(`Enter a musical note: `).toUpperCase();
const octave = + prompt('enter the octave');


const noteArray = ["G", "A", "E", "B", "C", "D", "F"];
const frequencyArray = [1,2,3,4,5,6,7,8];
let foundNote = false;
let foundOctave = false;

for (let i = 0; i < noteArray.length; i++) {
  if (note === noteArray[i]) {
    foundNote = true;
    break;
  }
}

for (let i = 0; i < frequencyArray.length; i++) {
    if (octave === frequencyArray[i]) {
      foundOctave = true;
      break;
    }
  }
let frequency = {
    D: 293.66,
    C: 261.63,
    E: 329.63,
    A: 440.00,
    G: 392.00,
    B: 493.88,
    F: 349.23
}


let frequencyValue = 0;

if (!foundNote || !foundOctave) {
    alert(`you did not enter the right values`);
  } else {
    for (var key of Object.getOwnPropertyNames(frequency)) {
    switch (note) {
        case "C":
          frequencyValue =  frequency[key] * Math.pow(2, octave - 4);
          break;
        case "D":
          frequencyValue = frequency[key] * Math.pow(2, octave - 4);
          break;
        case "E":
          frequencyValue = frequency[key] * Math.pow(2, octave - 4);
          break;
        case "F":
          frequencyValue = frequency[key] * Math.pow(2, octave - 4);
          break;
        case "G":
          frequencyValue = frequency[key]  * Math.pow(2, octave - 4);
          break;
        case "A":
          frequencyValue = frequency[key] * Math.pow(2, octave - 4);
          break;
        case "B":
          frequencyValue = frequency[key] * Math.pow(2, octave - 4);
          break;
      }
    }
}




alert(`the frequency of your note is: ${frequencyValue}`)