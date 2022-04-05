"""Words like *first*, *second* and *third* are referred to as ordinal numbers. 
In this exercise, you will write a function that takes an integer as its only parameter and returns a string containing the appropriate English ordinal number as its only result. 
Your function must handle the integers between 1 and 12 (inclusive). 
It should return an empty string if the function is called with an argument outside of this range. 
Include a main program that demonstrates your function by displaying each integer from 1 to 12 and its ordinal number. 
Your main program should only run when your file has not been imported into another program.
"""


def convertor(num):
    """This function converts the integer numbers from 1 to 12 into the respective ordinal"""
    number = [i for i in range(1,13)]
    ordinal = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth",
                "Seventh", "Eighth","Ninth","Tenth","Eleventh","Twelfth"]
    conv_dict = dict(zip(number,ordinal))
    if num in number:
        return conv_dict[num]
    else:
        return ""

print(convertor(2))
print(convertor(15))
print(convertor(5))
print(convertor(8))