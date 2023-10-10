'''
# Birth Date to Astrological Sign

The horoscopes commonly reported in newspapers use the position of the sun at 
the time of one’s birth to try and predict the future.    
This system of astrology divides the year into twelve zodiac signs, as outline in the table below:  


| Zodiac Sign |       Date Range           |
|-------------|----------------------------|
| Capricorn   | December 22 to January 19  |
| Aquarius    | January 20 to February 18  |
| Pisces      | February 19 to March 20    |
| Aries       | March 21 to April 19       |
| Taurus      | April 20 to May 20         |
| Gemini      | May 21 to June 20          |
| Cancer      | June 21 to July 22         |
| Leo         | July 23 to August 22       |
| Virgo       | August 23 to September 22  |
| Libra       | September 23 to October 22 |
| Scorpio     | October 23 to November 21  |
| Sagittarius | November 22 to December 21 |

Write a program that asks the user to **enter his or her month and day of birth**.    
Then your program should **return the user’s zodiac sign** as part of an appropriate output message.

Example:   
Month input: December   
Day input: 22   
Output: Capricorn
'''

zodiac_sign = ''

user_birth_month = str.lower(input('\nWhich month did you birth? '))
user_birth_day = int(input('\nWhich day did you birth? '))

match user_birth_month:
    case 'january':
        if user_birth_day <= 19:
            zodiac_sign = 'Capricorn'
        else:
            zodiac_sign = 'Aquarius'
    case 'february':
        if user_birth_day <= 18:
            zodiac_sign = 'Aquarius'
        else:
            zodiac_sign = 'Pisces'
    case 'march':
        if user_birth_day <= 20:
            zodiac_sign = 'Pisces'
        else:
            zodiac_sign = 'Aries'
    case 'april':
        if user_birth_day <= 19:
            zodiac_sign = 'Aries'
        else:
            zodiac_sign = 'Taurus'
    case 'may':
        if user_birth_day <= 20:
            zodiac_sign = 'Taurus'
        else:
            zodiac_sign = 'Gemini'
    case 'june':
        if user_birth_day <= 20:
            zodiac_sign = 'Gemini'
        else:
            zodiac_sign = 'Cancer'
    case 'july':
        if user_birth_day <= 22:
            zodiac_sign = 'Cancer'
        else:
            zodiac_sign = 'Leo'
    case 'august':
        if user_birth_day <= 22:
            zodiac_sign = 'Leo'
        else:
            zodiac_sign = 'Virgo'
    case 'september':
        if user_birth_day <= 22:
            zodiac_sign = 'Virgo'
        else:
            zodiac_sign = 'Libra'
    case 'october':
        if user_birth_day <= 22:
            zodiac_sign = 'Libra'
        else:
            zodiac_sign = 'Scorpio'
    case 'november':
        if user_birth_day <= 21:
            zodiac_sign = 'Scorpio'
        else:
            zodiac_sign = 'Sagittarius'
    case 'december':
        if user_birth_day <= 21:
            zodiac_sign = 'Sagittarius'
        else:
            zodiac_sign = 'Capricorn'


print(f"\n{zodiac_sign}\n")