//Define months

const monthsOfTheYear = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

//asking input to user and convert it in lowercase

let userInput = prompt("Enter a month and discover the number of days in it.");
userInput = userInput.toLowerCase();

//verify if the input is a month, if not a new alert appear

while(!monthsOfTheYear.includes(userInput)){
  userInput = prompt("Incorrect data inserted, please digit a month of the year.");
}
//if the input is a month, appear an alert displaing the number of days in the month

if(userInput == "january" || userInput == "march" || userInput == "may" || userInput == "july" || userInput == "august" || userInput == "october" || userInput == "december"){
  alert(userInput + " has 31 days")
} else if(userInput == "february"){
  alert(userInput + " has 28 or 29 days")
} else{
  alert(userInput + " has 30 days")
}