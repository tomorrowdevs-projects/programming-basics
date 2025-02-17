#Birth Date to Astrological Sign

month = (input("Enter your birth month: ").lower())
day = int(input("Enter your birth day: "))
if month == "january":
    if 1 <= day <= 19: print("Your sign is Capricorn")
    else: print ("Your sign is Aquarius")
if month == "february":
    if 1 <= day <= 18: print("Your sign is Aquarius")
    else: print ("Your sign is Pisces")
if month == "march":
    if 1 <= day <= 20: print("Your sign is Pisces")
    else: print ("Your sign is Aries")
if month == "may":
    if 1 <= day <= 20: print("Your sign is Taurus")
    else: print ("Your sign is Gemini")
if month == "june":
    if 1 <= day <= 20: print("Your sign is Gemini")
    else: print ("Your sign is Cancer")
if month == "july":
    if 1 <= day <= 22: print("Your sign is Cancer")
    else: print ("Your sign is Leo")
if month == "august":
    if 1 <= day <= 22: print("Your sign is Leo")
    else: print ("Your sign is Virgo")
if month == "september":
    if 1 <= day <= 22: print("Your sign is Virgo")
    else: print ("Your sign is Libra")
if month == "october":
    if 1 <= day <= 22: print("Your sign is Libra")
    else: print ("Your sign is Scorpio")
if month == "november":
    if 1 <= day <= 21: print("Your sign is Scorpio")
    else: print ("Your sign is Sagittarius")
if month == "december":
    if 1 <= day <= 20: print("Your sign is Sagittarius")
    else: print ("Your sign is Capricorn")