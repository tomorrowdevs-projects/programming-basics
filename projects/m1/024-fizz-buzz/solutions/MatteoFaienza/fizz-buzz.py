# this program solves the fizz-buzz game up to number 100
number = 1

while True :

    if number > 100 :
        break

    if number % 3 == 0 and number % 5 == 0 :
        print('fizz-buzz')

    elif number % 3 == 0 :
        print('fizz')

    elif number % 5 == 0 :
        print('buzz')

    else :
        print(number)

    number += 1  