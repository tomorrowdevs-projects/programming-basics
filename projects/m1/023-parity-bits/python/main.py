# check the conditions
while True:
    input_bit = input("Enter an 8-digit bit: ")
    if len(input_bit) != 8:
        print("The string must contain exactly 8 characters. Please try again.")
    elif set(input_bit) != {"0", "1"}:
        print("A bit must contains only 0 or 1")

    else:
        break
#chek the condition of the space 
while True:
    if input_bit == "":
        break
#if 1 in input bit are even we add 1, otherwhise 0
    for bit in input_bit:
        count_ones = input_bit.count("1")
        if count_ones % 2 == 0:
            new_input_bit = input_bit + '1'
            print(new_input_bit)
        else:
            new_input_bit = input_bit + '0'
            print(new_input_bit)
        break
    input_bit = input("Enter an 8-digit bit (press enter to exit): ")