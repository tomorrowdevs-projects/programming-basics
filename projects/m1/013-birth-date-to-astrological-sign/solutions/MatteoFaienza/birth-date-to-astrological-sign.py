# I ask the user to enter the month of birth
month=int(input('Enter the month of birth as a number '))
# I ask the user to enter the day of birth
day=int(input('Enter the day of birth '))
# I use nested conditions to find the zodiac sign
if month == 1 :
    if day <= 19:
        zodiacSign='Capricorn'
    else :
        zodiacSign='Acquarius'
elif month == 2 :
    if day <= 18:
        zodiacSign='Acquarius'
    else :
        zodiacSign='Pisces'
elif month == 3 :
    if day <= 20:
        zodiacSign='Pisces'
    else :
        zodiacSign='Aries'
elif month == 4 :
    if day <= 19:
        zodiacSign='Aries'
    else :
        zodiacSign='Taurus'
elif month == 5 :
    if day <= 20 :
        zodiacSign='Taurus'
    else :
        zodiacSign='Gemini'
elif month == 6 :
    if day <= 20 :
        zodiacSign='Gemini'
    else :
        zodiacSign='Cancer'
elif month == 7 :
    if day <= 22 :
        zodiacSign='Cancer'
    else :
        zodiacSign='Leo'  
elif month == 8 :
    if day <= 22 :
        zodiacSign='Leo'
    else :
        zodiacSign='Virgo'
elif month == 9 :
    if day <= 22 :
        zodiacSign='Virgo'
    else :
        zodiacSign='Libra' 
elif month == 10 :
    if day <= 22 :
        zodiacSign='Libra'
    else :
        zodiacSign='Scorpio'
elif month == 11 :
    if day <= 21 :
        zodiacSign='Scorpio'
    else :
        zodiacSign='Sagittarius'
elif month == 12 :
    if day <= 21 :
        zodiacSign='Sagittarius'
    else :
        zodiacSign='Capricorn'                

print('Your zodiac sign is', zodiacSign)






