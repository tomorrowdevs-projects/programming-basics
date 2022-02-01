#insert your birth date
print ("Do you want to know what is your zodiac sign?")
birthday = input("Enter your birth date in MM-DD format: ")
month, day = map(int, birthday.split('-'))

#define the zodiacal period
print ("Your zodiac sign is: ")
if month == 12:
    if 22 <= day <= 31:
        print ("capricorn") 
    else:
        print("sagittarius")

elif month == 1:
    if 20 <= day <= 31:
        print("Aquarius") 
    else:
        print("capricorn")

elif month == 2:
    if 19 <= day <= 28:
        print("pisces")
    else:
        print("Aquarius")

elif month == 3:
    if 21 <= day <= 31:
        print("aries") 
    else:
        print("pisces")

elif month == 4:
    if 20 <= day <= 30:
        print("taurus") 
    else:
        print("aries")

elif month == 5:
    if 21 <= day <= 31:
        print("gemini") 
    else:
        print("taurus")

elif month == 6:
    if 21 <= day <= 30:
        print("cancer") 
    else:
        print("gemini")

elif month == 7:
    if 23 <= day <= 31:
        print("leo")
    else:
        print("cancer")

elif month == 8:
    if 23 <= day <= 31:
        print("virgo") 
    else:
        print("leo")

elif month == 9:
    if 23 <= day <= 30:
        print("libra") 
    else:
        print("virgo")

elif month == 10:
    if 23 <= day <= 31:
        print("scorpio")
    else:
        print("libra")

elif month == 11:
    if 22 <= day <= 30:
        print("sagittarius")     
    else:
        print("scorpio")
    
