for i in range(1, 100 + 1):

    margin = 20 - len(str(i))
    next = i + 1

    if (i % 5 == 0 and i % 3 == 0):
        print(i, ' ' * margin, 'Fizz buzz!')
    elif (i % 3 == 0):
        print(i, ' ' * margin, 'Fizz!')
    elif (i % 5 == 0):
        print(i, ' ' * margin, 'Buzz!')   
    else:
        print(i, ' ' * margin, next)