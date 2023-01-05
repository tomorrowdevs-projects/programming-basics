const yearDogPuppy = 10.5;
let yearHuman, yearsDogAdult, ageDog;

//yearHuman = prompt("How many human years do you want to convert in dog years?")
yearHuman = 2;

if (yearHuman <= 0) {
  alert("Error: The years inserted are invalid.");
} else {
  if (yearHuman >= 2) {
    yearsDogAdult = yearDogPuppy * 2;
    ageDog = (yearHuman * 4) + yearsDogAdult;
    alert(`The adult dog is ${ageDog} years old.`);
  } else {
    alert(`The puppy dog is ${yearDogPuppy} years old.`);
  }
}
/*
# ANNI DEL CANE

- i cani raggiungono l'età adulta in circa 2 anni.
- contare ciascuno dei primi 2 anni umani come 10,5 anni canini,
- contare ogni anno umano come 4 cani

Scrivere un programma che implementi la conversione da
- anni umani in anni canini

Controllare il programma funzioni correttamente per:
- conversioni inferiori a due anni umani
- conversioni di due o più anni umani.

Il programma visualizza un messaggio di errore appropriato se l'utente immette un numero negativo.

# Documentazione
Per questa soluzione di progetto è possibile utilizzare:
- Variabili, espressioni, istruzioni
- Stringhe
# Scadenza
Questo progetto deve essere completato in un massimo di **2 ore**
  */