#Target focus "The letter identifies the column, while the number identifies the row by the User!"

introduction = input(" Hello what's your name ")

reply = " Nice to meet you i'm robot dora "

print(" so " + introduction + reply)

blackwhite_column = input("Please select the column black or white for examples(a-h): ").lower()

row_number = int(input("Please select the row to begin for examples(1-8): "))

#Start the core

if blackwhite_column == "a" or blackwhite_column == "c" or blackwhite_column == "e" or blackwhite_column == "g":
    if row_number % 2 == 1: print("The {}{} square is white".format(blackwhite_column,row_number))
    else: print("The {}{} square is black".format(blackwhite_column,row_number))

if blackwhite_column == "b" or blackwhite_column == "d" or blackwhite_column == "f" or blackwhite_column == "h":
    if row_number % 2 == 1: print("The {}{} square is black".format(blackwhite_column,row_number))
    else: print("The {}{} square is white".format(blackwhite_column,row_number))