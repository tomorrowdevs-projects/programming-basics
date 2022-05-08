// Begin by writing a program that reads the name of a note from the user and displays the note’s frequency. Your program should support all of the notes listed previously.

// Once you have your program working correctly for the notes listed previously you should add support for all of the notes from C0 to C8. While this could be done by adding many additional cases to your if statement, such a solution is cumbersome, inelegant and unacceptable for the purposes of this exercise. Instead, you should exploit the relationship between notes in adjacent octaves. In partic- ular, the frequency of any note in octave n is half the frequency of the corre- sponding note in octave n + 1. By using this relationship, you should be able to add support for the additional notes without adding additional cases to your if statement.

// Hint: You will want to access the characters in the note entered by the user individually when completing this exercise. Begin by separating the letter from the octave. Then compute the frequency for that letter in the fourth octave using the data in the table above. Once you have this frequency you should divide it by 24−x , where x is the octave number entered by the user. This will halve or double the frequency the correct number of times.

const c4 = 261.63;
const d4 = 293.66;
const e4 = 329.63;
const f4 = 349.23;
const g4 = 392.0;
const a4 = 440.0;
const b4 = 493.88;

const userOctaves = prompt('Inserisci la nota').toLowerCase();

const letter = userOctaves.slice(0, 1);
const octave = userOctaves.slice(1);

const frequency = c4 / Math.pow(2, 4 - octave);
const frequencyFloored = Math.floor(frequency);

if (userOctaves == c4) {
  alert(`${c4}`);
} else if ((letter == 'c' && octave < 4) || (letter == 'c' && octave >= 5)) {
  alert(`${frequencyFloored}`);
} else if (userOctaves == d4) {
  alert(`${d4}`);
} else if (userOctaves == e4) {
  alert(`${e4}`);
} else if (userOctaves == f4) {
  alert(`${f4}`);
} else if (userOctaves == g4) {
  alert(`${g4}`);
} else if (userOctaves == a4) {
  alert(`${a4}`);
} else if (userOctaves == b4) {
  alert(`${b4}`);
} else {
  alert('Inserisci una nota da C0 a C8');
}
