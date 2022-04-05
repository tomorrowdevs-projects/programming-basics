"""Sum of the Digits in an Integer

Develop a program that reads a four-digit integer from the user and displays the sum of its digits. 
For example, if the user enters 3141 then your program should display 3+1+4+1=9.
"""

from re import I


number=list(input("Please enter a 4 digit number: ")) #transform the input in a list of digits

digit=0
for el in number:
    el = int(el) #trasform the list of string digits into a list of int 
    digit = digit + el

print(f"The sum of the digits is: {digit}")