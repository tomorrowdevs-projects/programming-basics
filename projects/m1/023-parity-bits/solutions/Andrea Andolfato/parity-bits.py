
while True:
    bit_string = input("Insert your octet: ")
    if bit_string == "":
        break
    bit_one = bit_string.count("1")
    bit_two = bit_string.count("2")
    if bit_one % 2 == 0:
        print("Bit string is even. 0 will be added: ", "0".join(bit_string))
    else:
        print("Bit string is odd. 1 will be added: ", "1".join(bit_string))