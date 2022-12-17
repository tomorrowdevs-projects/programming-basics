//ask note to user
let userInput = prompt("Enter a Note and discover its Frequency."); // C3
userInput = userInput.toUpperCase();

//separate letter and number
const userLetter = userInput.slice(0, 1); // "C"
let userNumber = parseInt(userInput.slice(1, 2)); // "3"

//verify value is a note and if i isn't asking again an input to user
while(isNaN(userNumber)){
  userInput = prompt("Value not accepted. Enter a Note and discover its Frequency.")
  userNumber = parseInt(userInput.slice(1, 2));
}

//frequencies base of notes
const noteA4 = 440.00;
const noteB4 = 493.88;
const noteC4 = 261.63;
const noteD4 = 293.66;
const noteE4 = 329.63;
const noteF4 = 349.23;
const noteG4 = 392.00;

//function expression to calculate the frequency
function noteToFrequency(frequencyPos4, valueUserNumber){
  let frequencyAskedByUser = frequencyPos4 / Math.pow(2, 4-valueUserNumber);
  alert(userInput + " frequency (Hz) is " + frequencyAskedByUser.toFixed(2));
}

//display result
switch(userLetter) {
    case 'A':
        noteToFrequency(noteA4, userNumber);
        break
    case 'B':
        noteToFrequency(noteB4, userNumber);
        break
    case 'C':
        noteToFrequency(noteC4, userNumber);
        break
    case 'D':
        noteToFrequency(noteD4, userNumber);
        break
    case 'E':
        noteToFrequency(noteE4, userNumber);
        break
    case 'F':
        noteToFrequency(noteF4, userNumber);
        break
    case 'G':
        noteToFrequency(noteG4, userNumber);
        break
    default:
        alert("Value not accepted. Enter a Note and discover its Frequency.")
        break
}