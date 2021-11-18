# the user enters the month
month = str(input('Enter a month '))
# these conditions return the number of days of the chosen month
if month=='january 'or month=='march'or month=='may'or month=='july'or month=='august'or month=='october'or month=='december':
    print('The month is 31 days')
elif month=='april'or month=='june'or month=='september'or month=='november':
    print('The month is 30 days')  
elif month=='february':
    print('The month is 28 or 29 days,depends on the leap year')  