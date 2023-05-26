let userInput = parseInt(prompt("Inserisci un numero"));
while (isNaN(userInput) || userInput <= 1) {
  userInput = parseInt(prompt("Inserimento non valido. Inserisci un numero maggiore di 1"));
}

let factor = 2;

while (userInput > 1) {
  if (userInput % factor === 0) {
    console.log(factor);
    userInput = userInput / factor;
  } else {
    factor++;
  }
}