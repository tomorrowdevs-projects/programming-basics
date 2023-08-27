// i declare my three  global variables, the integer we will work on, and two objects, one for the  integers and one  for the "tens".
let int = prompt("Please, enter a number between 0 and 999 to see how it's wrote in english: ");

let integers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
}

let tens = {
    1: "",
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighteen",
    9: "ninety"
}


// then i declare the function "getNumber" with 3 parameters (the integer and two objects where it will take the results).
function getNumber(number, integers, tens){
        

//i convert the three integers that create the numbers in strings with the pad method to help me later of some if statements.
        let hundredsToString = String(number).padStart(3, '0')[0];
        let tensToString = String(number).padStart(3, '0')[1];
        let integerToString = String(number).padStart(3, '0')[2];

        let string = "";

// here we check if there is any "hundred", if so the if statement will check for the corrispective property  in the integers object and add  it in the "string" string with the word "hundred".
        if (hundredsToString > 0){
            string += integers[hundredsToString] + " hundred ";
        };


//the we check for any "ten". if the "ten" is there and it begins with  "1" it will find its corrispective in the "integers" object otherwise it will search for it in the "tens" object.
        if (tensToString > 0) {
                if (tensToString > 1){
                    string += tens[tensToString] + " ";
                } else {
                    string += integers[tensToString + integerToString] + " ";
                }
        };


// our last if statement check for any last integer to add, if the "tens" doesn't begin with "1", and add another case if there arent' numbers to convert at all.
        if (integerToString > 0 && (tensToString > 1 || tensToString === "0")){
            string += integers[integerToString];
        };

        if (integerToString === "0" && tensToString === "0" && hundredsToString === "0"){
            string += "zero";
        }

      
        return string;
}


alert(getNumber(int, integers, tens));