'''
# Sum of the Digits in an Integer

Develop a program that reads a four-digit integer from the user and displays the sum of its digits. 
For example, if the user enters 3141 then your program should display 3+1+4+1=9.
'''

print("\nHi folks! This program will execute the sum of a four-digit integer number you will insert below.")

integer_number = input("\nPlease insert a four-digit integer number: ")

sum = int(integer_number[0]) + int(integer_number[1]) + int(integer_number[2]) + int(integer_number[3])

print(f"\nYou insert {integer_number} and the sum of it is {sum}.")