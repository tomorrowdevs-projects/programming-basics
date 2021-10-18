days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
 

day, month = input('Insert your day and month of birth separated by a whitespace:\n').split()

day_int = int(day)

if day_int in days[21:31] and month == months[11] or day_int in days[0:19] and month == months[0]:
    print('your sign is Capricorn')
elif day_int in days[19:31] and month == months[0] or day_int in days[0:18] and month == months[1]:
    print('your sign is Acquarius')
elif day_int in days[18:29] and month == months[1] or day_int in days[0:20] and month == months[2]:
    print('your sign is Pisces')
elif day_int in days[20:31] and month == months[2] or day_int in days[0:19] and month == months[3]:
    print('your sign is Aries')
elif day_int in days[19:30] and month == months[3] or day_int in days[0:19] and month == months[4]:
    print('your sign is Taurus')
elif day_int in days[20:31] and month == months[4] or day_int in days[0:20] and month == months[5]:
    print('your sign is Gemini')
elif day_int in days[20:30] and month == months[5] or day_int in days[0:22] and month == months[6]:
    print('your sign is Cancer')
elif day_int in days[22:31] and month == months[6] or day_int in days[0:22] and month == months[7]:
    print('your sign is Leo')
elif day_int in days[22:31] and month == months[7] or day_int in days[0:22] and month == months[8]:
    print('your sign is Virgo')
elif day_int in days[22:30] and month == months[8] or day_int in days[0:22] and month == months[9]:
    print('your sign is Libra')
elif day_int in days[22:31] and month == months[9] or day_int in days[0:21] and month == months[10]:
    print('your sign is Scorpio')
elif day_int in days[21:30] and month == months[10] or day_int in days[0:21] and month == months[11]:
    print('your sign is Sagittarius')