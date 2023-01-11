const yearDogPuppy = 10.5; // constant statements
let yearHuman, yearsDogAdult, ageDog; //variable declarations

//yearHuman = 3;
yearHuman = parseInt(
  prompt("How many human years do you want to convert in dog years?")
);
yearsDogAdult = yearDogPuppy * 2;
if (yearHuman <= 0) {
  alert("Error: The years inserted are invalid.");
} else {
  if (yearHuman > 2) {
    yearsDogAdult = yearDogPuppy * 2;
    //---------------------------------------------------
    ageDog = (yearHuman - 2) * 4 + yearsDogAdult; // I calculated each
    //---------------------------------------------------
    console.log("Years Human    ", yearHuman); //console.log for error checking
    console.log("Year Dog Adult ", yearsDogAdult); //console.log for error checking
    console.log("Age Dog        ", ageDog); //console.log for error checking
    alert(`The dog is ${ageDog} years old.`);
  } else if (yearHuman == 2) {
    alert(`The Adult dog is ${yearsDogAdult} years old.`);
  } else {
    alert(`The Puppy dog is ${yearDogPuppy} years old.`);
  }
}

// -------------------------------------------------------------------------
/*# ANNI DEL CANE
- i cani raggiungono l'età adulta in circa 2 anni.
- contare ciascuno dei primi 2 anni umani come 10,5 anni canini,
- contare ogni 1 umano come 4 cani
Scrivere un programma che implementi la conversione da
- anni umani in anni canini
Controllare il programma funzioni correttamente per:
- conversioni inferiori a 2 anni umani
- conversioni di 2 o più anni umani.
Il programma visualizza un messaggio di errore appropriato se l'utente immette un numero negativo.
# Documentazione
Per questa soluzione di progetto è possibile utilizzare:
- Variabili, espressioni, istruzioni
- Stringhe
# Scadenza
Questo progetto deve essere completato in un massimo di **2 ore**
  */
// -------------------------------------------------------------------------
