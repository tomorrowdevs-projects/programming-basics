
//i declare my golbal variables, the "expression" we'll work on, and three arrays, one for every element of the  expression (numbers, parentheses and operators);
let expression = "24 + 54 - (21/2)*{[234/ - 45]}";

let operators = [];
let parentheses = [];
let numbers = [];


//my first function "getOperators" use a RegExp to match all the operators in the expression then push them iin their array and delete them from the string, that we'll be stored in a new variable called "cleanedString";
    function getOperators (string, array) {

        let newString = "";
        let operatorReg = /^[\^\*\-\+=.-/]+$/g;

        for (char of string){

            if (operatorReg.test(char)){
                array.push(char);
                char = " ";
                newString += char;
            } else {
                newString += char;
            }
        }

        return newString;
    }

let cleanedString = getOperators(expression, operators);


//the second function "getParentheses", use an if statement to match all the parentheses in the new string, then delete them and pushes them to their array.
    function getParentheses (string, array){

        let newString= "";

        for (char of string) {
            if (char === "(" || char === ")" || char === "[" || char === "]" || char === "{" || char === "}"){
                array.push(char);
                char = "";
                newString += char;
            } else {
                newString += char;
            }
        }

        return newString;
    }

cleanedString = getParentheses (cleanedString, parentheses);


//the last function "getNumbers" cleans up an array from the original  string from all the non-digit characters with a RegExp then push the digit elements in their array. 
    function getNumbers (string, array){
        let numberArray = string.split(" ");
        let digitRegex = /\d/g;

            for (char of numberArray){
                if (digitRegex.test(char)) {
                    array.push(char)
                }
            }

    }

getNumbers(cleanedString, numbers);
alert("Your string: " + expression + "\nThe numbers in your string:   " + numbers.join(" ") + "\nThe operators in your string:   " + operators.join(" ") + "\nThe parentheses in your string:   " + parentheses.join(" "))

