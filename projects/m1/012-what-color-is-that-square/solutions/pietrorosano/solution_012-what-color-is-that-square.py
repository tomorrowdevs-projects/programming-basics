# Positions on a chess board are identified by a letter and a number. The letter identifies the column,
# while the number identifies the row, as shown below: Write a program that reads a position from the user.
# Use an if statement to determine if the column begins with a black square or a white square.
# Then use modular arithmetic to report the color of the square in that row.
# For example, if the user enters a1 then your program should report that the square is black.
# If the user enters d5 then your program should report that the square is white.
# Your program may assume that a valid position will always be entered.
# It does not need to perform any error checking.

black_column = ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
white_column = ["b", "d", "f", "h", "j", "l", "n", "p", "r", "t", "v", "x", "z"]

print("\nEnter the column (Es. a - h)")
column = input()

print("\nNow enter the row of the board (1-8)")
row = input()

if column in black_column:
    print ("\nThe column " + column + " starts with a BLACK square.")
else:
    print ("\nThe column " + column + " starts with a WHITE square.")



if column in black_column and int(row) % 2 != 0 or column in white_column and int(row) % 2 == 0:
    print ("\nThe square " + column + row + " is BLACK.")
else:
    print ("\nThe square " + column + row + " is WHITE.")
