long_month = ('january','march','may','july','august','october','dicember')
medium_month = ('april','june','september','november')
special_month = 'february'
mese = input('please insert the month(en): ').lower()
if mese in long_month:
    print('this month have 31 days')
elif mese in medium_month:
    print('this month have 30 days')
elif mese == special_month:
    year = int(input('please insert the year:'))
    if year % 4 == 0:
        print('than this month have 29 days')
    else:
        print('this month have 28 days')