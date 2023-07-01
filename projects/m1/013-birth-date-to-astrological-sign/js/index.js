
const MONTHINPUT = prompt("Please enter your birth month (e.g. 'February', 'May', 'October'):")
const DAYINPUT = prompt("Please enter your birth day:")


if (DAYINPUT > 0) {

    switch (MONTHINPUT.toLowerCase()) {

        case "january":
            if (DAYINPUT <= 19) {
                alert("Your zodiac sign is Capricorn!")

            } else {
                alert("Your zodiac sign is Aquarius!")

            }
            break;

        case "february":
            if (DAYINPUT <= 18) {
                alert("Your zodiac sign is Aquarius!")

            } else {
                alert("Your zodiac sign is Pisces!")

            }
            break;

        case "march":
            if (DAYINPUT <= 20) {
                alert("Your zodiac sign is Pisces!")

            } else {
                alert("Your zodiac sign is Aries!")

            }
            break;

        case "april":
            if (DAYINPUT <= 19) {
                alert("Your zodiac sign is Aries!")

            } else {
                alert("Your zodiac sign is Taurus!")

            }
            break;

        case "may":
            if (DAYINPUT <= 20) {
                alert("Your zodiac sign is Taurus!")

            } else {
                alert("Your zodiac sign is Gemini!")

            }
            break;

        case "june":
            if (DAYINPUT <= 20) {
                alert("Your zodiac sign is Gemini!")

            } else {
                alert("Your zodiac sign is Cancer!")

            }
            break;

        case "july":
            if (DAYINPUT <= 22) {
                alert("Your zodiac sign is Cancer!")

            } else {
                alert("Your zodiac sign is Leo!")

            }
            break;

        case "august":
            if (DAYINPUT <= 22) {
                alert("Your zodiac sign is Leo!")

            } else {
                alert("Your zodiac sign is Virgo!")

            }
            break;

        case "september":
            if (DAYINPUT <= 22) {
                alert("Your zodiac sign is Virgo!")

            } else {
                alert("Your zodiac sign is Libra!")

            }
            break;

        case "october":
            if (DAYINPUT <= 22) {
                alert("Your zodiac sign is Libra!")

            } else {
                alert("Your zodiac sign is Scorpio!")

            }
            break;

        case "november":
            if (DAYINPUT <= 21) {
                alert("Your zodiac sign is Scorpio!")

            } else {
                alert("Your zodiac sign is Sagittarius!")

            }
            break;

        case "december":
            if (DAYINPUT <= 21) {
                alert("Your zodiac sign is Sagittarius!")

            } else {
                alert("Your zodiac sign is Capricorn!")

            }
            break;

        default: 
            alert("Please, enter a valid input!");
            location.reload();
            break;
    }

} else {
    alert("Please, enter a valid input!");
    location.reload();
}