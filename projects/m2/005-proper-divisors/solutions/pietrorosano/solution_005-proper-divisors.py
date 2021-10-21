# A proper divisor of a positive integer, n, is a positive integer less than n which divides evenly into n.
# Write a function that computes all of the proper divisors of a positive integer.
# The integer will be passed to the function as its only parameter.
# The function will return a list containing all of the proper divisors as its only result.
# Complete this exercise by writing a main program that demonstrates the function by reading a value from the user
# and displaying the list of its proper divisors.
# Ensure that your main program only runs when your solution has not been imported into another file.

print("\nEnter an integer to find its proper divisors:")
integer = int(input())

def properDivisors(i):
    counter = 1
    divisors = []
    while counter < i:
        if i % counter == 0:
            divisors.append(counter)
            counter += 1
        else:
            counter += 1

    for divisor in divisors:
        print(divisor)

properDivisors(integer)
    