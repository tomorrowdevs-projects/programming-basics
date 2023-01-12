# Reverse Order
entered_numbers = []
number = input("Enter a number (0 to finish): ")
while number != "0":
    if number.isnumeric():
        if int(number) != 0: # I added this condition to avoid adding to the list strings whose integer value would correspond to 0, for example strings like "00" or "000".
            entered_numbers.append(int(number))
    else: 
        print("You can only enter integers!")
    number = input("Enter a number (0 to finish): ")
entered_numbers.sort()
entered_numbers.reverse()
for n in entered_numbers:
    print(n)