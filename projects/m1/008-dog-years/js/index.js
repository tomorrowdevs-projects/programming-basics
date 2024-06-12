let anni = prompt("quanti anni umani vuoi convertire in anni canini ?")
if (anni < 0) {
  alert("Non puoi inserire un numero minore di 0!")
}
let annicane;
let totanni;

if (anni > 2) {
  anni = anni - 2; annicane = (anni * 4) + 21; totanni = annicane; console.log("Conversione in anni canini:",totanni);
} else if (anni <= 2) {
  totanni = anni * 10.5; console.log("Conversione in anni canini:", totanni);
}

