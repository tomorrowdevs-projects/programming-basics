
# reads the name of a month from the user as a string.
month_user = input('Enter the name of a month: ')

days_30 = 'novaprjunsep'
days_31 = 'janmarmayjulaugoctdec'

#display the number of days in that month.
if month_user[:2] in days_30:
    print('30 days.')
#Display “28 or 29 days” for February
elif month_user == 'february':
    print('28 or 29 days.')
else:
    print('31 days.')
    