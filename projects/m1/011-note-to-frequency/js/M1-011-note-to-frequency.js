// Declarations with values of constants.
const note_C4_Hz = 261.63;
const note_D4_Hz = 293.66;
const note_E4_Hz = 329.63;
const note_F4_Hz = 349.23;
const note_G4_Hz = 392.00;
const note_A4_Hz = 440.00;
const note_B4_Hz = 493.88;

// Declarations with values of local variables.
let noteIn_User, note_Octave_check, note_Octave_Exponent, note_Octave_Letter, note_Octave_Number, note_Octave_Number_FreuencyHz;

// Control loop that the data entered must have 2 characters, the first between A and G and the second between 0 and 8, otherwise it prints an error message on the screen and then requests to enter the data again
do {
  // Reading Notes
  noteIn_User = prompt('Please, insered the note:').toUpperCase();

  // The note inserted must have 2 characters, the first between A and G and the second between 0 and 8
  note_Octave_check = /^[A-G][0-8]$/.test(noteIn_User);

  // Check the note inserted must have 2 characters, the first between A and G and the second between 0 and 8
  if (note_Octave_check) {
    note_Octave_Letter = noteIn_User.slice(0, 1);
    note_Octave_Number = parseInt(noteIn_User.slice(1, 2));
  } else {
    alert(`\nError! --> The data entered are not musical notes.\n`);
  }
} while (!note_Octave_check)

// Calculate exponent frequencies of musical notes.
note_Octave_Exponent = (Math.pow(2, 4 - note_Octave_Number));

// Calculating additional frequencies from the given value (freq. 4th octave) and varying the exponent according to the input received
if (note_Octave_Letter == "C") {
  note_Octave_Number_FreuencyHz = (note_C4_Hz / note_Octave_Exponent).toFixed(2);
  alert(`\nTo The note "${note_Octave_Letter}${note_Octave_Number}" corresponds to the frequency --> ${note_Octave_Number_FreuencyHz} Hz\n`);
}
else if (note_Octave_Letter == "D") {
  note_Octave_Number_FreuencyHz = (note_D4_Hz / note_Octave_Exponent).toFixed(2);
  alert(`\nTo The note "${note_Octave_Letter}${note_Octave_Number}" corresponds to the frequency --> ${note_Octave_Number_FreuencyHz} Hz\n`);
}
else if (note_Octave_Letter == "E") {
  note_Octave_Number_FreuencyHz = (note_E4_Hz / note_Octave_Exponent).toFixed(2);
  alert(`\nTo The note "${note_Octave_Letter}${note_Octave_Number}" corresponds to the frequency --> ${note_Octave_Number_FreuencyHz} Hz\n`);
}
else if (note_Octave_Letter == "F") {
  note_Octave_Number_FreuencyHz = (note_F4_Hz / note_Octave_Exponent).toFixed(2);
  alert(`\nTo The note "${note_Octave_Letter}${note_Octave_Number}" corresponds to the frequency --> ${note_Octave_Number_FreuencyHz} Hz\n`);
}
else if (note_Octave_Letter == "G") {
  note_Octave_Number_FreuencyHz = (note_G4_Hz / note_Octave_Exponent).toFixed(2);
  alert(`\nTo The note "${note_Octave_Letter}${note_Octave_Number}" corresponds to the frequency --> ${note_Octave_Number_FreuencyHz} Hz\n`);
}
else if (note_Octave_Letter == "A") {
  note_Octave_Number_FreuencyHz = (note_A4_Hz / note_Octave_Exponent).toFixed(2);
  alert(`\nTo The note "${note_Octave_Letter}${note_Octave_Number}" corresponds to the frequency --> ${note_Octave_Number_FreuencyHz} Hz\n`);
}
else if (note_Octave_Letter == "B") {
  note_Octave_Number_FreuencyHz = (note_B4_Hz / note_Octave_Exponent).toFixed(2);
  alert(`\nTo The note "${note_Octave_Letter}${note_Octave_Number}" corresponds to the frequency --> ${note_Octave_Number_FreuencyHz} Hz\n`);
}