bit_group = input("Insert a group of 8 bits (blank to quit): ")

while bit_group != "":
    count0 = bit_group.count("0")
    count1 = bit_group.count("1")

    if count0 + count1 != 8:
        print("You can insert only 8 bits (only 0 and 1 are allowed and must be a group of 8 numbers)")

    if count0 + count1 == 8:
        if count0 % 2 == 0:
            print("The even parity bit for this group is 0")
        else:
            print("The even parity bit for this group is 1")

    bit_group = input("Insert a group of 8 bits (blank to quit): ")