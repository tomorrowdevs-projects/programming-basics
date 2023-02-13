const userNumber = parseInt(prompt("Enter a number between 1 and 12"));

showOrdinalNumber(userNumber);

function showOrdinalNumber(userNumberInput){

  while(userNumberInput < 1 || userNumberInput > 12){
    userNumberInput = parseInt(prompt("The number entered is not between 1 and 12. Enter a number between 1 and 12"));
  }
  
  const ordinalNumber = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"]

  alert("The number entered is: " + userNumberInput + ". The ordinal number is: " + ordinalNumber[userNumberInput - 1]);

}