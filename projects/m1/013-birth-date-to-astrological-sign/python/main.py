month = input(" What is the months of your birthday ").lower()

day = int(input("Please type your birthday "))

zodiac_sign=""

if (month == "december" and day >= 22) or (month == "january" and day <=19):
    zodiac_sign = "Capricorn"

if (month == "january" and day >= 20) or (month == "february" and day <=18):
    zodiac_sign = "Aquarius"

if (month == "february" and day >= 19) or (month == "march" and day <=20):
    zodiac_sign = "Pisces"

if (month == "march" and day >= 21) or (month == "april" and day <=19):
    zodiac_sign = "Aries"

if (month == "april" and day >= 20) or (month == "may" and day <=20):
    zodiac_sign = "Taurus"

if (month == "may" and day >= 21) or (month == "june" and day <=20):
    zodiac_sign = "Gemini"

if (month == "june" and day >= 21) or (month == "july" and day <=22):
    zodiac_sign = "Cancer"

if (month == "july" and day >= 23) or (month == "august" and day <=22):
    zodiac_sign = "Leo"

if (month == "august" and day >= 23) or (month == "september" and day <=22):
    zodiac_sign = "Virgo"

if (month == "september" and day >= 23) or (month == "october" and day <=22):
    zodiac_sign = "Libra"

if (month == "october" and day >= 23) or (month == "november" and day <=21):
    zodiac_sign = "Scorpio"

if (month == "november" and day >= 22) or (month == "december" and day <=21):
    zodiac_sign = "Sagittarius"

print("- Your astrological sign is {}".format(zodiac_sign))