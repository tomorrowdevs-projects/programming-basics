
# asks the user to enter the month and day of birth.
date = input('Enter your month of birth: ').lower()
number = int(input('Enter the number of your day of birth: '))

# report the user’s zodiac sign as part of an appropriate output message.
if date == 'december' and 22 <= number <= 31 or date == 'january' and 1 <= number <= 19:
    sign ='capricorn'
  
elif date == 'january'and 20 <= number <= 31 or date == 'february' and 1 <= number <= 18:
    sign = 'aquarius'

elif date == 'february' and 19 <= number <= 29 or date == 'march' and 1 <= number <= 20:
    sign = 'pisces'
 
elif date == 'march' and 21 <= number <= 31 or date == 'april' and 1<= number <= 19:
    sign = 'aries'
    
elif date == 'april' and 20 <= number <= 30 or date == 'may' and 1 <= number <= 20:
    sign = 'taurus'
   
elif date == 'may' and 21 <= number <= 31 or date == 'june' and 1 <= number <= 20:
    sign = 'gemini'

elif date == 'june' and 21 <= number <= 30 or date == 'july' and 1 <= number <= 22:
    sign = 'cancer'
 
elif date == 'july' and 23 <= number <= 31 or date == 'august' and 1 <= number <= 22:
    sign = 'leo'

elif date == 'august' and 23 <= number <= 31 or date == 'september' and 1 <= number <= 22:
    sign = 'virgo'

elif date == 'september' and 23 <= number <= 30 or date == 'october' and 1 <= number <= 22:
    sign = 'libra'
 
elif date == 'october' and 23 <= number <= 31 or date == 'november' and 1 <= number <= 21:
    sign = 'scorpio'

elif date == 'november'  and 22 <= number <= 30 or date == 'december' and 1 <= number <= 21:
    sign = 'sagittarius'


print(f'Your zodiac sign is {sign}.')