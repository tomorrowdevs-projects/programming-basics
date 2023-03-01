const noteInput = prompt("Insert a note")

//creo un array delle note in oggetti
class notes {
    constructor(noteName, frequency){
        this.noteName = noteName;
        this.frequency = frequency
    }
}

const c = new notes ("c", 261.63) 
const d = new notes ("d", 293.66)
const e = new notes ("e", 329,63)
const f = new notes ("f", 349.23)
const g = new notes ("g", 392.00)
const a = new notes ("a", 440.00)
const b = new notes ("b", 493.88)

const notesArr = [c, d, e, f, g, a, b]

//dividere l'input in lettera e numero

let arr = []
arr = noteInput.split('')


//ottenere la frequenza richiesta partendo dalla frequenza 4 della lettera inserita

function findFrequency () {
    for (i = 0; i <= notesArr.length - 1; i++) {
        if (arr[0] == notesArr[i].noteName) {
            alert((notesArr[i].frequency/(Math.pow(2, 4-arr[1]))).toFixed(2) + " hz")
        }
    }
}

findFrequency()