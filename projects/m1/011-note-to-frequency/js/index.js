const prompt = promptSync();
const noteChoice = prompt('Inserisci una nota musicale nel formato di notazione anglosassone: ').toLowerCase();
const octaveChoice = prompt('Inserisci l\'ottava di riferimento: ').toLowerCase();

const noteArray = ["C", "D", "E", "F", "G", "A", "B"];
const frequencyArray = ["1","2","3","4","5","6","7","8"];
let foundNote = false;
let foundOctave = false;

for (let i = 0; i < noteArray.length; i++) {
  if (noteChoice === noteArray[i]) {
    foundNote = true;
    break;
  }
}

for (let i = 0; i < frequencyArray.length; i++) {
    if (octaveChoice === frequencyArray[i]) {
      foundOctave = true;
      break;
    }
  }

const frequencyC = 261.63;
const frequencyD = 293.66;
const frequencyE = 329.63;
const frequencyF = 349.23;
const frequencyG = 392.00;
const frequencyA = 440.00;
const frequencyB = 493.88;

let frequencyValue = 0;

if (!foundNote || !foundOctave) {
    console.log("Non hai inserito i dati nel modo giusto");
  } else {
    switch (noteChoice) {
        case "C":
          frequencyValue = frequencyC * Math.pow(2, parseInt(octaveChoice) - 4);
          break;
        case "D":
          frequencyValue = frequencyD * Math.pow(2, parseInt(octaveChoice) - 4);
          break;
        case "E":
          frequencyValue = frequencyE * Math.pow(2, parseInt(octaveChoice) - 4);
          break;
        case "F":
          frequencyValue = frequencyF * Math.pow(2, parseInt(octaveChoice) - 4);
          break;
        case "G":
          frequencyValue = frequencyG * Math.pow(2, parseInt(octaveChoice) - 4);
          break;
        case "A":
          frequencyValue = frequencyA * Math.pow(2, parseInt(octaveChoice) - 4);
          break;
        case "B":
          frequencyValue = frequencyB * Math.pow(2, parseInt(octaveChoice) - 4);
          break;
      }
    }

console.log("La frequenza della tua nota è " + frequencyValue)


