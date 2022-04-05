"""
Write a main program that uses your recursive function to convert a non-negative integer entered by the user from decimal to binary. Your program should display an appropriate error message if the user enters a negative value.
"""


def decimal_to_binary(num):
    if num <0:
        print("Please enter a positive number")
    if num == 0:
        return ""
    else:
        rem = str(num%2)
        num = num//2
        return decimal_to_binary(num) + rem



print(decimal_to_binary(123))
