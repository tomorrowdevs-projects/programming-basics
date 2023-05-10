month_birth=int(input("Enter the month of your birth as a number: "))
day_birth=int(input("Enter the day of your birth: "))
zodiac_signs=[("Capricorn",19),("Aquarius",18),("Pisces",20),("Aries",19),("Taurus",20),("Gemini",20),("Cancer",22),("Leo",22),("Virgo",22),("Libra",22),("Scorpio",21),("Sagittarius",21),("Capricorn",22)]

if day_birth<= zodiac_signs[month_birth-1][1]:
    print(f"Your zodiac sign is {zodiac_signs[month_birth-1][0]}")
else:
    print(f"Your zodiac sign is {zodiac_signs[month_birth][0]}")


