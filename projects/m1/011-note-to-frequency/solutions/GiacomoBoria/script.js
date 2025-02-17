/*Begin by writing a program that reads the name of a note from the user and displays the note’s frequency. 
Your program should support all of the notes listed previously.
Once you have your program working correctly for the notes listed previously you should add support for all of the notes from C0 to C8. While this could be done by adding many additional cases to your if statement, such a solution is cumbersome, inelegant and unacceptable for the purposes of this exercise. 
Instead, you should exploit the relationship between notes in adjacent octaves. 
In partic- ular, the frequency of any note in octave n is half the frequency of the corre- sponding note in octave n + 1. 
By using this relationship, you should be able to add support for the additional notes without adding additional cases to your if statement.
Hint: You will want to access the characters in the note entered by the user individually when completing this exercise.
Begin by separating the letter from the octave. Then compute the frequency for that letter in the fourth octave using the data in the table above. 
Once you have this frequency you should divide it by 24−x , where x is the octave number entered by the user. This will halve or double the frequency the correct number of times. */

// Declare variables with known frequencies
const freqC4 = 261.63;
const freqD4 = 293.66;
const freqE4 = 329.63;
const freqF4 = 349.23;
const freqG4 = 392.00;
const freqA4 = 440.00;
const freqB4 = 493.88;

// Declare variables for all frquency (for condition)
let otherFreq;

// User Input
const userNote = prompt("Type in your favorite note", 0).toLowerCase();

// Condition validaton: Input minor 2 and minor g and minor 8 
if (userNote.length > 2 || userNote[0] > "g" || userNote[1] > 8) {
   alert("You must type two digits witch letters included a-g and numebr 0-8");

// calculate the frequency per single note
} else if ( userNote[0] == "c") {
  otherFreq = freqC4/ (2**(4 - userNote[1]));
} else if ( userNote[0] == "d") {
  otherFreq = freqD4/ (2**(4 - userNote[1]));
} else if ( userNote[0] == "e") {
  otherFreq = freqE4/ (2**(4 - userNote[1]));
} else if ( userNote[0] == "f") {
  otherFreq = freqF4/ (2**(4 - userNote[1]));
} else if ( userNote[0] == "g") {
  otherFreq = freqG4/ (2**(4 - userNote[1]));
} else if ( userNote[0] == "a") {
  otherFreq = freqA4/ (2**(4 - userNote[1]));
} else if ( userNote[0] == "b") {
  otherFreq = freqB4/ (2**(4 - userNote[1]));
}
alert(`The frequancy the your note is: ${otherFreq}`);