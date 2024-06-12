// MAIN PROGRAM
const lettersArr = [
    ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"], ["D", "G"],
    ["B", "C", "M", "P"], ["F", "H", "V", "W", "Y"], ["K"], ["J", "X"], ["Q", "Z"]
];

let lettersPoints = new Map();
lettersPoints = createMap(lettersArr);

let word = prompt("Enter a word");
alert(`The Scrabble score for this word is: ${scrabbleScore(word, lettersPoints)}`);

// // Display map --> key: array of letters, value: points (int)
// for (let entry of lettersPoints.entries()) {
//     console.log(entry);
// }

// FUNCTIONS
function createMap(arr) {
    for (let y = 0, i = 1; y < arr.length; y++) {
        if (i === 6) {
            lettersPoints.set(arr[y], i + 2);
        } else if (i === 7) {
            lettersPoints.set(arr[y], i + 3);
        } else {
            lettersPoints.set(arr[y], i);
        }
        i++;
    } // end first for loop
    return lettersPoints;
} // end function

function scrabbleScore(str, map) {
    let totalPoints = 0;
    for (let letter of str.toUpperCase()) {
        map.forEach((point, arr) => {
            arr.forEach((elem) => {
                if (letter === elem) {
                    totalPoints += point;
                } // end condition
            }); // end arr.for.Each
        }); // end map.for.Each
    } //end for...of
    return totalPoints;
} // end function


