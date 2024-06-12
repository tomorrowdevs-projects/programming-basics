//asking user the day and month of birth
let inputUser = prompt("Insert your month and day of birth, ex: March 31");

//convert all in lowercase
inputUser = inputUser.toLowerCase();

//extract day and first three letter of the month
const monthUser = inputUser.slice(0, 3);
const dayUser = inputUser.slice(-2);

//defining the period and display the sign
if((monthUser == "jan" && dayUser <= 19) || (monthUser == "dec" && dayUser >= 22 && dayUser <= 31)){
  alert("Your sign is Capricorn");
} else if((monthUser == "jan" && dayUser >= 20 && dayUser <= 31) || (monthUser == "feb" && dayUser <= 18)){
  alert("Your sign is Aquarius");
} else if((monthUser == "feb" && dayUser >= 19 && dayUser <= 29) || (monthUser == "mar" && dayUser <= 20)){
  alert("Your sign is Pisces");
} else if((monthUser == "mar" && dayUser >= 21 && dayUser <= 31) || (monthUser == "apr" && dayUser <= 19)){
  alert("Your sign is Aries");
} else if((monthUser == "apr" && dayUser >= 20 && dayUser <= 30) || (monthUser == "may" && dayUser <= 20)){
  alert("Your sign is Taurus");
} else if((monthUser == "may" && dayUser >= 21 && dayUser <= 31) || (monthUser == "jun" && dayUser <= 20)){
  alert("Your sign is Gemini");
} else if((monthUser == "jun" && dayUser >= 21 && dayUser <= 30) || (monthUser == "jul" && dayUser <= 22)){
  alert("Your sign is Cancer");
} else if((monthUser == "jul" && dayUser >= 23 && dayUser <= 31) || (monthUser == "aug" && dayUser <= 22)){
  alert("Your sign is Leo");
} else if((monthUser == "aug" && dayUser >= 23 && dayUser <= 31) || (monthUser == "sep" && dayUser <= 22)){
  alert("Your sign is Virgo");
} else if((monthUser == "sep" && dayUser >= 23 && dayUser <= 30) || (monthUser == "oct" && dayUser <= 22)){
  alert("Your sign is Libra");
} else if((monthUser == "oct" && dayUser >= 23 && dayUser <= 31) || (monthUser == "nov" && dayUser <= 21)){
  alert("Your sign is Scorpio");
} else if((monthUser == "nov" && dayUser >= 22 && dayUser <= 30) || (monthUser == "dec" && dayUser <= 21)){
  alert("Your sign is Sagittarius");
} else{
  alert("Invalid date.");
}