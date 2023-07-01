'''
Develop a program that reads a four-digit integer from the user and displays the sum of its digits.
For example, if the user enters 3141 then your program should display 3+1+4+1=9.
'''

x = input("Enter an integer number with 4 digits:\n")

try:
    while len(x) != 4:
        print('Devi inserire un numero da 4 cifre!')
        x = input("inserisci un numero con quattro cifre")
except ValueError:
    print('Invalid input. Enter an integer number!')
    x = 0

x_int = [int(i) for i in x]

somma = 0
for i in x_int:
    somma += i  

print(f'The sum of the digits of your number is: {somma}')