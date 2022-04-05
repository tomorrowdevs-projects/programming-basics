"""A proper divisor of a positive integer, *n*, is a positive integer less than *n* which divides evenly into *n*.
Write a function that computes all of the proper divisors of a positive integer.
The integer will be passed to the function as its only parameter.
The function will return a list containing all of the proper divisors as its only result.
Complete this exercise by writing a main program that demonstrates the function by reading a value from the user and displaying the list of its proper divisors"""


def proper_divisor(num):
    lst = []
    num = int(num)
    for i in range (num-1,0,-1):
        if num % i == 0:
            lst.append(i)
    return lst


number = int(input("Please enter a number: "))
print(proper_divisor(number))
