
let letters;

let alphabet = " ";
  
for (let i = 65; i <= 90; i++) {
        letters = String.fromCharCode(i);
        alphabet += letters;
    }
  


let userDigit = prompt("Enter the message to be encrypted").toUpperCase();

console.log(userDigit);
let mainDigit
let index;

let shift = 3;

let finalMessage = '';
let shiftLetter;
for (let i = 0; i < userDigit.length; i++){
  mainDigit = userDigit[i];
  
  index = alphabet.indexOf(mainDigit);
  console.log(index);
  if (index === 0) {
    shiftLetter = alphabet[index + shift] - alphabet.length;
  }  else if ((index  === 21) || (index  === 22)|| (index  === 23) ) {  
    shiftLetter = alphabet[(index + shift )];
    finalMessage += shiftLetter;
    } else if ((index + shift ) >= 24 )  {
    shiftLetter = alphabet[(index + (shift + 1)) -alphabet.length];
    finalMessage += shiftLetter;
  } else {    
    shiftLetter = alphabet[index + shift];
    finalMessage += shiftLetter;
  }
    
  }

alert(finalMessage);
  
