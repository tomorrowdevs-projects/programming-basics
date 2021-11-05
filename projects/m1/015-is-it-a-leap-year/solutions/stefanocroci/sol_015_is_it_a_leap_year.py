# Create a function to define if it's a leap year or not
def leap_year(year):
    if year % 400 == 0:
        print('This is a leap year')
        return
    elif year % 100 == 0:
        print('This is not a leap year')
        return
    elif year % 4 == 0:
        print('This is a leap year')
        return
    else:
        print('This is not a leap year')

# Ask the user for an input and display the result
ask_year = int(input('Insert an year to know if it is a leap year: '))

leap_year(ask_year)