#What color is that square?

column = input("Enter a column(a-h): ").lower()
row = int(input("Enter a row(1-8): "))
if column == "a" or column == "c" or column == "e" or column == "g":
    if row % 2 == 0: print("The {}{} square is white".format(column,row))
    else: print("The {}{} square is black".format(column,row))
if column == "b" or column == "d" or column == "f" or column == "h":
    if row % 2 == 0: print("The {}{} square is black".format(column,row))
    else: print("The {}{} square is white".format(column,row))