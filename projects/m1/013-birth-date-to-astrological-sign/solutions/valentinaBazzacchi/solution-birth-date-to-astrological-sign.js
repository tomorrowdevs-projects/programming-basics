let month = prompt("Enter your month of birth");

let day = prompt("Enter your day of birth");
month = month.toLowerCase();

if ((month == "december" && day >= 22) || (month == "january" && day <= 19)) {
alert("Your zodiac sign is Capricorn!");

} else if ((month == "january" && day >= 20) || (month == "february" && day <= 18)) {
alert("Your zodiac sign is Aquarius!");

} else if ((month == "february" && day >= 19) || (month == "march" && day <= 20)) {
alert("Your zodiac sign is Pisces!");

} else if ((month == "march" && day >= 21) || (month == "april" && day <= 19)) {
alert("Your zodiac sign is Aries!");

} else if ((month == "april" && day >= 20) || (month == "may" && day <= 20)) {
alert("Your zodiac sign is Taurus!");

} else if ((month == "may" && day >= 21) || (month == "june" && day <= 20)) {
alert("Your zodiac sign is Gemini!");

} else if ((month == "june" && day >= 21) || (month == "july" && day <= 22)) {
alert("Your zodiac sign is Cancer!");

} else if ((month == "july" && day >= 23) || (month == "august" && day <= 22)) {
alert("Your zodiac sign is Leo!");

} else if ((month == "august" && day >= 23) || (month == "september" && day <= 22)) {
alert("Your zodiac sign is Virgo!");

} else if ((month == "september" && day >= 23) || (month == "october" && day <= 22)) {
alert("Your zodiac sign is Libra!");

} else if ((month == "october" && day >= 23) || (month == "november" && day <= 21)) {
alert("Your zodiac sign is Scorpio!");

} else if ((month == "november" && day >= 22) || (month == "december" && day <= 21)) {
alert("Your zodiac sign is Sagittarius!");
}