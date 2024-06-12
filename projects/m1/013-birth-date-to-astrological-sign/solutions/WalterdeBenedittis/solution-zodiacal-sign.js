let userMonth = prompt("Insert your month of birth").toLowerCase();
let userDay = prompt("Insert the day of your birth");

    if ((userMonth == "january" && userDay >= 20 ) || (userMonth == "february" && userDay <= 18)){
    alert("Your zodiacal sign is AQUARIUS");
    } else if ((userMonth == "february" && userDay >= 19) || (userMonth == "march" && userDay <= 20)){
    alert("Your zodiacal sign is PISCES");
    } else if ((userMonth == "march" && userDay >= 21) || (userMonth == "april" && userDay <= 19)){
    alert("Your zodiacal sign is ARIES");
    } else if ((userMonth == "april" && userDay >= 20) || (userMonth == "may" && userDay <= 20)){
    alert("Your zodiacal sign is TAURUS");
    } else if ((userMonth == "may" && userDay >= 21) || (userMonth == "june" && userDay <= 20)){
    alert("Your zodiacal sign is GEMINI");
    } else if ((userMonth == "june" && userDay >= 21) || (userMonth == "july" && userDay <= 22)){
    alert("Your zodiacal sign is CANCER");
    } else if ((userMonth == "july" && userDay >= 23) || (userMonth == "august" && userDay <= 22)){
    alert("Your zodiacal sign is LEO");
    } else if ((userMonth == "august" && userDay >= 23) || (userMonth == "september" && userDay <= 22)){
    alert("Your zodiacal sign is VIRGO");
    } else if ((userMonth == "semptember" && userDay >= 23) || (userMonth == "october" && userDay <= 22)){
    alert("Your zodiacal sign is LIBRA");
    } else if ((userMonth == "october" && userDay >= 23) || (userMonth == "november" && userDay <= 21)){
    alert("Your zodiacal sign is SCORPIO");
    } else if ((userMonth == "november" && userDay >= 22) || (userMonth == "december" && userDay <= 21)){
    alert("Your zodiacal sign is SAGITTARIUS");
    } else if ((userMonth == "december" && userDay >= 22) || (userMonth == "january" && userDay <= 19)){
    alert("Your zodiacal sign is CAPRICORN");
    }
