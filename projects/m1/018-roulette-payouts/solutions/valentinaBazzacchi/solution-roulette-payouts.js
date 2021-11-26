// Ottengo un numero random tra 0 e 37 dove 37 rappresenta "00"
let randomNumber = Math.floor(Math.random() * 38);

// Dichiaro l'array di numeri corrispondenti alle caselle rosse e tramite il metodo .indexOf determino se randomNumber è compreso in red
let red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
if (red.indexOf(randomNumber) > -1) {
red = true;
} else {
red = false;
}

// Dichiaro la condizione per il colore "Red" or "Black"
let color;
if (red) {
color = "Red";
} else if (!red && randomNumber != 37 && randomNumber != 0){
color = "Black";
}

// Dichiaro la condizione per "Odd" or "Even"
let oddOrEven;
if (randomNumber % 2 == 0 && randomNumber != 0) {
oddOrEven = "Even";
} else if (randomNumber % 2 > 0 && randomNumber != 37) {
oddOrEven = "Odd"  
}

// Dichiaro la condizione per il range di appartenenza "1-18" or "19-36"
let range;
if (randomNumber >= 1 && randomNumber <= 18) {
range = "1 to 18";
} else if (randomNumber >= 19 && randomNumber <= 36) {
range = "19 to 36";
}

// Creo gli alert del risultato combinando le diverse variabili e condizioni
if (randomNumber == 37) {
alert("The spin resulted 00:\nPay 00");
} else if (randomNumber == 0) {
alert("The spin resulted 0:\nPay 0");  
} else {  
alert("The spin resulted in " + randomNumber + ":\nPay " + randomNumber + "\nPay " + color + "\nPay " + oddOrEven + "\nPay " + range);
}