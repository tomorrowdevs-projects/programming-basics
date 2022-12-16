//asking input to the user
const userLetter = prompt("Enter a letter.");
const randomNumber =  Math.round(Math.random());

//conditions and alerts
while(userLetter.length > 1 || !isNaN(userLetter)){
  userLetter = prompt("Several letters have been entered or a number has been entered. Only one letter can be entered. Enter a letter.");
}
if(userLetter == "a" || userLetter == "e" || userLetter == "i" || userLetter == "o" || userLetter == "u" || userLetter == "y" && randomNumber == "1"){
  alert("The letter entered " + userLetter + " is a vowel.")
} else{
  alert("The letter " + userLetter + " is a consonant.")
}