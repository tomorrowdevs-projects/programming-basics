bit = input("Enter a group of 8 bits: ")

while bit != "":
    if len(bit) != 8:
        print("Error, you must provide an 8-digit number.")
    elif bit.count("0") + bit.count("1") != 8:
        print("Error, you must write only 0 or 1 in the string.")
    else:
        one = bit.count("1")
        print(f"The parity bit is {one % 2}.")
    bit = input("Enter a group of 8 bits: ")


