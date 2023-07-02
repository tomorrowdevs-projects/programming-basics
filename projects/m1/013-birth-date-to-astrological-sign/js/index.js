// # Birth Date to Astrological Sign

// The horoscopes commonly reported in newspapers use the position of the sun at 
// the time of one’s birth to try and predict the future.    
// This system of astrology divides the year into twelve zodiac signs, as outline in the table below:  


// | Zodiac Sign |       Date Range           |
// |-------------|----------------------------|
// | Capricorn   | December 22 to January 19  |
// | Aquarius    | January 20 to February 18  |
// | Pisces      | February 19 to March 20    |
// | Aries       | March 21 to April 19       |
// | Taurus      | April 20 to May 20         |
// | Gemini      | May 21 to June 20          |
// | Cancer      | June 21 to July 22         |
// | Leo         | July 23 to August 22       |
// | Virgo       | August 23 to September 22  |
// | Libra       | September 23 to October 22 |
// | Scorpio     | October 23 to November 21  |
// | Sagittarius | November 22 to December 21 |

// Write a program that asks the user to **enter his or her month and day of birth**.    
// Then your program should **return the user’s zodiac sign** as part of an appropriate output message.

// Example:   
// Month input: December   
// Day input: 22   
// Output: Capricorn  

let monthInput = prompt("enter the month you were born:").toUpperCase();
let dayInput = + prompt("enter the day you were born:");


if (dayInput > 0) {

    switch (monthInput) {

        case "JANUARY":
            if (dayInput <= 19) {
                alert("Your zodiac sign is Capricorn!")

            } else {
                alert("Your zodiac sign is Aquarius!")

            }
            break;

        case "FEBRUARY":
            if (dayInput <= 18) {
                alert("Your zodiac sign is Aquarius!")

            } else {
                alert("Your zodiac sign is Pisces!")

            }
            break;

        case "MARCH":
            if (dayInput <= 20) {
                alert("Your zodiac sign is Pisces!")

            } else {
                alert("Your zodiac sign is Aries!")

            }
            break;

        case "APRIL":
            if (dayInput <= 19) {
                alert("Your zodiac sign is Aries!")

            } else {
                alert("Your zodiac sign is Taurus!")

            }
            break;

        case "MAY":
            if (dayInput <= 20) {
                alert("Your zodiac sign is Taurus!")

            } else {
                alert("Your zodiac sign is Gemini!")

            }
            break;

        case "JUNE":
            if (dayInput <= 20) {
                alert("Your zodiac sign is Gemini!")

            } else {
                alert("Your zodiac sign is Cancer!")

            }
            break;

        case "JULY":
            if (dayInput <= 22) {
                alert("Your zodiac sign is Cancer!")

            } else {
                alert("Your zodiac sign is Leo!")

            }
            break;

        case "AUGUST":
            if (dayInput <= 22) {
                alert("Your zodiac sign is Leo!")

            } else {
                alert("Your zodiac sign is Virgo!")

            }
            break;

        case "SEPTEMBER":
            if (dayInput <= 22) {
                alert("Your zodiac sign is Virgo!")

            } else {
                alert("Your zodiac sign is Libra!")

            }
            break;

        case "OCTOBER":
            if (dayInput <= 22) {
                alert("Your zodiac sign is Libra!")

            } else {
                alert("Your zodiac sign is Scorpio!")

            }
            break;

        case "NOVEMBER":
            if (dayInput <= 21) {
                alert("Your zodiac sign is Scorpio!")

            } else {
                alert("Your zodiac sign is Sagittarius!")

            }
            break;

        case "DECEMBER":
            if (dayInput <= 21) {
                alert("Your zodiac sign is Sagittarius!")

            } else {
                alert("Your zodiac sign is Capricorn!")

            }
            break;

    }

} else {
    alert("you have not entered correct data");
}