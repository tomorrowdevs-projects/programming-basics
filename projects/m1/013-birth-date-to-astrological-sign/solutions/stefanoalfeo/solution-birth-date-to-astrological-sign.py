day = int(input("Insert your birth day\n"))
month = input("Insert your birth month in number\n")
if month == "1" or month == "01": 
    if day < 20:
        print("Your astrological sign is Capricorn")
    else:
        print("Your astrological sign is Aquarius")
elif month == "2" or month == "02": 
    if day < 19:
        print("Your astrological sign is Aquarius")
    else:
        print("Your astrological sign is Pisces")
elif month == "3" or month == "03": 
    if day < 21:
        print("Your astrological sign is Pisces")
    else:
        print("Your astrological sign is Aries")
elif month == "4" or month == "04": 
    if day < 20:
        print("Your astrological sign is Aries")
    else:
        print("Your astrological sign is Taurus")
elif month == "5" or month == "05": 
    if day < 21:
        print("Your astrological sign is Taurus")
    else:
        print("Your astrological sign is Gemini")
elif month == "6" or month == "06": 
    if day < 21:
        print("Your astrological sign is Gemini")
    else:
        print("Your astrological sign is Cancer")
elif month == "7" or month == "07": 
    if day < 23:
        print("Your astrological sign is Cancer")
    else:
        print("Your astrological sign is Leo")
elif month == "8" or month == "08": 
    if day < 23:
        print("Your astrological sign is Leo")
    else:
        print("Your astrological sign is Virgo")
elif month == "9" or month == "09": 
    if day < 23:
        print("Your astrological sign is Virgo")
    else:
        print("Your astrological sign is Libra")
elif month == "10" or month == "10": 
    if day < 23:
        print("Your astrological sign is Libra")
    else:
        print("Your astrological sign is Scorpio")
elif month == "11" or month == "11": 
    if day < 22:
        print("Your astrological sign is Scorpio")
    else:
        print("Your astrological sign is Sagittarius")
elif month == "12" or month == "12": 
    if day < 22:
        print("Your astrological sign is Sagittarius")
    else:
        print("Your astrological sign is Capricorn")
else:
    print("invalid syntax")