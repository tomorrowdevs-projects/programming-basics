birthdate = str.casefold(input('Insert your birthdate (name of month and day): '))

birthmonth = birthdate.split()[0]
birthday = int(birthdate.split()[1])

if birthmonth == 'january':
    if birthday < 20:
        print('Your sign is Capricorn')
    else:
        print('Your sign is Aquarius')
elif birthmonth == 'february':
    if birthday < 19:
        print('Your sign is Aquarius')
    else:
        print('Your sign is Pisces')
elif birthmonth == 'march':
    if birthday < 21:
        print('Your sign is Pisces')
    else:
        print('Your sign is Aries')
elif birthmonth == 'april':
    if birthday < 19:
        print('Your sign is Aries')
    else:
        print('Your sign is Taurus')
elif birthmonth == 'may':
    if birthday < 21:
        print('Your sign is Taurus')
    else:
        print('Your sign is Gemini')
elif birthmonth == 'june':
    if birthday < 21:
        print('Your sign is Gemini')
    else:
        print('Your sign is Cancer')
elif birthmonth == 'july':
    if birthday < 23:
        print('Your sign is Cancer')
    else:
        print('Your sign is Leo')
elif birthmonth == 'august':
    if birthday < 23:
        print('Your sign is Leo')
    else:
        print('Your sign is Virgo')
elif birthmonth == 'september':
    if birthday < 23:
        print('Your sign is Virgo')
    else:
        print('Your sign is Libra')
elif birthmonth == 'october':
    if birthday < 23:
        print('Your sign is Libra')
    else:
        print('Your sign is Scorpio')
elif birthmonth == 'november':
    if birthday < 22:
        print('Your sign is Scorpio')
    else:
        print('Your sign is Sagittarius')