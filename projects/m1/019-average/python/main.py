value = int(input("Please enter a number (press 0 if you want to exit): "))

counter = 1
total = value
while value != 0: 
    value = int(input("Please enter a number (press 0 if you want to exit): "))
    if value != 0:
        counter += 1
        total += value

average = print(f"Average is: {total / counter}")