# the user enters the month

month = str(input('Enter a month '))

# these conditions return the number of days of the chosen month

if month[0:1] == 'f' :
    print('The month is 28 or 29 days,depends on the leap year')

elif month[0:1] in 'asn' or month == 'june' :
    print('The month is 30 days')

else :
    print('The month is 31 days') 