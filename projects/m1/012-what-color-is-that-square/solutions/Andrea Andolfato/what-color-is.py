
column = input("please insert a letter from A to H")
row = int(input("please enter a number from 1 to 8"))

black_columns = "ACEG"
white_columns = "BDFH"
odd_numbers = 1,3,5,7

if white_columns in column and row % 2 == 0:
    print("The square is white")
elif black_columns in column and row in odd_numbers:
    print("The square is white")
else:
    print("The square is black")