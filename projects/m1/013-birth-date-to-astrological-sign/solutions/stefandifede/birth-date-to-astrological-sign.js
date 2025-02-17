const birthMonth = prompt("insert birth month")
const birthDay = prompt("insert birth day")

function fromBirthDateToSign () {
    if (birthMonth === "december") {
        if (birthDay>=22) {
            alert("zodiacal sign: Capricorn")
        } else (alert("zodiacal sign: Sagittarius"))
    } else if (birthMonth === "january") {
        if (birthDay>=20) {
            alert("zodiacal sign: Aquarius")
        } else (alert("zodiacal sign: Capricorn"))
    } else if (birthMonth === "february") {
        if (birthDay>=19) {
            alert("zodiacal sign: Pisces")
        } else (alert("zodiacal sign: Aquarius"))
    } else if (birthMonth === "march") {
        if (birthDay>=21) {
            alert("zodiacal sign: Aries")
        } else (alert("zodiacal sign: Pisces"))
    } else if (birthMonth === "april") {
        if (birthDay>=20) {
            alert("zodiacal sign: Taurus")
        } else (alert("zodiacal sign: Aries"))
    } else if (birthMonth === "may") {
        if (birthDay>=21) {
            alert("zodiacal sign: Gemini")
        } else (alert("zodiacal sign: Taurus"))
    } else if (birthMonth === "june") {
        if (birthDay>=21) {
            alert("zodiacal sign: Cancer")
        } else (alert("zodiacal sign: Gemini"))
    } else if (birthMonth === "july") {
        if (birthDay>=23) {
            alert("zodiacal sign: Leo")
        } else (alert("zodiacal sign: Cancer"))
    } else if (birthMonth === "august") {
        if (birthDay>=23) {
            alert("zodiacal sign: Virgo")
        } else (alert("zodiacal sign: Leo"))
    } else if (birthMonth === "september") {
        if (birthDay>=23) {
            alert("zodiacal sign: Libra")
        } else (alert("zodiacal sign: Virgo"))
    } else if (birthMonth === "october") {
        if (birthDay>=23) {
            alert("zodiacal sign: Scorpio")
        } else (alert("zodiacal sign: Libra"))
    } else if (birthMonth === "november") {
        if (birthDay>=22) {
            alert("zodiacal sign: Sagittarius")
        } else (alert("zodiacal sign: Scorpio"))
    }
}

fromBirthDateToSign()