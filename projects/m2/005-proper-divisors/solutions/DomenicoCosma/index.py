
#function that return all the propers divisors for a number enter by the user

def numbers_divisors(num):
    counter = num - 1
    print(f'You can divide {num} by:')
    while counter != 0:
        if num % counter == 0:
            print(counter)
        counter -= 1
    print('and himself')




numbers_divisors(int(input('Enter a integer number...')))