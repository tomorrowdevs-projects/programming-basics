# Month Name to Number of Days

month = str(input) # Enter one name of a month to discover its number of days 

if month == str('january') or month == str('march') or month == str('may') or month == str('july') or month == str('august') or month == str('october') or month == str('december'):
    print('31 days')
elif month == str('april') or month == str('june') or month == str('semptember') or month == str('november'):
    print('30 days')
else:
    print('28 or 29 days')
