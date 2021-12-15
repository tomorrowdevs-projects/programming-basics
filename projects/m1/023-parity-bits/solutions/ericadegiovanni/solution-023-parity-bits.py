# Write a program that computes the parity bit for groups of 8 bits until the user enters a blank line.

while True:
    bits = input('Enter an 8-bit data (blank line to quit): ')
    if bits == "":
        break
    elif len(bits) != 8 or bits.count('1') + bits.count('0') !=8:
        print('Error! Insert a group of 8-bit data.')

    #After each string display a message indicating whether the parity bit should be 0 or 1. 
    else:
        if bits.count('1') % 2 == 0:
          print('The even parity bit should be 0.')
        else:
          print('The even parity bit should be 1.')
