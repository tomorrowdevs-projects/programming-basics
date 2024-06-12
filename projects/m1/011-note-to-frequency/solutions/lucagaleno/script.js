// 011 note to frequency

let noteInput = prompt('Please enter a note tobe converted in freqeuncy: ','').toUpperCase();

// estrazione della lettera e del numero
let noteLetter = noteInput.charAt(0);
let noteNumber = parseInt(noteInput.charAt(1));

// formato dell'input
let formatLetter = /^[A-G]+$/.test(noteLetter);
let formatNumber = /^\d+$/.test(noteNumber);

// ciclo di controllo per verificare che l'input sia corretto per entrambi i digit
while ((noteInput.length != 2) || ((formatLetter === false) || (formatNumber === false))) {
    let newNoteInput = prompt('Please enter a note with 2 digits ','').toUpperCase()
    noteInput = newNoteInput;
    noteLetter = noteInput.charAt(0);
    noteNumber = parseInt(noteInput.charAt(1));

    // se entrambi i formati sono come desiderati allora cambio il valore booleano
    if ((/^[A-G]+$/.test(newNoteInput.charAt(0)) === true) && ( /^\d+$/.test(newNoteInput.charAt(1)) === true)) {
        formatLetter = true;
        formatNumber = true;
    };
};

// array per poter eseguire cilclo successivo
let note = ['C','D','E','F','G','A','B'];
let frequency = [261.63 , 293.66, 329.63, 349.23, 392.00, 440.00, 493.88];
let frequencyOutput ;

for (var i = 0; i<=7; i++) {
if (noteLetter === note[i]) {
    frequencyOutput = (frequency[i] / (Math.pow(2 , (4 - noteNumber)))).toFixed(2);
    console.log ('Output frequency for '+ noteInput + ': ' + frequencyOutput);
    break;
};
};

