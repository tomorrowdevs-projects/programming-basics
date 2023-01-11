# Sorted Order
entered_numbers = []
number = input("Enter a number (0 to finish): ")
while number != "0":
    if number.isnumeric():
        entered_numbers.append(int(number))
    else:
        print("You can only enter integers!")
    number = input("Enter a number (0 to finish): ")
entered_numbers.sort()
for n in entered_numbers:
    print(n)