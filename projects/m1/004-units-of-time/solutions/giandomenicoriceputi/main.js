// read from the user the numbers of days / hours / minutes / and second
// convert all in second and display it

const days = parseInt(prompt("Please enter days:"));
const hours = parseInt(prompt("Please enter hours:"));
const minutes = parseInt(prompt("Please enter minutes:"));
const seconds = parseInt(prompt("Please enter seconds:"));;

let result;

function responseInSecond() {
    result = parseInt(( days * 24 * 60 * 60 ) + ( hours * 60 * 60) + ( minutes * 60) + seconds);
        return result
}

responseInSecond()

alert( result)
