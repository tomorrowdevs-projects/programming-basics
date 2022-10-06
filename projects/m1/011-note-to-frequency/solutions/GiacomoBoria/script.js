/*Begin by writing a program that reads the name of a note from the user and displays the note’s frequency. 
Your program should support all of the notes listed previously.
Once you have your program working correctly for the notes listed previously you should add support for all of the notes from C0 to C8. While this could be done by adding many additional cases to your if statement, such a solution is cumbersome, inelegant and unacceptable for the purposes of this exercise. 
Instead, you should exploit the relationship between notes in adjacent octaves. 
In partic- ular, the frequency of any note in octave n is half the frequency of the corre- sponding note in octave n + 1. 
By using this relationship, you should be able to add support for the additional notes without adding additional cases to your if statement.
Hint: You will want to access the characters in the note entered by the user individually when completing this exercise.
Begin by separating the letter from the octave. Then compute the frequency for that letter in the fourth octave using the data in the table above. 
Once you have this frequency you should divide it by 24−x , where x is the octave number entered by the user. This will halve or double the frequency the correct number of times. */

// ASSIGNMENT array at note and fequency
const notes = ["c4", "d4", "e4", "f4", "g4", "a4", "b4"];
const frequency = ["261.63", "293.66", "329.63", "349.23", "392.00", "440.00", "493.88"];

// User Input
const userNote = prompt("Type in your favorite note", 0).toLowerCase();

// Condition 2 digits
if (userNote.length > 2) {
    alert("You must type two digits");
}
// Condition case
if (notes.includes(userNote)) {
  const indexFrequency = notes.indexOf(userNote);
  alert(`The frequancy the your favorite note is: ${frequency[indexFrequency]}`)
} else {
    alert("Your note does not match the list of \"half-octaves,\" maybe you were looking for the frequency of another note on the C scale.")
}

const userOctave = Number(prompt("Insert the scale number of the C note you were looking for"))

const scaleFrequencyC = frequency[0] / (2**(4-userOctave));
alert(`The frequancy the your note is: ${scaleFrequencyC}`);