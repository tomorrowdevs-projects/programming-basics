# defines a function that take an integer between 1 and 12 and return the corresponding ordinal number 
def integer_to_ordinal(integers):
    if integers == 1:
        return 'First'
    elif integers == 2:
        return 'Second'
    elif integers == 3:
        return 'Third'
    elif integers == 4:
        return 'Fourth'
    elif integers == 5:
        return 'Fifth'
    elif integers == 6:
        return 'Sixth'
    elif integers == 7:
        return 'Seventh'
    elif integers == 8:
        return 'Eighth'
    elif integers == 9:
        return 'Nineth'
    elif integers == 10:
        return 'Tenth'
    elif integers == 11:
        return 'Eleventh'
    elif integers == 12:
        return 'Twelfth'
    else:
        return 'Enter a number between one and twelve'

# defines a main function that demostrates integer_to_ordinals() displaying ordinal number from "First" to "Twelfth"
def main():
    for i in range(1, 12):
       print(integer_to_ordinal(i))

# declares a conditional statement so the program run main() only if has not been imported in a another file.
if __name__ == "__main__":
    main()
