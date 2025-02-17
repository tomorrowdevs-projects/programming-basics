while True:
    bit_string = str(input("Please enter a string containing 8 bits (blank line to quit): "))
    if bit_string == "":
        print("Exiting ...")
        break

    if len(bit_string) > 8:
        print("Error, too many bits entered.")
    
    else:
        bit_string = list(bit_string)
        for parity in bit_string:
            counter = 0
            if parity == '1':
                counter += 1
        if counter % 2 == 0: 
            print('0')
        else:
            print('1')