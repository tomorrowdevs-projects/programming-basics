birth_month = input("Insert your month of birth: ")
birth_day = int(input("Insert your day of birth: "))

birth_month = birth_month.lower().rstrip().lstrip()

if birth_month == "december":
    sign = "capricorn" if 22 <= birth_day <= 31 else "sagittarius"

elif birth_month == "january":
    sign = "aquarius" if 20 <= birth_day <= 31 else "capricorn"

elif birth_month == "february":
    sign = "pisces" if 19 <= birth_day <= 28 else "capricorn"

elif birth_month == "march":
    sign = "aries" if 21 <= birth_day <= 31 else "pisces"

elif birth_month == "april":
    sign = "taurus" if 20 <= birth_day <= 30 else "aries"

elif birth_month == "may":
    sign = "gemini" if 21 <= birth_day <= 31 else "taurus"

elif birth_month == "june":
    sign = "cancer" if 21 <= birth_day <= 30 else "gemini"

elif birth_month == "july":
    sign = "leo" if 23 <= birth_day <= 31 else "cancer"

elif birth_month == "august":
    sign = "virgo" if 23 <= birth_day <= 31 else "leo"

elif birth_month == "september":
    sign = "libra" if 23 <= birth_day <= 30 else "virgo"

elif birth_month == "october":
    sign = "scorpio" if 23 <= birth_day <= 31 else "libra"

elif birth_month == "november":
    sign = "sagittarius" if 22 <= birth_day <= 30 else "scorpio"

print(f"Your sign is {sign.capitalize()}")