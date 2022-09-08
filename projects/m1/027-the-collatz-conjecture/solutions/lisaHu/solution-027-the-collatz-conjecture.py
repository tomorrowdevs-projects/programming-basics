#import math for floor function
import math

while True:

    #1st loop: empty list + input from user with its if statements. the int entered should be added in the empty list
    sequence = []
    x = int(input('Enter integer:  '))
    if x > 0:
        sequence.append(x)
    else:
        break

    #2nd loop: processing of the last number in the list and add the result of the calculation to list + display
    while True:
        if sequence[-1] % 2 == 0:
            sequence.append(math.floor(sequence[-1]/2))
        else:
            sequence.append((sequence[-1]*3)+1)
        print(sequence)
        if sequence[-1] == 1:
            break