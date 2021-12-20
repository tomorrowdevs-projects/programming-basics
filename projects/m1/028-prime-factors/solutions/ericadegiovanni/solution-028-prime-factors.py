# Read an integer and display the prime numbers that can be multiplied together to compute n

print('```')
number = int(input('Enter an integer (2 or greater): '))
factor = 2
print(f'The prime factors of {number} are:')

if number < 2:
        print('The number should be greater than 2.')

while factor <= number:    
    if number % factor == 0:
        print(factor)
        number //= factor
    else:
        factor += 1
print('```')

