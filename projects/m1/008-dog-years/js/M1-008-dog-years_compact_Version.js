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
