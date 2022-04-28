// Write a program that asks the user to enter the width and length of a room. Once these values have been read, your program should compute and display the area of the room. The length and the width will be entered as floating-point numbers. Include units in your prompt and output message; either feet or meters, depending on which unit you are more comfortable working with.

//chiedo all'utente larghezza e lunghezza
const roomWidth = parseFloat(prompt('Inserisci la larghezza'));
const roomLength = parseFloat(prompt('Inserisci la lunghezza'));

//verifico se l'input è corretto, se è corretto, calcolo l'area della stanza
if (isNaN(roomWidth)) {
  alert('Inserisci una larghezza valida, riprova');
} else if (isNaN(roomLength)) {
  alert('Inserisci una lunghezza valida, riprova');
} else {
  const roomArea = roomWidth * roomLength;
  alert(`L'area della stanza è ${roomArea} metri`);
}
