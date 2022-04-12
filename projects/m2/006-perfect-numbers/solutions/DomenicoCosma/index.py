
#function that returns True if the number is a perfect number (if the sum of the proper divisors is equal to the number)

def perfect_num(num):
    divisors = []
    counter = num - 1
    while counter != 0:
        if num % counter == 0:
            divisors.append(counter)
        counter -= 1
    if sum(divisors) == num:
        print('True')
    else:
        print('False')


perfect_num(int(input('Enter an integer number to know if it is a perfect number...')))