/*In this exercise you will create a program that reads a letter of the alphabet from the user. 
If the user enters a, e, i, o or u then your program should display a message indicating that the entered letter is a vowel. 
If the user enters y then your program should display a message indicating that sometimes y is a vowel, and sometimes y is a consonant. 
Otherwise your program should display a message indicating that the letter is a consonant.*/

// Create Array alphabet
const alphabet = ["a", "b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h","i","j" ,"k" ,"l","m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s", "t", "u" ,"v","w","x" ,"y", "z"];

 // Input User 
alert("Hi, do you have a doubt about which letters are vowels or consonants?");
const letterUserInput = prompt("Quiet, type a letter and I'll tell you whether vowel or consonant", );

 // Trasform letteruserInput in lowercase in case user type in uppercase
 // Condition: If input is a vocal?
if (letterUserInput.toLowerCase() == "a" || letterUserInput.toLowerCase() == "e" || letterUserInput.toLowerCase() == "i" || letterUserInput.toLocaleLowerCase() == "o" || letterUserInput.toLowerCase() == "u" ) {
    alert(`${letterUserInput} is a vowel`)

 // Condition: If Input Y
} else if (letterUserInput.toLowerCase() == "y" ) {
    alert(`attention, Y can be both vowel and consonant depending on use cases.\n Es: In the word HAPPY serves as a vowel.\n Es: In the word BEYOND serves as a consonant.`)
 // Condition: if Consonant
} else if (alphabet.includes(letterUserInput.toLowerCase())) {
    alert(`${letterUserInput} is a consonant`)
 // Condition: Input no letter
} else {
    alert(`${letterUserInput} is not a letter. Try typing again ; \)`)
}
