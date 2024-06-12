# Birth Date to Astrological Sign

month = input("enter birth's month: ")
date = input("enter birth's date: ")

date_int = int(date)

if month == str('january'):
    if 0 < date_int < 19:
        print('Capricorn')
    elif 20 < date_int < 31:
        print('Aquarius')

elif month == str('february'):
    if 0 < date_int < 18:
        print('Aquarius')
    if 19 < date_int < 29:
        print('Pisces')

elif month == str('march'):
    if 0 < date_int < 20:
        print('Pisces')
    elif 21 < date_int < 31:
        print('Aries')

elif month == str('april'):
    if 0 < date_int < 19:
        print('Aries')
    elif 20 < date_int < 30:
        print('Taurus')

elif month == str('may'):
    if 0 < date_int < 20:
        print('Taurus')
    elif 21 < date_int < 31:
        print('Gemini')

elif month == str('june'):
    if 0 < date_int < 20:
        print('Gemini')
    elif 21< date_int < 30:
        print('Cancer')

elif month == str('july'):
    if 0 < date_int < 22:
        print('Cancer')
    elif 23< date_int < 31:
        print('Leo')

elif month == str('august'):
    if 0 < date_int < 22:
        print('Leo')
    elif 23 < date_int < 31:
        print('Virgo')

elif month == str('september'):
    if 0 < date_int < 22:
        print('Virgo')
    elif 23 < date_int < 30:
        print('Libra')

elif month == str('october'):
    if 0 < date_int < 22:
        print('Libra')
    elif 23 < date_int < 31:
        print('Scorpion')

elif month == str('november'):
    if 0 < date_int < 21:
        print('Scorpion')
    elif 22< date_int < 30:
        print('Sagittarius')

if month == str('december'):
    if 0 < date_int < 21:
        print('Sagittarius') 
    if 22 < date_int < 31:
        print('Capricorn')