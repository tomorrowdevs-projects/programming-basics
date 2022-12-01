
//i declare my first global variable, the text that will be translated.
let text = prompt("--- Morse Code ---\n\n\nEnter a message to translate it into 'Morse Code': ");

//here i create the "morseCode" object, that has as properties the the alphabet in morse code.
const morseCode = {
    A: "._",
    B: "_...",
    C: "_._.",
    D: "_..",
    E: ".",
    F: ".._.",
    G: "__.",
    H: "....",
    I: "..",
    J: ".___",
    K: "_._",
    L: "._..",
    M: "__",
    N: "_.",
    O: "___",
    P: ".__.",
    Q: "__._",
    R: "._.",
    S: "...",
    T: "_",
    U: ".._",
    V: "..._",
    W: ".__",
    X: "_.._",
    Y: "_.__",
    Z: "__..",
    1: "__..",
    2: "..___",
    3: "...__",
    4: "...._",
    5: ".....",
    6: "_....",
    7: "__...",
    8: "___..",
    9: "____.",
    0: "_____",
    Á: ".__._",
    Ä: "._._",
    É: ".._..",
    Ñ: "__.__",
    Ö: "___.",
    Ü: "..__"
}

//here i create the first  function "getArray", to clean the text string and create an array with the split method.
    function getArray(text) {
        let cleanedString = text.toUpperCase().replace(/\W+/gi, "");
        let stringArray = cleanedString.split("");
        return stringArray;
    }

text = getArray(text);



//the "getMorse" function, that iterateswith a for loop ovewr every element of the array created from the text string, to search for the matched key name in the morseCode object and to add it to the output string.
    function getMorse(text, object)  {

        let morseString = [];

        for (j = 0; j < text.length; j++) {

            for(i = 0; i < Object.keys(object).length; i++){

                if (Object.keys(object)[i].toString() === text[j]){
                    morseString.push(Object.values(object)[i]);

                }

            }
        }

        return morseString.join("  ");
    }


alert("Here it is your translated text: \n" + getMorse(text, morseCode))