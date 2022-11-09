"""A parity bit is a simple mechanism for detecting errors in data transmitted over an unreliable connection such as a telephone line. 
The basic idea is that an additional bit is transmitted after each group of 8 bits so that a single bit error in the transmission can be detected.
Parity bits can be computed for either even parity or odd parity. 
If even parity is selected then the parity bit that is transmitted is chosen so that the total number of one bits transmitted 
(8 bits of data plus the parity bit) is even. 
When odd parity is selected the parity bit is chosen so that the total number of one bits transmitted is odd.
Write a program that computes the parity bit for groups of 8 bits entered by the user using even parity. 
Your program should read strings containing 8 bits until the user enters a blank line. 
After each string is entered by the user your program should display a clear message indicating whether the parity bit should be 0 or 1. 
Display an appropriate error message if the user enters something other than 8 bits.

Hint: You should read the input from the user as a string. Then you can use the count method to help you determine the number of zeros and ones
in the string. 
Information about the count method is available online."""

print('This program compute the parity bit for group of 8 bits using even parity.')

while True:
    bit_string = input('Insert your octet (blank to exit): ')
    print('test2')
    if bit_string == '':
        break

    bit_counter1 = bit_string.count('1')
    bit_counter0 = bit_string.count('0')

    bit_sum = bit_counter1 + bit_counter0
    string_len = len(bit_string)

    if bit_sum != 8:
        print('You have to insert an octet (Just 0 or 1 allowed)')

    if bit_sum == 8:
        if bit_counter1 % 2 == 0:
            print('The bit string is even a 0 will be added:', bit_string + ''.join ('0'))
        else:
            print('The bit string is odd a 1 will be added:', bit_string + ''.join ('1'))