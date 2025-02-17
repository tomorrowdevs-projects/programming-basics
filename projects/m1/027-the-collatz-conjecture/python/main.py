while True:
    # The first while start an empty list every time the user insert a new value
    # If the list had been out of the loop it would have accumulated the old values
    collatz_sequence = []
    user_input = int(input('Insert a positive integer (n <= 0 to exit): '))

    if user_input <= 0:
        break

    while True:
        # The second while evaluete the sequence
        collatz_sequence.append(user_input)

        # Avoid infinite loop and break the second while to print the sequence
        if user_input == 1:
            break

        if user_input % 2 == 0:
            user_input = user_input // 2
        
        else:
            user_input = (user_input * 3) + 1
       
    print(collatz_sequence)
