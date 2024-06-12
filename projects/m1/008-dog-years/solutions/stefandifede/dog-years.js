const dogYears = prompt("Insert dog years")

//converting user input into human age consdering: -first two years = 10.5; -each other year = 4
function conversion () {
//if user input is less than 0, display an error
    if (dogYears < 0) {
        alert("please insert a valid value for dog's years")
    }
//calculating dog years in human years 
    else {if (dogYears <= 2) {
        let convertedYears = dogYears * 10.5
        alert("Dog age converted in human years is: " + convertedYears)
    } else {
        convertedYears = (2 * 10.5) + ((dogYears - 2) * 4)
        alert("Dog age converted in human years is: " + convertedYears)
    }}
    
}

conversion()