function getOrdinalNumber(integer) {
    let ordinalNumbers = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];
    ordinalNumbers = ordinalNumbers[integer-1];
    if (integer >= 1 && integer <= 12) {  
        return integer + " - " + ordinalNumbers;
    } else {
        return "" 
    }
}
   
let number = prompt("Enter a integer from 1 to 12");
alert(getOrdinalNumber(number));

////////////////////////////////////////////////////////////////////

function getOrdinalNumber(integer) {
    let ordinalNumbers = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];
    ordinalNumbers = ordinalNumbers[integer-1];
    return ordinalNumbers || ""; // Used logical operator OR, if ordinalNumbers is false return a blank line 
}

let number = prompt("Enter a integer from 1 to 12");
alert(getOrdinalNumber(number));