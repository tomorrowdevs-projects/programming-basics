//asking user the day and month of birth
let userMonthAndDay = prompt("Insert your month and day of birth, ex: March 31");

//convert user input in lowercase to prevent case sensitiveness errors
userMonthAndDay = userMonthAndDay.toLowerCase();

//extract day and first 4 letter of the month from user input
const dayBirth = userMonthAndDay.slice(-2);
const monthBirth = userMonthAndDay.slice(0, 3);

//defining the period and display the sign
if((monthBirth == "dec" && dayBirth >= 22 && dayBirth <= 31) || (monthBirth == "jan" && dayBirth <= 19)){
  alert("Your zodiac sign is Capricorn");
} else if((monthBirth == "jan" && dayBirth >= 20 && dayBirth <= 31) || (monthBirth == "feb" && dayBirth <= 18)){
  alert("Your zodiac sign is Aquarius");
} else if((monthBirth == "feb" && dayBirth >= 19 && dayBirth <= 29) || (monthBirth == "mar" && dayBirth <= 20)){
  alert("Your zodiac sign is Pisces");
} else if((monthBirth == "mar" && dayBirth >= 21 && dayBirth <= 31) || (monthBirth == "apr" && dayBirth <= 19)){
  alert("Your zodiac sign is Aries");
} else if((monthBirth == "apr" && dayBirth >= 20 && dayBirth <= 30) || (monthBirth == "may" && dayBirth <= 20)){
  alert("Your zodiac sign is Taurus");
} else if((monthBirth == "may" && dayBirth >= 21 && dayBirth <= 31) || (monthBirth == "jun" && dayBirth <= 20)){
  alert("Your zodiac sign is Gemini");
} else if((monthBirth == "jun" && dayBirth >= 21 && dayBirth <= 30) || (monthBirth == "jul" && dayBirth <= 22)){
  alert("Your zodiac sign is Cancer");
} else if((monthBirth == "jul" && dayBirth >= 23 && dayBirth <= 31) || (monthBirth == "aug" && dayBirth <= 22)){
  alert("Your zodiac sign is Leo");
} else if((monthBirth == "aug" && dayBirth >= 23 && dayBirth <= 31) || (monthBirth == "sep" && dayBirth <= 22)){
  alert("Your zodiac sign is Virgo");
} else if((monthBirth == "sep" && dayBirth >= 23 && dayBirth <= 30) || (monthBirth == "oct" && dayBirth <= 22)){
  alert("Your zodiac sign is Libra");
} else if((monthBirth == "oct" && dayBirth >= 23 && dayBirth <= 31) || (monthBirth == "nov" && dayBirth <= 21)){
  alert("Your zodiac sign is Scorpio");
} else if((monthBirth == "nov" && dayBirth >= 22 && dayBirth <= 30) || (monthBirth == "dec" && dayBirth <= 21)){
  alert("Your zodiac sign is Sagittarius");
} else{
  alert("Invalid input, please reload the page and enter your birth month and day. Ex: March 31");
}