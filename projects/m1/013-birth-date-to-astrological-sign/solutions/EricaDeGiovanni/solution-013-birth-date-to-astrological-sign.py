# Zodiac Sign	Date Range
# Capricorn	    December 22 to January 19
# Aquarius	    January 20 to February 18
# Pisces	    February 19 to March 20
# Aries	        March 21 to April 19
# Taurus	    April 20 to May 20
# Gemini	    May 21 to June 20
# Cancer	    June 21 to July 22
# Leo	        July 23 to August 22
# Virgo	        August 23 to September 22
# Libra         September 23 to October 22
# Scorpio	    October 23 to November 21
# Sagittarius	November 22 to December 21

# asks the user to enter the month and day of birth.
date = input('Enter your month of birth: ').lower()
number = int(input('Enter the number of your day of birth: '))

# report the user’s zodiac sign as part of an appropriate output message.
if 'december' == date:
 if 22 <= number <= 31:
    sign ='capricorn'
 else:
    sign = 'sagittarius'

elif 'january' == date:
 if 20 <= number <= 31:
    sign = 'acquarius'
 else:
    sign = 'capricorn'

elif 'february' == date:
 if 19 <= number <= 29:
    sign = 'pisces'
 else:
    sign = 'aquarius'

elif 'march' == date:
 if 21 <= number <= 31:
    sign = 'aries'
 else:
    sign = 'pisces'

elif 'april' == date:
 if 20 <= number <= 30:
    sign = 'taurus'
 else:
    sign = 'aries'
    
elif 'may' == date:
 if 21 <= number <= 31:
    sign = 'gemini'
 else:
    sign = 'taurus'

elif 'june' == date:
 if 21 <= number <= 30:
    sign = 'cancer'
 else:
    sign = 'gemini'

elif 'july' == date:
 if 23 <= number <= 31:
    sign = 'leo'
 else:
    sign = 'cancer'

elif 'august' == date:
 if 23 <= number <= 31:
    sign = 'virgo'
 else:
    sign = 'leo'

elif 'september' == date:
 if 23 <= number <= 30:
    sign = 'libra'
 else:
    sign = 'virgo'

elif 'october' == date:
 if 23 <= number <= 31:
    sign = 'scorpio'
 else:
    sign = 'libra'

elif 'november' in date:
 if 22 <= number <= 30:
    sign = 'sagittarius'
 else:
    sign = 'scorpio'

print(f'Your zodiac sign is {sign}.')