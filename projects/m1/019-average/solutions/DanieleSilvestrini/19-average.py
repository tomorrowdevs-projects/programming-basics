item_list = [int(number) for number in input("Enter the values: ").split()]

if item_list[0] == 0:
    print("Error, first value can't be 0")
else:
    elements = sum(item_list)
    print(elements / ((len(item_list)) - 1))

