years = int(input('enter the year: '))
if years % 400 == 0 or years % 400 != 0 and years % 100 != 0 or years % 400 != 0 and years %100 == 0 and years % 4 == 0:
    print('leap year')
else:
    print('not leap year')
