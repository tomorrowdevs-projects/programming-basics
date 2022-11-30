# | Zodiac Sign |       Date Range           |
# |-------------|----------------------------|
# | Capricorn   | December 22 to January 19  |
# | Aquarius    | January 20 to February 18  |
# | Pisces      | February 19 to March 20    |
# | Aries       | March 21 to April 19       |
# | Taurus      | April 20 to May 20         |
# | Gemini      | May 21 to June 20          |
# | Cancer      | June 21 to July 22         |
# | Leo         | July 23 to August 22       |
# | Virgo       | August 23 to September 22  |
# | Libra       | September 23 to October 22 |
# | Scorpio     | October 23 to November 21  |
# | Sagittarius | November 22 to December 21 |

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