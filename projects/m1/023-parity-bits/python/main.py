string_of_bits = input("Insert a string of 8 bits . Blank to quit ")

def is_a_bit_string(string):
    flag = True
    for i in string:
        if i!='0' and i!='1':
            flag = False
    return flag

while string_of_bits != "":
    if (len(string_of_bits) != 8) or not(is_a_bit_string(string_of_bits)):
        print("Error. You have to insert a string of 8 bits (0 or 1). Try again")
        string_of_bits=input()
    else:
        counter = string_of_bits.count('1')
        if counter % 2 == 0:
            parity_bits="0"
        else:
            parity_bits="1"
        print("Parity bit should be: {}".format(parity_bits))
        string_of_bits = input("Insert a string of 8 bits . Blank to quit ")
    
