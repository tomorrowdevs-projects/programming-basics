const yearDogPuppy = 10.5; // constant statements
let yearHuman, yearsDogAdult, ageDog; //variable declarations

//yearHuman = 3;
yearHuman = prompt("How many human years do you want to convert in dog years?");

if (yearHuman <= 0) {
  alert("Error: The years inserted are invalid.");
} else {
  if (yearHuman > 2) {
    yearsDogAdult = yearDogPuppy * 2; // I have obtained the years of a dog that has reached maturity, that is, it is an adult  ---> 2 anni canini = 10.5 *2
    ageDog = (yearHuman * 4) + yearsDogAdult;    // I calculated each additional human year as 4 dog years. ---> 1 human year = 4 dog years + adult dog years
    console.log("Years Human    ", yearHuman); //console.log for error checking
    console.log("Year Dog Adult ", yearsDogAdult); //console.log for error checking
    //  ageDog = (yearHuman * 4) + yearsDogAdult;    // I calculated each additional human year as 4 dog years. ---> 1 human year = 4 dog years + adult dog years
    console.log("Age Dog        ", ageDog); //console.log for error checking
    alert(`The dog is ${ageDog} years old.`);
  } else if (yearHuman == 2) { // se metto if (yearHuman <= 2)  quando vado ad inserire  yearHuman = 1 mi restituisce  21 anni ??
    alert(`The Adultis dog is ${yearDogPuppy * 2} years old.`);
  }
  else {
    alert(`The Puppy dog is ${yearDogPuppy} years old.`);
  }
}
/*
How many human years do you want to convert in dog years?> 3
Years Human     3
Year Dog Adult  21
Age Dog         33
The dog is 33 years old.
*/

/*
# ANNI DEL CANE
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