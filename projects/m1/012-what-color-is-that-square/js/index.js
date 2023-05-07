const prompt = promptSync();
const positionChoise = prompt('Inserisci le coordinate che vuoi trovare. Scrivi il valore delle colonne in lettere e il valore delle righe in numeri: ').toLowerCase();

let xUtent = positionChoise.charAt(0);
let yUtent = parseInt(positionChoise.charAt(1));

let positionX = false;
let positionY = false;
let positionYNumber = 0;
let positionXNumber = 0;

const xChoise = ["a","b","c","d","e","f","g","h"];
for (let i = 0; i < xChoise.length; i++) {
    if (xChoise[i] === xUtent) {
      positionXNumber = i + 1;
      positionX = true;
      break;
    }
  }

const yArray = [1,2,3,4,5,6,7,8];

  for (let i = 0; i < yArray.length; i++) {
    if (yArray[i] === yUtent) {
        positionYNumber = i + 1;
        positionY = true;
      break;
    }
  }

  const count = (positionXNumber + positionYNumber) % 2;


  if (!positionX || !positionY) {
    console.log("Non hai inserito le coordinate valide");
  } else {
    if (count === 0) {
        console.log("La casella che hai scelto è nera")
    } else {
        console.log("La casella che hai scelto è bianca")
    }
  }
