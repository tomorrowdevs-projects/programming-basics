
for x in range(1, 101, 1):
    if x % 3 == 0 and x % 5 == 0:
        print('fizz-buzz')
    elif x % 5 == 0:
        print('buzz')
    elif x % 3 == 0:
        print('fizz')
    else:
        print(x)