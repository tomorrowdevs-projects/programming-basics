const userInput = prompt("insert a month")

const isThirty = ["april", "june", "september","november"]
const isThirtyone = ["january", "march", "may", "july", "august", "october", "december"]

function monthToNumber () {
    if (userInput == "february") {
        alert(userInput + " has 28 or 29 days")
    } else if (isThirty.includes(userInput)) {
        alert(userInput + " has 30 days")
    } else if (isThirtyone.includes(userInput)) {
        alert(userInput + " has 31 days")
    }
}

monthToNumber()