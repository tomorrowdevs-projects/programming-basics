const yearInput = prompt("Insert a year")

function isItLeap() {
    if (yearInput % 400 == 0 || yearInput % 100 != 0 && yearInput % 4 == 0) {
        alert(yearInput + " is a leap year")
    } else {
        alert(yearInput + " is not a leap year" )
    }
}

isItLeap();