# Create a list of months
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


def myfun():
    # Ask the user for an input and check if it' s correct
    user_month = str(input('Please insert your month of birth: '))
    user_month = user_month.capitalize()
    if user_month not in months:
        print('ERROR! you should insert a month')
        return 

    # Ask the user for an input and check if it' s correct
    user_day = int(input('Please insert your day of birth in number: '))
    if user_day < 1 or user_day > 31:
        print ('ERROR! you should insert a day')
        return 
    elif user_month == 'February' and user_day > 29:
        print('ERROR! Maybe you are not born in February?')
        return 
    
    # If statment to determine the Output
    if user_month == 'January' and user_day >= 20 or user_month == 'February' and user_day <= 18:
        print('Your zodiac sign is Aquarius')
    elif user_month == 'February' and user_day >= 19 or user_month == 'March' and user_day <= 20:
        print('Your zodiac sign is Pisces')
    elif user_month == 'March' and user_day >= 21 or user_month == 'April' and user_day <= 19:
        print('Your zodiac sign is Aries')
    elif user_month == 'April' and user_day >= 20 or user_month == 'May' and user_day <= 20:
        print('Your zodiac sign is Taurus')
    elif user_month == 'May' and user_day >= 21 or user_month == 'June' and user_day <= 20:
        print('Your zodiac sign is Gemini')
    elif user_month == 'June' and user_day >= 21 or user_month == 'July' and user_day <= 22:
        print('Your zodiac sign is Cancer')
    elif user_month == 'July' and user_day >= 23 or user_month == 'August' and user_day <= 22:
        print('Your zodiac sign is Leo')
    elif user_month == 'August' and user_day >= 23 or user_month == 'September' and user_day <= 22:
        print('Your zodiac sign is Virgo')
    elif user_month == 'September' and user_day >= 23 or user_month == 'October' and user_day <= 22:
        print('Your zodiac sign is Libra')
    elif user_month == 'October' and user_day >= 23 or user_month == 'November' and user_day <= 21:
        print('Your zodiac sign is Scorpio')
    elif user_month == 'November' and user_day >= 22 or user_month == 'Dicember' and user_day <= 21:
        print('Your zodiac sign is Sagittarius')
    elif user_month == 'Dicember' and user_day >= 22 or user_month == 'January' and user_day <= 19:
        print('Your zodiac sign is Capricorn')
    

myfun()
                                    