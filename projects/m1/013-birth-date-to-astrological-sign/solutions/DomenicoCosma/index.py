
months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
def func():

     date, month = input('Enter your birthday').split()


     if int(date) > 31 or int(date) < 0:
        print('Your date cannot be less then 1 or more then 31')
        return
     if month[0:3].lower() == 'feb' and int(date) > 29:
        print('February has no more then 28 or 29 days')
        return


     if int(date) >= 22 and month[0:3].lower() == 'dec' or int(date) <= 19 and month[0:3].lower() == 'jan':
      print('Yoru zodiac sign is Capricorn')
     elif int(date) >= 20 and month[0:3].lower() == 'jan' or int(date) <= 18 and month[0:3].lower() == 'feb':
      print('Your zodiac sign is Aquarius')
     elif int(date) >= 19 and  month[0:3].lower() == 'feb' or int(date) <= 20 and month[0:3].lower() == 'mar':
      print('Your zodiac sign is Pisces')
     elif int(date) >= 21 and month[0:3].lower() == 'mar' or int(date) <= 19 and month[0:3].lower() == 'apr':
      print('Your zodiac sign is Aries')
     elif int(date) >= 20 and month[0:3].lower() == 'apr' or int(date) <= 20 and month[0:3].lower() == 'may':
      print('Your zodiac sign is Taurus')
     elif int(date) >= 21 and month[0:3].lower() == 'may' or int(date) <= 20 and month[0:3].lower() == 'jun':
      print('Your zodiac sign is Gemini')
     elif int(date) >= 21 and month[0:3].lower() == 'jun' or int(date) <= 22 and month[0:3].lower() == 'jul':
      print('Your zodiac sign is Cancer')
     elif int(date) >= 23 and month[0:3].lower() == 'jul' or int(date) <= 22 and month[0:3].lower() == 'aug':
      print('Your zodiac sign is Leo')
     elif int(date) >= 23 and month[0:3].lower() == 'aug' or int(date) <= 22 and month[0:3].lower() == 'sep':
      print('Your zodiac sign is Virgo')
     elif int(date) >= 23 and month[0:3].lower() == 'sep' or int(date) <= 22 and month[0:3].lower() == 'oct':
      print('Your zodiac sign is Libra')
     elif int(date) >= 23 and month[0:3].lower() == 'oct' or int(date) <= 21 and month[0:3].lower() == 'nov':
      print('Your zodiac sign is Scorpio')
     elif int(date) >= 22 and month[0:3].lower() == 'nov' or int(date) <= 21 and month[0:3].lower() == 'dec':
      print('Your zodiac sign is Pisces')
     else:
      print('Something is wrong with your birthday')

func()
