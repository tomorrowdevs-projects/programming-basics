user_number = int(input('Enter a positive number: '))

while user_number > 0 :

    if user_number == 1 :
        user_number = int(input('Enter a positive number: '))
    
    elif user_number % 2 == 0 :
        user_number = user_number // 2
        print(user_number)

    else :
        user_number = user_number * 3 + 1
        print(user_number) 

print('Thanks for testing the Collatz conjecture') 