const Note = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

const FrequencyHz = [261.63, 293.66, 329.63, 349.23, 392.00, 392.00, 440.00, 493.88];

let noteUser, i, frequenzyHzNote;

noteUser = prompt("Please insert the name of the Note");
noteUser=noteUser.toUpperCase();
//alert(`The Note entered is " ${noteUser} "`);

for (i = 0; i < Note.length; i++) {
  if (noteUser == Note[i]) {
    frequenzyHzNote = FrequencyHz[i].toFixed(2);
    alert(`The frequency of the inserted note " ${noteUser} " is " ${frequenzyHzNote} (Hz) "`);
  }
}

//  Formula passata da Vittorio Manicanti nella call di lunedi 09/01/2023
//  (392.00/(Math.pow(2, 4-noteNum))).toFixed(2); 