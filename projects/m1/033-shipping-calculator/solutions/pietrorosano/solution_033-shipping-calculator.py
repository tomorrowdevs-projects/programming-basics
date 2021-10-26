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
    number_conversion = ["one", "two", "three", "four", "fi", "six", "seven", "eight", "nine", "ten", "eleven", "twel"]
    if number == 1:
        ordinal_number = "first"
    elif number == 2:
        ordinal_number = "second"
    elif number == 3:
        ordinal_number = "third"
    elif number == 5 or number == 12:
        ordinal_number = str(number_conversion[number - 1]) + "fth"
    elif number == 4 or number > 5 and number < 12:
        ordinal_number = str(number_conversion[number - 1]) + "th"
    else:
        ordinal_number = " "
    return print(ordinal_number)

ordinal(integer)

