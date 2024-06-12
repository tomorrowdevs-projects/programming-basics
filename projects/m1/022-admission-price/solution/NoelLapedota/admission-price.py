cost = 0
def numero():
     global cost
     guess=(input('Enter the age please :\n'))
     while guess != ' ':
        
        if int(guess) <= 2:
                cost += 0
                guess=(input('Enter the age please :\n'))
            
        if int(guess) == 3 and int(guess) < 12:
                   cost += 14
                   guess=(input('Enter the age please :\n'))
        if int(guess) >= 65 :
                 cost += 18
                 guess=(input('Enter the age please :\n'))
        if int(guess) > 65:
                 cost += 23
                 guess=(input('Enter the age please :\n'))
        if guess == ' ':
              print(f'The cost for the group is:\n {cost:.2f}.')

enter=(input('Are you a group? S-N :\n')).capitalize()
if enter == 'S':
        x=(input('Enter the age of each group member?,please type space to terminate : ok? S-N \n')).capitalize()
        if enter == 'S':
         numero()
        else:
            print('Contact the cashier plese..')
            
else:   
        print('Contact the cashier plese..')





















