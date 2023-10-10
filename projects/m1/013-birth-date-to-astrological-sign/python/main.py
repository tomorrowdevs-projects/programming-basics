
day = int(input("Insert your birthday "))
month = input("Insert the month of your birthday ")

astrological_sign=""

month = month.lower()

if (month == "december" and day >= 22) or (month == "january" and day <=19):
    astrological_sign = "Capricorn"

if (month == "january" and day >= 20) or (month == "february" and day <=18):
    astrological_sign = "Acquarius"

if (month == "february" and day >= 19) or (month == "march" and day <=20):
    astrological_sign = "Pisces"

if (month == "march" and day >= 21) or (month == "april" and day <=19):
    astrological_sign = "Aries"

if (month == "april" and day >= 20) or (month == "may" and day <=20):
    astrological_sign = "Taurus"

if (month == "may" and day >= 21) or (month == "june" and day <=20):
    astrological_sign = "Gemini"

if (month == "june" and day >= 21) or (month == "july" and day <=22):
    astrological_sign = "Cancer"

if (month == "july" and day >= 23) or (month == "august" and day <=22):
    astrological_sign = "Leo"

if (month == "august" and day >= 23) or (month == "september" and day <=22):
    astrological_sign = "Virgo"

if (month == "september" and day >= 23) or (month == "october" and day <=22):
    astrological_sign = "Libra"

if (month == "october" and day >= 23) or (month == "november" and day <=21):
    astrological_sign = "Scorpio"

if (month == "november" and day >= 22) or (month == "december" and day <=21):
    astrological_sign = "Sagittarius"

print("- Your astro sign is {}".format(astrological_sign))