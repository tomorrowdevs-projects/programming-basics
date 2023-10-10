let birthday = new Date(prompt("when is your birthday ?"))
month = (birthday.getMonth());
day = (birthday.getDate())

if (month === 11 && day >= 22 || month === 0 && day <= 19) { console.log("Capricorn") }
else if (month === 0 && day >= 20 || month === 1 && day <= 18) { console.log("Aquarius") }
else if (month === 1 && day >= 19 || month === 2 && day <= 20) { console.log("Pisces") }
else if (month === 2 && day >= 21 || month === 3 && day <= 19) { console.log("Aries") }
else if (month === 3 && day >= 20 || month === 4 && day <= 20) { console.log("Taurus") }
else if (month === 4 && day >= 21 || month === 5 && day <= 20) { console.log("Gemini") }
else if (month === 5 && day >= 21 || month === 6 && day <= 22) { console.log("Cancer") }
else if (month === 6 && day >= 23 || month === 7 && day <= 22) { console.log("Leo") }
else if (month === 7 && day >= 23 || month === 8 && day <= 22) { console.log("Virgo") }
else if (month === 8 && day >= 23 || month === 9 && day <= 22) { console.log("Libra") }
else if (month === 9 && day >= 23 || month === 10 && day <= 21) { console.log("Scorpio") }
else if (month === 10 && day >= 22 || month === 11 && day <= 21) { console.log("Sagittarius") }
