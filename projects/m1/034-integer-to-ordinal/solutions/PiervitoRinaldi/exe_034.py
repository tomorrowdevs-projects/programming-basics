def to_ordinal_numbers(n):
    if n <= 0 or n > 12:
        ordinal_n = ''
    elif n == 1:
        ordinal_n = 'First'
    elif n == 2:
        ordinal_n = 'Second'
    elif n == 3:
        ordinal_n = 'Third'
    elif n == 4:
        ordinal_n = 'Fourth'
    elif n == 5:
        ordinal_n = 'Fifth'
    elif n == 6:
        ordinal_n ='Sixth'
    elif n == 7:
        ordinal_n = 'Seventh'
    elif n == 8:
        ordinal_n = 'Eighth'
    elif n == 9:
        ordinal_n = 'Ninth'
    elif n == 10:
        ordinal_n = 'Tenth'
    elif n == 11:
        ordinal_n = 'Eleventh'
    elif n == 12:
        ordinal_n = 'Twelfth'
    print(ordinal_n)

n = int(input('Enter number between 1 and 12: '))
to_ordinal_numbers(n)


