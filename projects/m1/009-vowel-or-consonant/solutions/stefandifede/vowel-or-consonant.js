const userInput = prompt("Insert a letter")

//creating an array of vowels
const vowel = ["a", "e", "i", "o", "u"]

function vowelOrConsonant () {
//if user input is "y" display a different message
    if (userInput == "y") {
        alert("Y is sometimes a vowel and sometimes a consonant")
    }
//if user input is included in vowels array  
    else if (vowel.includes(userInput)) {
        alert(userInput + " is a vowel")
    } else {
        alert (userInput + " is a consonant")
    }
}

vowelOrConsonant()