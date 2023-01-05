const yearDogPuppy = 10.5; // constant statements

let yearHuman, yearsDogAdult, ageDog; //variable declarations

//yearHuman = 3;
yearHuman = prompt("How many human years do you want to convert in dog years?");

if (yearHuman <= 0) {
  console.log("Years Human    ", yearHuman);
  //consol.log("Error: This value is not valid!");
  alert("Error: The years inserted are invalid.");
} else {
  if (yearHuman >= 2) {
    console.log("Years Human    ", yearHuman); //console.log for error checking

    yearsDogAdult = yearDogPuppy * 2; // I have obtained the years of a dog that has reached maturity, that is, it is an adult  ---> 2 anni canini = 10.5 *2
    console.log("Year Dog Adult ", yearsDogAdult); //console.log for error checking

    ageDog = (yearHuman * 4) + yearsDogAdult;    // I calculated each additional human year as 4 dog years. ---> 1 human year = 4 dog years + adult dog years
    console.log("Age Dog        ", ageDog); //console.log for error checking

    console.log(`The dog is ${ageDog} years old.`);
    alert(`The dog is ${ageDog} years old.`);
  } else {
    console.log(`The dog is ${yearDogPuppy} years old.`);
    alert(`The dog is ${yearDogPuppy} years old.`);
  }
}

/*
I cani raggiungono l'età adulta in circa due anni.                 ---> 2 anni cane adulto

- contare ciascuno dei primi due anni umani come 10,5 anni canini, ---> 2 anni canini = 10.5 *2
- dopo 2 anni canini contare ogni anno umano aggiuntivo come 4 anni canini  ---> 1 anno umano = 4 anni canini  + anni cane adulto

Scrivete un programma che implementi la
- conversione da anni umani ad anni canini

Testare il programma per 
- per  inferiori a due anni umani
- per due o più anni umani.

Visualizzare un messaggio di errore appropriato se l'utente immette un numero negativo.
*/
