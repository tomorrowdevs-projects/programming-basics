
#program that reads values from the user until a blank line is entered. Display the total of all of the values entered by the user (or 0.0 if the first value entered is a blank line).


print('Enter a series of numbers to know their sum.')

#function that calls itself and create a loop till the user enters a blank line
def factorial():
    n = input('If you want to exit enter a blank line otherwise enter a value:')
    if n == '':
        return 0.0
    else:
        n = int(n)
        return n + factorial()                               #in this case we sum the number(n) plus the other number by calling again the function 'factorial()'


print(f'Your total is {factorial():.0f} ')