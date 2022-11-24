//user insert a value
const userInput = prompt("Insert here a value of 4 digits")

//check if input is four digits only
function sumOfDigits () {
    if (userInput > 9999 || isNaN(userInput)) {
        alert("Please insert a value of 4 digits max")
    } else {
//divide input in a single digit 
        let inputArr = Array.from(userInput);
//sum each digit
        let sum = 0;
        for (i = 0; i <= inputArr.length - 1 ;  i++) {
            sum = sum + parseFloat(inputArr[i])
        }
        alert("Total is: " + sum)
        }
}
sumOfDigits()

