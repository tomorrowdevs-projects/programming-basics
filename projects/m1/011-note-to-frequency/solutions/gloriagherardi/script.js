const note = prompt("inserisci la nota");

let frequency = 0;

if (note[0] == "c") {
    frequency =  (261.63/Math.pow(2, (4-parseInt(note[1])))).toFixed(2);
} else if (note[0] == "d") {
    frequency =  (293.66/Math.pow(2, (4-parseInt(note[1])))).toFixed(2);
} else if (note[0] == "e") {
    frequency =  (329.63/Math.pow(2, (4-parseInt(note[1])))).toFixed(2);
} else if (note[0] == "f") {
    frequency =  (329.63/Math.pow(2, (4-parseInt(note[1])))).toFixed(2);
} else if (note[0] == "g") {
    frequency =  (392.00/Math.pow(2, (4-parseInt(note[1])))).toFixed(2);
} else if (note[0] == "a") {
    frequency =  (440.00/Math.pow(2, (4-parseInt(note[1])))).toFixed(2);
}else if (note[0] == "b") {
    frequency =  493.88/Math.pow(2, (4-parseInt(note[1]))).toFixed(2);
}

alert("La frequenza per la nota " + note + " è " +  frequency + ".")

