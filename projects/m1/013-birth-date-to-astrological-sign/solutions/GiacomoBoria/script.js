/*Write a program that asks the user to enter his or her month and day of birth. 
Then your program should report the user’s zodiac sign as part of an appropriate output message.*/

// User Input - associate a variable with the date as a string
const birthday = prompt("Enter your date of birth in the format YYYY-MM-DD or MM-DD", 0)

// Associate a variable with the date as a string
const date = new Date(Date.parse(birthday))

// Associate the day and month of the birthday with two different variables
const dayBirthday = date.getDate();
const monthBirthday = date.getMonth();

// Check condition - considering the month (0-11)
if (monthBirthday <= 11 && dayBirthday <= 31 && birthday.length <=10) {
  let zodiacSign;
// Case condition 
  switch (monthBirthday) {
    case 0: 
      if (dayBirthday <= 19) {
        zodiacSign = "Capricorns";
      } else if (dayBirthday >= 20) {
        zodiacSign = "Aquarius";
      }
      break;
    case 1: 
      if (dayBirthday <= 18) {
        zodiacSign = "Aquarius";
      } else if (dayBirthday >= 19) {
        zodiacSign = "Pisces";
      }
        break;
    case 2: 
      if (dayBirthday <= 20) {
        zodiacSign = "Pisces";
      } else if (dayBirthday >=21) {
        zodiacSign = "Aries";
      }
        break;
    case 3: 
      if (dayBirthday <= 19) {
        zodiacSign = "Aries";
      } else if (dayBirthday >=20) {
        zodiacSign = "Taurus";
      }
        break;
    case 4: 
      if (dayBirthday <= 20) {
        zodiacSign = "Taurus";
      } else if (dayBirthday >=21) {
        zodiacSign = "Gemini";
      }
        break;
    case 5: 
      if (dayBirthday <= 21) {
        zodiacSign = "Gemini";
      } else if (dayBirthday >=22) {
        zodiacSign = "Cancer";
      }
        break;
    case 6: 
      if (dayBirthday <= 22) {
        zodiacSign = "Cancer";
      } else if (dayBirthday >=23) {
        zodiacSign = "Leo";
      }
        break;
    case 7: 
      if (dayBirthday <= 22) {
        zodiacSign = "Leo";
      } else if (dayBirthday >=23) {
        zodiacSign = "Virgo";
      }
        break;
    case 8: 
      if (dayBirthday <= 22) {
        zodiacSign = "Virgo";
      } else if (dayBirthday >=23) {
        zodiacSign = "Libra";
      }
        break;
    case 9: 
      if (dayBirthday <= 22) {
        zodiacSign = "Libra";
      } else if (dayBirthday >=23) {
        zodiacSign = "Scorpio";
      }
        break;
    case 10: 
      if (dayBirthday <= 21) {
        zodiacSign = "Scorpio";
      } else if (dayBirthday >=22) {
        zodiacSign = "Sagittarius";
      }
        break;
    case 11: 
      if (dayBirthday <= 21) {
        zodiacSign = "Sagittarius";
      } else if (dayBirthday >= 22) {
        zodiacSign = "Capricorn";
      }
        break;
  } 
  // Output
  alert(`Your zodiac sign is ${zodiacSign}`)
  
// Error output
} else {
  alert("Sorry, the value you entered is wrong")
}