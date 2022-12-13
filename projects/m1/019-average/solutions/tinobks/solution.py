first_number = int(input("Enter a number and enter 0 when you done: "))
somma = 0
divisore = 0

if first_number == 0:
    print("Error: your first value can't be 0")

elif first_number != 0:
    other_number = int(input("Enter a number or enter 0 if you done: "))
    
    while other_number > 0:
        somma += other_number
        divisore += 1
        other_number = int(input("Enter a number or enter 0 if you done: "))

    media = (somma + first_number)/(divisore + 1)
    print(("The average is: {}") .format(media))
