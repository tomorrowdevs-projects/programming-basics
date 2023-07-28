#ask to user a day and a month
day = int(input('type a day: '))
month = input('type a month: ').lower()
if type(month) is not str:
    print('error')
    quit()
if day > 31:
    print('error')
    quit()

# if else statements that returns the zodiacal sign by comparing the day typed by user with a range of numbers and the month typed with a string
if 22 <= day <= 31 and month == 'december' or 1 <= day <= 19 and month == 'january':
    sign = 'your sign is capricorn'
elif 20 <= day <= 31 and month == 'january' or 1 <= day <= 18 and month == 'febraury':
    sign = 'your sign is Acquarius'
elif 19 <= day <= 29 and month == 'febraury' or 1 <= day <= 20 and month == 'march':
     sign = 'your sign is Pisces'
elif 21 <= day <= 31 and month == 'march' or 1 <= day <= 19 and month == 'april':
    sign = 'your sign is Aries'
elif 20 <= day <= 30 and month == 'april' or 1 <= day <= 20 and month == 'may':
    sign = 'your sign is Taurus'
elif 21 <= day <= 31 and month == 'may' or 1 <= day <= 20 and month == 'june':
     sign = 'your sign is Gemini'
elif 21 <= day >= 30 and month == 'june' or 1 <= day <= 22 and month == 'july':
    sign = 'your sign is Cancer'
elif 23 <= day <= 31 and month == 'july' or 1 <= day <= 22 and month == 'august':
     sign = 'your sign is Leo'    
elif 23 <= day <= 31 and month == 'august' or 1 <= day <= 22 and month == 'september':
     sign = 'your sign is Virgo'
elif 23 <= day <= 30 and month == 'september' or 1 <= day <= 22 and month == 'october':
     sign = 'your sign is Libra'     
elif 23 <= day <= 31 and month == 'october' or 1 <= day <= 22 and month == 'november':
    sign = 'your sign is Scorpio'
elif 23 <= day <= 30 and month == 'november' or 1 <= day <= 21 and month == 'december':
    sign = 'your sign is Sagittarius'

print(sign)