let myString = "";
let inputNumber = 0;

function numberToOrdinal(inputNumber) {
    
    if (inputNumber >= 1 && inputNumber <= 12) {
        switch (inputNumber) {
            case 1: myString = "First"; break;
            case 2: myString = "Second"; break;
            case 3: myString = "Third"; break;
            case 4: myString = "Fourth"; break;
            case 5: myString = "Fifth"; break;
            case 6: myString = "Sixth"; break;
            case 7: myString = "Seventh"; break;
            case 8: myString = "Eighth"; break;
            case 9: myString = "Ninth"; break;
            case 10: myString = "Tenth"; break;
            case 11: myString = "Eleventh"; break;
            case 12: myString = "Twelfth"; break;
          }
    } else {
        myString = "";
    }
    return myString;
}

function numberConverter() {
    myString = numberToOrdinal(inputNumber = Number(prompt("Inserisci un numero interod a uno a 12")));
    if (myString === "") {
        document.getElementById('output').innerHTML = `Hai inserito un valore errato`;}
    else {document.getElementById('output').innerHTML = `Il tuo numero è ${inputNumber} ovvero ${myString}`;}
}