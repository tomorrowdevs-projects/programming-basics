const prompt = require('prompt-sync')();

/*
| Zodiac Sign |       Date Range           |
|-------------|----------------------------|
| Capricorn   | December 22 to January 19  |
| Aquarius    | January 20 to February 18  |
| Pisces      | February 19 to March 20    |
| Aries       | March 21 to April 19       |
| Taurus      | April 20 to May 20         |
| Gemini      | May 21 to June 20          |
| Cancer      | June 21 to July 22         |
| Leo         | July 23 to August 22       |
| Virgo       | August 23 to September 22  |
| Libra       | September 23 to October 22 |
| Scorpio     | October 23 to November 21  |
| Sagittarius | November 22 to December 21 |
*/

let month = prompt("Which month you born? ");
let day = prompt("Which day you born? ");




if ((month.toLowerCase() === 'december' && day >= 22) || (month.toLowerCase() === 'january' && day <= 19)) {
    console.log(`Your Zodiac sign is Capricorn`);
} else if ((month.toLowerCase() === 'january' && day >= 20) || (month.toLowerCase() === 'february' && day <= 18)) {
    console.log(`Your Zodiac sign is Aquarius`);
} else if ((month.toLowerCase() === 'february' && day >= 19) || (month.toLowerCase() === 'march' && day <= 20)) {
    console.log(`Your Zodiac sign is Pisces`);
} else if ((month.toLowerCase() === 'march' && day >= 21) || (month.toLowerCase() === 'april' && day <= 19)) {
    console.log(`Your Zodiac sign is Aries`);
} else if ((month.toLowerCase() === 'april' && day >= 20) || (month.toLowerCase() === 'may' && day <= 20)) {
    console.log(`Your Zodiac sign is Taurus`);
} else if ((month.toLowerCase() === 'may' && day >= 21) || (month.toLowerCase() === 'june' && day <= 20)) {
    console.log(`Your Zodiac sign is Gemini`);
} else if ((month.toLowerCase() === 'june' && day >= 21) || (month.toLowerCase() === 'july' && day <= 22)) {
    console.log(`Your Zodiac sign is Cancer`);
} else if ((month.toLowerCase() === 'july' && day >= 23) || (month.toLowerCase() === 'august' && day <= 22)) {
    console.log(`Your Zodiac sign is Leo`);
} else if ((month.toLowerCase() === 'august' && day >= 23) || (month.toLowerCase() === 'september' && day <= 22)) {
    console.log(`Your Zodiac sign is Virgo`);
} else if ((month.toLowerCase() === 'september' && day >= 23) || (month.toLowerCase() === 'october' && day <= 22)) {
    console.log(`Your Zodiac sign is Libra`);
} else if ((month.toLowerCase() === 'october' && day >= 23) || (month.toLowerCase() === 'november' && day <= 21)) {
    console.log(`Your Zodiac sign is Scorpio`);
} else if ((month.toLowerCase() === 'november' && day >= 22) || (month.toLowerCase() === 'december' && day <= 21)) {
    console.log(`Your Zodiac sign is Sagittarius`);
} else {
    console.log(`Insert a right day or month`);
}