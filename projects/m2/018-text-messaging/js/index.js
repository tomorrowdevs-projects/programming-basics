
//i declare my main variable that will be the text we'll translate in "keypad" number, then i create the object "keypad", where the keys from 1 to 9 represent the different values on a real keypad.
let text = prompt("--- Text Messaging ---\n\nPlease, enter a  text to see how it would have been on an old keypad:");

let keyPad = {
    1: [".", ",", "?", "!", ":", "1"],
    2: ["A", "B", "C", "2"],
    3: ["D", "E", "F", "3"],
    4: ["G", "H", "I", "4"],
    5: ["J", "K", "L", "5"],
    6: ["M", "N", "O", "6"],
    7: ["P", "Q", "R", "S", "7"],
    8: ["T", "U", "V", "8"],
    9: ["W", "X", "Y", "Z", "9"],
    0: [" ", "0"]
};



// then i write down che function "getKeys" that uses only two parameters (a text and an object) to iterate over every char of the string and push the name of the array that contains the matching char to an another array that will be our final output.
function getKeys (text, object) {

text = text.toUpperCase();
let array = [];

    for (i = 0; i < text.length; i++){

        for (j = 0; j < Object.keys(object).length; j ++){

            for (k = 0; k < object[j].length; k ++){

                if (object[j][k] === text[i]){
                    array.push(Object.keys(object)[j].toString());
                }
            }

        }
    }

    return "If you sent your text 10 years ago it would have looked like: " + array.join("");
}


alert(getKeys(text, keyPad));
