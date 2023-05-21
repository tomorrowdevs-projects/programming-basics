/*  Note Frequency
    C4   261.63
    D4   293.66
    E4   329.63
    F4   349.23
    G4   392.00
    A4   440.00
    B4   439.88   */

// reads the name of the note
const noteUser = prompt('Please, enter the note:').toUpperCase();
//divide the letter from the octave
const noteLetter = noteUser.slice(0,1);
const noteOctave = noteUser.slice(1,2);
//calc the frequency
const calcFrequency = Math.pow(2, 4-noteOctave)
// displays the note's frequency
let frequency;
switch(noteLetter){
  case 'C':
    frequency = (261.63/calcFrequency).toFixed(2)
    alert(frequency);
  break;
  case 'D':
    frequency = (293.66/calcFrequency).toFixed(2)
    alert(frequency);
  break;
  case 'E':
    frequency = (329.63/calcFrequency).toFixed(2)
    alert(frequency);
  break;
  case 'F':
    frequency = (349.23/calcFrequency).toFixed(2)
    alert(frequency);
  break;
  case 'G':
    frequency = (392.00/calcFrequency).toFixed(2)
    alert(frequency);
  break;
  case 'A':
    frequency = (440.00/calcFrequency).toFixed(2)
    alert(frequency);
  break;
  case 'B':
    frequency = (439.88/calcFrequency).toFixed(2)
    alert(frequency);
  break;
}
