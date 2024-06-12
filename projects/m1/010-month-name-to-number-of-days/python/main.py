month = str(input('Please enter a month using lowercase letter only: '))

month_30_days = ['november', 'april', 'june', 'september']
february = 'february'
month_31_days = ['january', 'march', 'may', 'july', 'august', 'october']

if month in month_30_days: 
    print('The endered month has 30 days.')
elif month == february:
    print('The entered month has 28 or 29 days.')
elif month in month_31_days: 
    print('The endered month has 31 days.')
else: 
    print('Error. Incorrect month.')
