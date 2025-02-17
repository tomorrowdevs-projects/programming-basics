const generaNumeroCasuale = () => Math.floor(Math.random() * 49) + 1;

const numberArray = [];

for (let i = 0; i < 6; i++) {
  let randomNumber;

 do {
    randomNumber = generaNumeroCasuale();
  } while (numberArray.includes(randomNumber));

    numberArray.push(randomNumber);
}

numberArray.sort((a, b) => a - b);

console.log("I numeri vincenti sono: ");
for (const myNumber of numberArray) {
  console.log(myNumber);
}
