
let string = prompt("--- Roman Numerals ---\n\nEnter a Roman Numeral to convert it into a number: ");
//let string = "MMDCCXII"; //used this string to test.

    function convertRoman (string, int = 0) {

//base case; stop the recursion when there are no other characters in the string.
        if  (string.length === 0){
            return int;
        }

//object declaration;
        const romanNumerals = {
            "M": 1000,
            "D": 500,
            "C": 100,
            "L": 50,
            "X": 10,
            "V": 5,
            "I": 1
        };

//declarated "curr" and "next" to enhace readabilty;
        let curr = romanNumerals[string[0]];
        let next = romanNumerals[string[1]];


//if statement to resolve addition and subtraction problem in the string;
        if (curr < next){
            int -= curr;
        } else if (curr => next){
            int += curr;
        } 

        return convertRoman(string.substring(1), int);

    }

alert(string + " is equal to " + convertRoman(string) + "!");