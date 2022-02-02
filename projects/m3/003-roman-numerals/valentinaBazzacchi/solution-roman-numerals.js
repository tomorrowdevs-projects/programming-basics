const romanTable = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
}

let romanNum = prompt("Enter a Roman numeral");
let int;
int = romanToInt(romanNum, romanTable);
alert(`The corresponding integer is ${int}`);

function romanToInt(str, obj) {
    
    let v0 = str.charAt(0);
    let v1 = str.charAt(1);
    // Base case
    if (str === "") {
        return int = 0;
    // Recursive case	
    } else {
        romanToInt(str.slice(1), obj);
    }
    if (v1 === "") {
        return int += obj[v0];
    } else if (obj[v0] >= obj[v1]) {
        return int += obj[v0];
    } else if (obj[v0] < obj[v1]) {
        return int -= obj[v0];
    } // end condition
} // end function

/*
(user input) romanNum = "XCVI"
start function
I call: str = "XCVI"
base case = false; start recursive:
II call: str.slice(1) --> str = "CVI"
III call: str.slice(1) --> str = "VI"
IV call: str.slice(1) --> str = "I"
V call: str.slice(1) --> str = "" --> base case = true; returns int = 0;

Variables to compare consecutive values in the str ( = romanNum ): 
v0 = str.charAt(0), v1 = str.charAt(1)

IV call: str = "I"; v0 = "I", v1 = "" --> return int += obj["I"] --> int = 0 + 1 = 1;
III call: str = "VI"; v0 = "V", v1 = "I" --> obj["V"] > obj["I"] --> return int += 5 --> int = 1 + 5 = 6;
II call: str = "CVI"; v0 = "C", v1 = "V" --> obj["C"] > obj["V"] --> return int += 100 --> int = 6 + 100 = 106;
I call: str = "XCVI"; v0 = "X", v1 = "C" --> obj["X"] < obj["C"] --> return int -= 10 --> int = 106 - 10 = 96
(output) int = 96 
*/