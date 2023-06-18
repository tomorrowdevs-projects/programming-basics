month = str.lower(input("Enter the month you were born: "))
day = int(input("Enter the day you were born: "))

if month == "january":
    if day > 19:
        print("Your Zodiac sign is Aquarius")
    else: print("Your Zociac sign is Capricorn")

elif month == "february":
    if day > 18:
        print("Your Zodiac sign is Pisces")
    else: print("Your Zodiac sign is Aquarius")

elif month == "march":
    if day > 20:
        print("Your Zodiac sign is Aries")
    else: print("Your Zodiac sign is Pisces")

elif month == "april":
    if day > 19:
        print("Your Zodiac sign is Taurus")
    else: print("Your Zodiac sign is Aries")

elif month == "may":
    if day > 20:
        print("Your Zodiac sign is Gemini")
    else: print("Your Zodiac sign is Taurus")

elif month == "june":
    if day > 20:
        print("Your Zodiac sign is Cancer")
    else: print("Your Zodiac sign is Gemini")

elif month == "july":
    if day > 22:
        print("Your Zodiac sign is Leo")
    else: print("Your Zodiac sign is Cancer")

elif month == "august":
    if day > 22:
        print("Your Zodiac sign is Virgo")
    else: print("Your Zodiac sign is Leo")

elif month == "september":
    if day > 22:
        print("Your Zodiac sign is Libra")
    else: print("Your Zodiac sign is Virgo")

elif month == "october":
    if day > 22:
        print("Your Zodiac sign is Scorpio")
    else: print("Your Zodiac sign is Libra")

elif month == "november":
    if day > 21:
        print("Your Zodiac sign is Sagittarius")
    else: print("Your Zodiac sign is Scorpio")

elif month == "december":
    if day > 21:
        print("Your Zodiac sign is Capricorn")
    else: print("Your Zodiac sign is Sagittarius")

else: print("Insert a correct birthdate")

