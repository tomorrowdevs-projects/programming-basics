# I ask the user to enter the month of birth
month=int(input('Enter the month of birth as a number '))
# I ask the user to enter the day of birth
day=int(input('Enter the day of birth '))
# I use nested conditions to find the zodiac sign

if month == 1 and day <= 19 or month == 12 and day >= 22 :
    zodiacSign='Capricorn'

elif month == 1 and day >= 20 or month == 2 and day <= 18 :
    zodiacSign='Acquarius'
    
elif month == 2 and day >= 19 or month == 3 and day <= 20 :
    zodiacSign = 'Pisces' 

elif month == 3 and day >= 21 or month == 4 and day <= 19 :
    zodiacSign = 'Aries'

elif month == 4 and day >= 20 or month == 5 and day <= 20 :
    zodiacSign = 'Taurus' 

elif month == 5 and day >= 21 or month == 6 and day <= 20 :
    zodiacSign = 'Gemini' 

elif month == 6 and day >= 21 or month == 7 and day <= 22 :
    zodiacSign = 'Cancer'

elif month == 7 and day >= 23 or month == 8 and day <= 22 :
    zodiacSign = 'Leo'

elif month == 8 and day >= 23 or month == 9 and day <= 22 :
    zodiacSign = 'Virgo'

elif month == 9 and day >= 23 or month == 10 and day <= 22 :
    zodiacSign = 'Libra'

elif month == 10 and day >= 23 or month == 11 and day <= 21 :
    zodiacSign = 'Scorpio'

elif month == 11 and day >= 22 or month == 12 and day <= 21 :
    zodiacSign = 'Sagittarius' 

print('Your zodiac sign is', zodiacSign) 






