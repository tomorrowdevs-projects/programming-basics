let tone = prompt("Write a tone");
let note = tone[0]; // prendo la prima lettera.
let octave = +tone[1]; // prendo il numero.
let frequency;

switch (note) {
    case 'A':
        frequency = 440.0;
        break;
    case 'B':
        frequency = 493.88;
        break;
    case 'C':
        frequency = 261.63;
        break;
    case 'D':
        frequency = 293.66;
        break;
    case 'E':
        frequency = 329.63;
        break;
    case 'F':
        frequency = 349.23;
        break;
    case 'G':
        frequency = 392.00;
        break;
    default:
        alert("I don't know such tone");
}
tone = frequency / (2 ** (4 - octave));
console.log(tone);