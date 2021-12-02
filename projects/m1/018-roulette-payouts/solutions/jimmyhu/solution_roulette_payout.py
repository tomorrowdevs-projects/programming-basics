import random
numgenerator = random.randint(0, 36)
if numgenerator == 0:
    numgenerator = random.choice(['{:02}'.format(0) , 0])
redbox = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
print('The spin resulted in: ' + str(numgenerator) + '\n' + 'pay: ' + str(numgenerator))
if numgenerator != '00' and numgenerator != 0 :
    if numgenerator in redbox:
        print('Pay Red')
    else:
        print('Pay Black')
    if numgenerator % 2 == 0:
        print('Pay Even')
    else:
        print('Pay Odd')
    if numgenerator < 19:
        print('Pay 1 to 18')
    else:
        print('Pay 19 to 36')