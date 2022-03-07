
try:
 request_year = int(input('Enter a random year'))


 if request_year % 400 % 4 == 0:
    print('It\'s a leap year')
 else:
    print('It is not a leap year')

except:
 print('Something is wrong with your year')