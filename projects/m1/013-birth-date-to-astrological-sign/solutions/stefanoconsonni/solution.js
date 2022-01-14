const monthOfBirth = prompt("Please enter your month of birth:").toLowerCase();
const dayOfBirth = prompt("Please enter your day of birth:");

if ((monthOfBirth == "december" && dayOfBirth >= 22) || (monthOfBirth == "january" && dayOfBirth <= 19)) {
	alert("Your zodiac sign is Capricorn");
} else if ((monthOfBirth == "january" && dayOfBirth >= 20) || (monthOfBirth == "february" && dayOfBirth <= 18)) {
	alert("Your zodiac sign is Aquarius");
} else if ((monthOfBirth == "february" && dayOfBirth >= 19) || (monthOfBirth == "march" && dayOfBirth <= 20)) {
	alert("Your zodiac sign is Pisces");
} else if ((monthOfBirth == "march" && dayOfBirth >= 21) || (monthOfBirth == "april" && dayOfBirth <= 19)) {
	alert("Your zodiac sign is Aries");
} else if ((monthOfBirth == "april" && dayOfBirth >= 20) || (monthOfBirth == "may" && dayOfBirth <= 20)) {
	alert("Your zodiac sign is Taurus");
} else if ((monthOfBirth == "may" && dayOfBirth >= 21) || (monthOfBirth == "june" && dayOfBirth <= 20)) {
	alert("Your zodiac sign is Gemini");
} else if ((monthOfBirth == "june" && dayOfBirth >= 21) || (monthOfBirth == "july" && dayOfBirth <= 22)) {
	alert("Your zodiac sign is Cancer");
} else if ((monthOfBirth == "july" && dayOfBirth >= 23) || (monthOfBirth == "august" && dayOfBirth <= 22)) {
	alert("Your zodiac sign is Leo");
} else if ((monthOfBirth == "august" && dayOfBirth >= 23) || (monthOfBirth == "september" && dayOfBirth <= 22)) {
	alert("Your zodiac sign is Virgo");
} else if ((monthOfBirth == "september" && dayOfBirth >= 23) || (monthOfBirth == "october" && dayOfBirth <= 22)) {
	alert("Your zodiac sign is Libra");
} else if ((monthOfBirth == "october" && dayOfBirth >= 23) || (monthOfBirth == "november" && dayOfBirth <= 21)) {
	alert("Your zodiac sign is Scorpio");
} else if ((monthOfBirth == "november" && dayOfBirth >= 22) || (monthOfBirth == "december" && dayOfBirth <= 21)) {
	alert("Your zodiac sign is Sagittarius");
} else {
	alert("Please reload the page and enter a valid month and a valid day");
}
