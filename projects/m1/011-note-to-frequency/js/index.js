//index of notes
const hzA4 = 440.00;
const hzB4 = 493.88;
const hzC4 = 261.63;
const hzD4 = 293.66;
const hzE4 = 329.63;
const hzF4 = 349.23;
const hzG4 = 392.00;

//asking a note to user to convert in uppercase, split the letter and the number to be processed
let userNote = prompt("Enter a Note to convert it in its Frequency.");
//separate letter and number and convert number in Int
let noteLetter = userNote.slice(0, 1).toUpperCase();
let noteNumber = parseInt(userNote.slice(1, 2));


//check if the value is a note, if not ask the user to insert a note again
while(!isNaN(noteLetter) || isNaN(noteNumber)){
  userNote = prompt("The value entered is not suitable, enter a note and find out its frequency, e.g. 'A5'.");
  noteLetter = userNote.slice(0, 1).toUpperCase();
  noteNumber = parseInt(userNote.slice(1, 2));
}

//function to convert note in frequency and display the result
function convertNoteToHz(hzInNoteInInPos4, noteNumberValue){
  //define var and calculate the note's frequency
  let noteFreuency = hzInNoteInInPos4 / Math.pow(2, 4-noteNumberValue);
  //fix frequency decimal, add a dot every 3 digits and a replace the dot for decimal with a comma
  noteFreuency = noteFreuency.toFixed(2).replace('.',',');
  //alert to display the result
  alert("The frequency of " + userNote + " is " + noteFreuency + "Hz");
}

//display the frequency for all cases and ask to reload the page if the note digited by user is out of index
if(noteLetter == "A"){
  convertNoteToHz(hzA4, noteNumber);
}else if(noteLetter == "B"){
  convertNoteToHz(hzB4, noteNumber);
}else if(noteLetter == "C"){
  convertNoteToHz(hzC4, noteNumber);
}else if(noteLetter == "D"){
  convertNoteToHz(hzD4, noteNumber);
}else if(noteLetter == "E"){
  convertNoteToHz(hzE4, noteNumber);
}else if(noteLetter == "F"){
  convertNoteToHz(hzF4, noteNumber);
}else if(noteLetter == "G"){
  convertNoteToHz(hzG4, noteNumber);
}else{
  alert("The value entered is not suitable. Please reload the page and enter a note and find out its frequency, e.g. 'A5'.")
}