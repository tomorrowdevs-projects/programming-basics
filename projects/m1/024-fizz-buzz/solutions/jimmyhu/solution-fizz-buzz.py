player = int(input('how many players?  '))
counter = int(input('enter 1 for start the game:  '))
if counter != 1:
    print('error')
else:
    counter += 1
    while counter <= 100 and player > 1:
        answer = input('Enter you answer:  ')
        print('you say:  ' + str(answer) + '\n')
        if counter % 3 == 0 and counter % 5 == 0:
            if answer != 'fizzbuzz':
                print('Error you should say: fizzbuzz\nyou are eliminated!')
                player -= 1
        elif counter % 5 == 0:
            if answer != 'buzz':
                print('Error you should say: buzz\nyou are eliminated!')
                player -= 1
        elif counter % 3 == 0:
            if answer != 'fizz':
                print('Error you should say: fizz\nyou are eliminated!')
                player -= 1
        elif answer != str(counter):
            print('Error you should say: '+ counter + '\nyou are eliminated!')
            player -= 1
        elif player < 2:
            break
        else:
            print('Next\n')
            counter += 1
if player > 1 and counter > 100:
    print('No more numbers')
elif player == 1:
    print('We have a Winner')
