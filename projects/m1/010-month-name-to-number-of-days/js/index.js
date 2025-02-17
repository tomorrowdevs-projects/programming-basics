//ask user to insert name of the month

let userInput = prompt("Digit the month name and discover how many days are in it.").toLowerCase();

//display the answer for each case

if((userInput == "january") || (userInput == "march") || (userInput == "may") || (userInput == "july") || (userInput == "august") || (userInput == "october") || (userInput == "dicember")){
  alert("There are 31 days in " + userInput + ".");
}else if((userInput == "april") || (userInput == "june") || (userInput == "september") || (userInput == "november")){
  alert("There are 30 days in " + userInput + ".");
}else if((userInput == "february")){
  alert("There are 28 or 29 days in " + userInput + ".");
}else{
  alert("Invalid entry, please reload the page and type in the name of a month to find out how many days it consists of.");
}