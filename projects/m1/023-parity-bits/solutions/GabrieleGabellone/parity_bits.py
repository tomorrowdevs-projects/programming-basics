#Parity Bits
#this program calculates the parity bit for groups of 8 bits entered by the user using even parity

while True:
    user_bits = str(input("Enter a group of bits (blank to quit): "))
    if len(user_bits) != 8:
        if len(user_bits) == 0: break
        else: 
            print("Error! The group must be 8 bits") 
            continue
    if user_bits.count("1") % 2 == 0: print("The parity bit should be 0")
    else: print("The parity bit should be 1")