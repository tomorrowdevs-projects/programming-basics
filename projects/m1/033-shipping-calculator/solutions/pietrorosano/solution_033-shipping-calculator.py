# Words like first, second and third are referred to as ordinal numbers.
# In this exercise, you will write a function that takes an integer as its only parameter and returns a string
# containing the appropriate English ordinal number as its only result.
# Your function must handle the integers between 1 and 12 (inclusive).
# It should return an empty string if the function is called with an argument outside of this range.
# Include a main program that demonstrates your function by displaying each integer from 1 to 12 and its ordinal number.
# Your main program should only run when your file has not been imported into another program.


print("\nEnter an integer between 1 and 12")
integer = int(input())

def ordinal(number):
    if number == 1:
        ordinal_number = "first"
    elif number == 2:
        ordinal_number = "second"
    elif number == 3:
        ordinal_number = "third"
    elif number == 4:
        ordinal_number = "fourth"
    elif number == 5:
        ordinal_number = "fifth"
    elif number == 6:
        ordinal_number = "sixth"
    elif number == 7:
        ordinal_number = "seventh"
    elif number == 8:
        ordinal_number = "eighth"
    elif number == 9:
        ordinal_number = "ninth"
    elif number == 10:
        ordinal_number = "tenth"
    elif number == 11:
        ordinal_number = "eleventh"
    elif number == 12:
        ordinal_number = "twelfth"
    else:
        ordinal_number = " "
    return print(ordinal_number)

ordinal(integer)

