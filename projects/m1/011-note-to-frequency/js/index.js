let note = prompt("choose a note") 
let octave = (note.slice(1))
note = (note.slice(0, 1))

octave = (2 ** (4 - octave))
let frequency;

if (note === "C") { frequency = 261.63 }
else if (note === "D") { frequency = 293.66 }
else if (note === "E") { frequency = 329.63 }
else if (note === "F") { frequency = 349.23 }
else if (note === "G") { frequency = 392.00 }
else if (note === "A") { frequency = 440.00 }
else if (note === "B") { frequency = 493.88 }

console.log(`note's frequency: ${frequency / octave}Hz`)