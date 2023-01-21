#ask to user a day and a month
day = int(input('type a day: '))
month = input('type a month: ').lower()

# if else statements that returns the zodiacal sign by comparing the day typed by user with a range of numbers and the month typed with a string
if day in range(22,32) and month == 'december' or day in range(1,20) and month == 'january':
    print('your sign is capricorn')
elif day in range(20,32) and month == 'january' or day in range(1,19) and month == 'febraury':
    print('your sign is Acquarius')
elif day in range(19,30) and month == 'febraury' or day in range(1,21) and month == 'march':
     print('your sign is Pisces')
elif day in range(21,32) and month == 'march' or day in range(1,22) and month == 'april':
    print('your sign is Aries')
elif day in range(20,31) and month == 'april' or day in range(1,20) and month == 'may':
    print('your sign is Taurus')
elif day in range(21,32) and month == 'may' or day in range(1,20) and month == 'june':
     print('your sign is Gemini')
elif day in range(20,31) and month == 'june' or day in range(0,22) and month == 'july':
    print('your sign is Cancer')
elif day in range(23,32) and month == 'july' or day in range(1,23) and month == 'august':
     print('your sign is Leo')    
elif day in range(23,32) and month == 'august' or day in range(1,23) and month == 'september':
     print('your sign is Virgo')
elif day in range(23,31) and month == 'september' or day in range(1,23) and month == 'october':
     print('your sign is Libra')     
elif day in range(23,32) and month == 'october' or day in range(1,23) and month == 'november':
    print('your sign is Scorpio')
elif day in range(23,31) and month == 'november' or day in range(1,22) and month == 'december':
    print('your sign is Sagittarius')
