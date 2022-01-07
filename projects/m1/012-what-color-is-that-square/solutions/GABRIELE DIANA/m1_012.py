# What Color Is That Square?

# Positions on a chess board are identified by a letter and a number. 
# The letter identifies the column, while the number identifies the row, as shown below:

# <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Chess-board-with-letters_nevit_111.svg" />

# Write a program that reads a position from the user. 
# Use an if statement to determine if the column begins with a black square or a white square. 
# Then use modular arithmetic to report the color of the square in that row. 
# For example, if the user enters a1 then your program should report that the square is black. 
# If the user enters d5 then your program should report that the square is white. 
# Your program may assume that a valid position will always be entered. 
# It does not need to perform any error checking.

# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

# Deadline

# This project requires to be completed in a maximum of **4 hours**

# I proceed to assign my variable to an input and split it into rows and columns.
position = input("Insert position board position: ").upper()
column = position[0]
row = int(position[1])
# I introduce modular arithmetic in the rows' calculation.
if row > 8:
    row = row % 8
# I create 2 arrays for my columns depending on the color of the first position.
first_white = "BDFH"
first_black = "ACEG"

# I create my function depending on the array the input column belongs to.
def color(column, row):
    if column in first_white:
        if row % 2 == 1:
            return "White"
        else:
            return "Black"
    if column in first_black:
        if row % 2 == 0:
            return "White"
        else:
            return "Black"


print("The square is: " + color(column, row))




