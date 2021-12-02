def my_program():
   month, day= (input('Please insert your month birthday using a capital letter and you day of birth divide by a space: ')).split()
   day = int(day)


   if month == 'January' and day <= 19:
    print('Your zodiac sign is Capricorn!')
   elif month == 'January' and day >= 20 and day <= 31:
    print('Your zodiac sign is Acquarius!')
   elif month == 'February' and day <= 18:
    print('Your zodiac sign is Acquarius!')
   elif month == 'February' and day >= 19 and day <= 29:
    print('Your zodiac sign is Pisces!')
   elif month == 'March' and day <= 20:
    print('Your zodiac sign is Pisces!')
   elif month == 'March' and day >= 21 and day <= 31:
    print('Your zodiac sign is Aries!')
   elif month == 'April' and day <= 19:
    print('Your zodiac sign is Aries!')
   elif month == 'April' and day >= 20 and day <= 30:
    print('Your zodiac sign is Taurus!')
   elif month == 'May' and day <= 20:
    print('Your zodiac sign is Taurus!')
   elif month == 'May' and day >= 21 and day <= 31:
    print('Your zodiac sign is Gemini!')
   elif month == 'June' and day <= 20:
    print('Your zodiac sign is Gemini!')
   elif month == 'June' and day >= 21 and day <= 30:
    print('Your zodiac sign is Cancer!')
   elif month == 'July' and day <= 22:
    print('Your zodiac sign is Cancer!')
   elif month == 'July' and day >= 23 and day <= 31:
    print('Your zodiac sign is Leo!')
   elif month == 'August' and day <= 22:
    print('Your zodiac sign is Leo!')
   elif month == 'August' and day >= 23 and day <= 31:
    print('Your zodiac sign is Virgo!')
   elif month == 'September' and day <= 22:
    print('Your zodiac sign is Virgo!')
   elif month == 'September' and day >= 23 and day <= 30:
    print('Your zodiac sign is Libra!')
   elif month == 'October' and day <= 22:
    print('Your zodiac sign is Libra!')
   elif month == 'October' and day >= 23 and day <= 31:
    print('Your zodiac sign is Scorpio!')
   elif month == 'November' and day <= 21:
    print('Your zodiac sign is Scorpio!')
   elif month == 'November' and day >= 22 and day <= 30:
    print('Your zodiac sign is Sagittarius!')
   elif month == 'December' and day <= 21:
    print('Your zodiac sign is Sagittarius!')
   elif month == 'December' and day >= 22 and day <= 31:
    print('Your zodiac sign is Capricorn!')
   else:
    print('Error, please insert a real data, or probably you are an Alien, thank you.')

my_program()
        