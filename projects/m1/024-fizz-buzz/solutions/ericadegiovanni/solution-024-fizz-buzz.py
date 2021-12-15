
# Write a program that displays the answers for the first 100 numbers
# in the Fizz- Buzz game. Each answer should be displayed on its own line.

for n in range(1, 101):
    if n % 3 == 0 and n % 5 == 0:
        print('Fizz Buzz')
    elif n % 3 == 0:
        print('Fizz')
    elif n % 5 == 0:
        print('Buzz')
    else:
        print(n)