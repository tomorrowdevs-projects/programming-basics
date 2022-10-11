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
if (monthBirthday <= 11 && dayBirthday <= 31 && birthday <= 10) {

// Case condition 
  switch (monthBirthday) {
    case 0: 
      if (dayBirthday <= 19) {
        alert("Your zodiac sign is Capricorns")
      } else if (dayBirthday >= 20) {
        alert("Your zodiac sign is Aquarius")
      }
      break;
    case 1: 
      if (dayBirthday <= 18) {
        alert("Your zodiac sign is Aquarius")
      } else if (dayBirthday >= 19) {
        alert("Your zodiac sign is Pisces")
      }
        break;
    case 2: 
      if (dayBirthday <= 20) {
        alert("Your zodiac sign is Pisces")
      } else if (dayBirthday >=21) {
        alert("Your zodiac sign is Aries")
      }
        break;
    case 3: 
      if (dayBirthday <= 19) {
        alert("Your zodiac sign is Aries")
      } else if (dayBirthday >=20) {
        alert("Your zodiac sign is Taurus")
      }
        break;
    case 4: 
      if (dayBirthday <= 20) {
        alert("Your zodiac sign is Taurus")
      } else if (dayBirthday >=21) {
        alert("Your zodiac sign is Gemini")
      }
        break;
    case 5: 
      if (dayBirthday <= 21) {
        alert("Your zodiac sign is Gemini")
      } else if (dayBirthday >=22) {
        alert("Your zodiac sign is Cancer")
      }
        break;
    case 6: 
      if (dayBirthday <= 22) {
        alert("Your zodiac sign is Cancer")
      } else if (dayBirthday >=23) {
        alert("Your zodiac sign is Leo")
      }
        break;
    case 7: 
      if (dayBirthday <= 22) {
        alert("Your zodiac sign is Leo")
      } else if (dayBirthday >=23) {
        alert("Your zodiac sign is Virgo")
      }
        break;
    case 8: 
      if (dayBirthday <= 22) {
        alert("Your zodiac sign is Virgo")
      } else if (dayBirthday >=23) {
        alert("Your zodiac sign is Libra")
      }
        break;
    case 9: 
      if (dayBirthday <= 22) {
        alert("Your zodiac sign is Libra")
      } else if (dayBirthday >=23) {
        alert("Your zodiac sign is Scorpio")
      }
        break;
    case 10: 
      if (dayBirthday <= 21) {
        alert("Your zodiac sign is Scorpio")
      } else if (dayBirthday >=22) {
        alert("Your zodiac sign is Sagittarius")
      }
        break;
    case 11: 
      if (dayBirthday <= 21) {
        alert("Your zodiac sign is Sagittarius")
      } else if (dayBirthday >= 22) {
        alert("Your zodiac sign is Capricorn")
      }
        break;
  } 
// Error output
} else {
  alert("Sorry, the value you entered is wrong")
}