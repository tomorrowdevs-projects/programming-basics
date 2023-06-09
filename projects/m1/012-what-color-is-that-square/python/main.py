#Target focus "The letter identifies the column, while the number identifies the row by the User!"

#AI briefing

def introduction():
    print(input("Hey what's your name"))
    print("Nice to meet you i'm a bot doradora")
    
introduction()

#Assigning variables

blackwhite_column = input("Please select the column black or white for examples(a-h) ").upper()

row_number = int(input("Please select the raw to begin for examples(1-8) "))

#Start the core of the project

if blackwhite_column == "A" or blackwhite_column == "C" or blackwhite_column == "E" or blackwhite_column == "G":
    if row_number % 2 == 0: print("The {}{} square is white".format(blackwhite_column,row_number))
    else: print("The {}{} square is black".format(blackwhite_column,row_number))
if row_number == "B" or row_number == "D" or row_number == "F" or row_number == "H":
    if row_number % 2 == 0: print("The {}{} square is black".format(blackwhite_column,row_number))
    else: print("The {}{} square is white".format(blackwhite_column,row_number))