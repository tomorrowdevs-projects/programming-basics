
let string = prompt("Please, enter a text to see how many unique characters it contains: ");

const alphabet = {};

//i create the "alphabet" object's properties using a for loop on the char code from 1 to 123.
for (let i = 0; i < 123; i++){
    alphabet[String.fromCharCode(i)] = 0;
}

//the i declare the function "getUniqueCharacters" to match the chars from the string with the keys of the object "alphabet".
function getUniqueCharacters(string, object) {
    
    let output = [];

//using a loop on the string length i push to the "output" array all the chars that match with the object keys that aren't already into it.
    for (i = 0; i < string.length; i++){

        for (j = 0; j < Object.keys(object).length; j++){
            if (string[i].toLowerCase() == Object.keys(object)[j]) {
                if(output.includes(Object.keys(object)[j]) === false){
                output.push(Object.keys(object)[j]);
                }      
            }
        }
    }
    
    return "Yor text contains " + output.length + " unique characters!\n (" + output.join(", ") + ")!" ;
    
}


alert(getUniqueCharacters(string, alphabet));


