months = ['january','february','march','april','may','june','july','august','september','october','november','december']
bmonth = input('plese enter your birth month: ').lower()
bday = int(input('please enter your birth day: '))
def zodiac(m,d):
    if m == months[0]:
        if d >= 1 and d <= 19:
            print('Capricorn')
        elif d > 19 and d <= 31:
            print('Aquarius')
    elif m == months[1]:
        if d >= 1 and d <= 18:
            print('Aquarius')
        elif d > 18 and d <= 29:
            print('Pisces')
    elif m == months[2]:
        if d >= 1 and d <= 20:
            print('Pisces')
        elif d > 20 and d <= 31:
            print('Aries')
    elif m == months[3]:
        if d >= 1 and d <= 19:
            print('Aries')
        elif d > 19 and d <= 30:
            print('Taurus')
    elif m == months[4]:
        if d >= 1 and d <= 20:
            print('Taurus')
        elif d > 20 and d <= 31:
            print('Gemini')
    elif m == months[5]:
        if d >= 1 and d <= 20:
            print('Gemini')
        elif d > 20 and d <= 30:
            print('Cancer')
    elif m == months[6]:
        if d >= 1 and d <= 22:
            print('Cancer')
        elif d > 22 and d <= 31:
            print('Leo')
    elif m == months[7]:
        if d >= 1 and d <= 22:
            print('Leo')
        elif d > 22 and d <= 31:
            print('Virgo')
    elif m == months[8]:
        if d >= 1 and d <= 22:
            print('Virgo')
        elif d > 22 and d <= 30:
            print('Libra')
    elif m == months[9]:
        if d >= 1 and d <= 22:
            print('Libra')
        elif d > 22 and d <= 31:
            print('Scorpio')
    elif m == months[10]:
        if d >= 1 and d <= 21:
            print('Scorpio')
        elif d > 22 and d <= 30:
            print('Sagittarius')
    elif m == months[11]:
        if d >= 1 and d <= 21:
            print('Sagittarius')
        elif d > 22 and d <= 31:
            print('Capricorn')
zodiac(bmonth,bday)