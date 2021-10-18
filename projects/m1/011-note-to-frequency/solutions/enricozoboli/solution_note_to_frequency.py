user_note = input("Insert note: ")

NOTES = 'ABCDEFG'

# Check for the correctness of the input between A to G and 0 to 8.
if user_note[0].upper() in NOTES and 0 <= int(user_note[1:3]) <= 8:

    # Find the correct note and calculate the frequency
    if user_note[0].upper() == 'C':
        frequency = 261.63 / 2 ** (4 - int(user_note[1]))

    elif user_note[0].upper() == 'D':
        frequency = 293.66 / 2 ** (4 - int(user_note[1]))

    elif user_note[0].upper() == 'E':
        frequency = 329.63 / 2 ** (4 - int(user_note[1]))
    
    elif user_note[0].upper() == 'F':
        frequency = 349.23 / 2 ** (4 - int(user_note[1]))
    
    elif user_note[0].upper() == 'G':
        frequency = 392.00 / 2 ** (4 - int(user_note[1]))
    
    elif user_note[0].upper() == 'A':
        frequency = 440.00 / 2 ** (4 - int(user_note[1]))
    
    else :
        frequency = 493.88 / 2 ** (4 - int(user_note[1]))
    
    print(f"The frequency of {user_note.upper()} is {frequency:.2f}")

else:
    print("Please enter the correct note!")