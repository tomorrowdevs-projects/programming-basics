
column = input("please insert a letter from A to H: ")
row = int(input("please enter a number from 1 to 8: "))

black_columns = "ACEG"
white_columns = "BDFH"
odd_numbers = 1,3,5,7
even_numbers = 2,4,6,8

if column in black_columns and row in odd_numbers:
    print("The square is black")
if column in black_columns and row in even_numbers:
    print("The square is white")
if column in white_columns and row in odd_numbers:
    print("The square is black")
if column in white_columns and row in even_numbers:
    print("The square is black")