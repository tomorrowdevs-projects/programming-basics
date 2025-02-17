const totalTheValues = function () {
    const enteredValue = prompt("Enter a numeric value to sum or a blank line to abort the program: ");
    //limit case 
    if (enteredValue === "0") {
        return Number(enteredValue) + totalTheValues();
    }
    //base case
    if (enteredValue === "") {
        return 0;
    }

    const numberValue = Number(enteredValue);
    // if an entered value is not a number or a blank line, call the function again
    if (!numberValue) {
        return totalTheValues();
    }
    return numberValue + totalTheValues();
}
const result =  totalTheValues()
alert(`The result is: : ${result}`)